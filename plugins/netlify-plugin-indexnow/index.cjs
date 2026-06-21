const fs = require('node:fs/promises');
const path = require('node:path');

const HOST = 'www.clayduncan.com';
const SITE_URL = `https://${HOST}`;
const INDEXNOW_KEY = '56dda205f3ec27bf1b8f3f1b0f6fc542';
const INDEXNOW_KEY_FILE = `${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) =>
    match[1].trim(),
  );
}

async function readSitemapUrls(publishDir) {
  const sitemapIndexPath = path.join(publishDir, 'sitemap-index.xml');
  const sitemapIndex = await fs.readFile(sitemapIndexPath, 'utf8');
  const sitemapLocations = extractLocs(sitemapIndex);
  const urls = [];

  for (const sitemapLocation of sitemapLocations) {
    const sitemapUrl = new URL(sitemapLocation);
    const sitemapPath = path.join(
      publishDir,
      path.basename(sitemapUrl.pathname),
    );
    const sitemap = await fs.readFile(sitemapPath, 'utf8');
    urls.push(...extractLocs(sitemap));
  }

  return [...new Set(urls)].filter((url) => {
    try {
      return new URL(url).host === HOST;
    } catch {
      return false;
    }
  });
}

module.exports = {
  onSuccess: async ({ constants, utils }) => {
    const isProductionMainDeploy =
      process.env.NETLIFY === 'true' &&
      process.env.CONTEXT === 'production' &&
      process.env.BRANCH === 'main';

    if (!isProductionMainDeploy) {
      console.log('[IndexNow] Skipping: not a production deploy from main.');
      return;
    }

    const publishDir = constants.PUBLISH_DIR || 'dist';
    const keyPath = path.join(publishDir, INDEXNOW_KEY_FILE);
    const key = (await fs.readFile(keyPath, 'utf8')).trim();

    if (key !== INDEXNOW_KEY) {
      utils.build.failPlugin(
        `[IndexNow] Key file mismatch in ${INDEXNOW_KEY_FILE}.`,
      );
      return;
    }

    const urlList = await readSitemapUrls(publishDir);

    if (!urlList.length) {
      utils.build.failPlugin('[IndexNow] No URLs found in sitemap.');
      return;
    }

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY_FILE}`,
      urlList,
    };

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const body = await response.text();
      utils.build.failPlugin(
        `[IndexNow] Submit failed: ${response.status} ${response.statusText} ${body}`,
      );
      return;
    }

    console.log(`[IndexNow] Submitted ${urlList.length} URLs.`);
  },
};
