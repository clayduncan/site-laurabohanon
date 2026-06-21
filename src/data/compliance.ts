import { site } from './site';

export const compliance = {
  licenseLabel: 'Alabama RE License',
  licenseNumber: '000093260-0',
  brokerage: site.brokerage,
  brokerageDisclaimer:
    'This is the personal website of Laura Bohanon and is not operated by or endorsed by Davidson Homes LLC.',
  equalHousing: 'Equal Housing Opportunity.',
  recadNotice:
    'In Alabama, agency is not assumed. Under RECAD, representation is established only through a written agency agreement. Confirm in writing who represents you before sharing confidential information.',
} as const;
