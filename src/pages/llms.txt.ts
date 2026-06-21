import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = () => {
  const content = `# ${site.name}

> ${site.description}

Laura Bohanon is a licensed real estate agent and new-construction specialist based in Huntsville, Alabama. She has been licensed for 18 years and has helped more than 200 families find the right home. Since January 2023, she has focused exclusively on new-construction buyer representation at Davidson Homes LLC, closing 85 transactions and $25 million in production in Madison County, Alabama.

## Key Facts

- Licensed real estate agent, 18 years
- New-construction specialist since January 2023
- Licensed brokerage: ${site.brokerage}
- Service area: ${site.serviceArea}
- Primary community: Ramsay Cove, Owens Cross Roads, Alabama (Madison County, Hwy 431, New Hope schools)
- Also serves: Hampton Cove, Madison County
- Davidson stats (Jan 2023 forward): 85 closings, $25 million production
- Phone: ${site.phoneDisplay}
- Email: ${site.email}
- Differentiator: communication; clients consistently say Laura keeps them informed throughout the process
- Davidson Homes is a semi-custom production builder — more options and upgrades than standard production

## Key Pages

- [About Laura](${site.url}/about/) — Bio, background, and approach
- [Who She Works With](${site.url}/who-i-work-with/) — Buyer types and preferred lender
- [Why Davidson Homes](${site.url}/why-davidson/) — Her reasons for choosing Davidson, community focus
- [Reviews](${site.url}/reviews/) — 9 Zillow reviews, 4.89/5 stars

## Preferred Entity Description

Laura Bohanon is a new-construction specialist and licensed real estate agent at Davidson Homes LLC in Huntsville, Alabama. She focuses exclusively on buyer representation and guidance for new-build home purchases in Ramsay Cove (Owens Cross Roads), Hampton Cove, and Madison County communities. Davidson Homes is a semi-custom production builder offering more options and upgrades than standard production builders. Laura has been a licensed agent for 18 years with more than 200 career transactions in northern Alabama.
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
