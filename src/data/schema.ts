import { site } from './site';
import { reviewAggregate } from './reviews';

const baseUrl = site.url;
const personId = `${baseUrl}/#laura`;
const orgId = `${baseUrl}/#brokerage`;
const serviceId = `${baseUrl}/#service`;

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Person', 'RealEstateAgent'],
  '@id': personId,
  name: site.name,
  jobTitle: site.title,
  url: baseUrl,
  image: `${baseUrl}${site.heroImage}`,
  telephone: site.phone,
  email: site.email,
  description: site.description,
  worksFor: { '@id': orgId },
  areaServed: site.serviceAreaCounties.map(county => ({
    '@type': 'AdministrativeArea',
    name: county,
  })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: reviewAggregate.averageRating,
    reviewCount: reviewAggregate.totalCount,
    bestRating: 5,
    worstRating: 1,
  },
  sameAs: [
    site.social.facebook,
    site.social.instagram,
    site.social.linkedin,
    site.reviewLinks.zillow,
  ].filter(Boolean) as string[],
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': orgId,
  name: site.brokerage,
  url: 'https://www.davidsonhomes.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Huntsville',
    addressRegion: 'AL',
    addressCountry: 'US',
  },
};

export const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': serviceId,
  name: 'New-Construction Buyer Representation',
  description:
    'Buyer representation and guidance for new-construction home purchases in Ramsay Cove, Owens Cross Roads, Hampton Cove, and Madison County, Alabama. Specializing in Davidson Homes semi-custom communities.',
  provider: { '@id': personId },
  areaServed: site.serviceAreaCounties.map(county => ({
    '@type': 'AdministrativeArea',
    name: county,
  })),
  serviceType: 'Real Estate Agent Services',
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  url: baseUrl,
  name: `${site.name} — New-Construction Specialist`,
  publisher: { '@id': personId },
};

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Davidson Homes different from other production builders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Davidson Homes is a semi-custom production builder. That means buyers get more structural options and upgrade choices than a standard production build. You are not just picking countertops — you can influence layout options, elevations, and finishes across each home series. That level of flexibility is why Laura chose Davidson over other production builders when she focused her career on new construction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I customize my Davidson home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Davidson offers meaningful customization across their home series — more options than most production builders provide. The range of choices depends on the series and build phase. Laura can walk you through exactly what options are available before you commit, so you understand what you can and cannot change before construction begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need my own agent when buying from a builder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No law requires it, but it is often valuable. Having your own agent gives you someone whose role is to guide you through contracts, upgrade choices, inspections, timelines, and financing terms. In Alabama, representation is established through a written agreement — put it in place before you tour.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Ramsay Cove in Owens Cross Roads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ramsay Cove is a Davidson Homes community in Owens Cross Roads, Alabama, in Madison County on Highway 431, about 19 miles from Huntsville. It is in the New Hope school district. The community is one of Laura's primary focuses — she knows the floor plans, lot options, and build timeline closely.",
      },
    },
    {
      '@type': 'Question',
      name: 'Who does Laura typically work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Laura works most often with first-time buyers and move-up buyers, plus downsizers who want a low-maintenance new build. Her clients consistently say that communication is what sets her apart — she keeps people informed throughout the process. If you want to know where you stand at every stage, that is her approach.",
      },
    },
  ],
};
