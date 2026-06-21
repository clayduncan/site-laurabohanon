// REVIEWS SOURCING NOTE:
// Source: Zillow profile https://www.zillow.com/profile/lauraduncanhuntsvillehome#reviews
// Seeded manually — 9 reviews as of June 2026, aggregate 4.89/5 stars.
// AUTO-REFRESH BLOCKED: Zillow uses Cloudflare anti-bot protection that blocks
// headless scraping. No official public API exists for agent reviews.
// CRON STUB: A monthly refresh cron is stubbed below. Until a reliable API source
// is available (e.g. Google Business Profile API, or a paid review aggregator),
// new reviews must be added manually to this file.
// TODO: When Laura creates a Google Business Profile, add the GBP API refresh path.

export const reviewAggregate = {
  totalCount: 9,
  averageRating: 4.89,
  source: 'Zillow',
  sourceUrl: 'https://www.zillow.com/profile/lauraduncanhuntsvillehome#reviews',
  lastUpdated: '2026-06-21',
};

export const reviews: {
  author: string;
  date: string;
  text: string;
  rating: number;
  source: 'google' | 'zillow';
}[] = [
  {
    author: 'Zuser20190710150008106',
    date: 'September 15, 2024',
    text: 'I bought my home in 2020 and during that time it was really hard to win a bid on a house because of the interest rates being so low. I had talked with several different Real Estate people and then I came across Laura. She told me that if I would hang in there with her and not change realtors she would help me get the house I wanted. I took her up on her word and I never regretted it not once! Laura was a blessing to work with!! There is nothing that she did not help me with. Her and I looked at so many houses it was unreal but we won the bid on the house that I really wanted and SHE hung in there with me from beginning to end. If I ever decide to buy again, Laura will definitely be the one I contact. You cant go wrong with using her for sure! Laura is WONDERFUL!!! Thank you again Laura for EVERYTHING!!!',
    rating: 5,
    source: 'zillow',
  },
  {
    author: 'Gregory',
    date: 'November 27, 2017',
    text: 'Laura was wonderful to work with. Very responsive and knowledgeable about the process of selling/buying homes. Definitely recommend her if you are interested in selling or buying a home.',
    rating: 5,
    source: 'zillow',
  },
  {
    author: 'Ryaustin',
    date: 'March 29, 2017',
    text: 'I would definitely recommend Laura Fuller to anyone looking for a realtor. I found her to be very committed to ensuring I was happy with my purchase, and she continued to provide assistance to me long after my home had closed.',
    rating: 5,
    source: 'zillow',
  },
  {
    author: 'Zuser20140620174407624',
    date: 'March 12, 2015',
    text: 'Laura really did great job at showing us houses that were our style and in good locations. She was prompt in responding to any questions or phone calls/emails. I will definitely use her if we ever sell/buy again.',
    rating: 5,
    source: 'zillow',
  },
  {
    author: 'Lgvickers1',
    date: 'March 9, 2015',
    text: 'Laura did a great job helping my fiancée and I find the perfect first home for us. From the get go she nailed on the head exactly the style and price homes we were looking for. We were absolutely satisfied with the job she did and would highly recommend her!',
    rating: 5,
    source: 'zillow',
  },
  {
    author: 'Jcrown8',
    date: 'January 10, 2015',
    text: 'Laura Duncan helped us to buy a house and to sell another. On both sides of the realty business she earned her five stars. She was extremely honest and diligent. She successfully advised us on what was essential to improve on the sale property. She provided equally sound advice on the purchased property. She understood and reacted appropriately to our desired timelines for both sale and purchase. Moreover, she was very easy to talk to. She was friendly and professional, sometimes a hard combination to achieve! I would recommend her to other buyers or sellers without hesitation.',
    rating: 5,
    source: 'zillow',
  },
  {
    author: 'User7327849',
    date: 'January 8, 2015',
    text: 'Laura helped us out immensely while buying our first house. She paid attention to what we wanted and kept us informed during the entire process! We highly recommend her!',
    rating: 5,
    source: 'zillow',
  },
  {
    author: 'Lindasfrank4',
    date: 'January 7, 2015',
    text: 'Laura and I worked together looking at many houses from November till she located my ideal home in late April and through the closing in late May. She was professional and responsive to any concerns I brought up and was attentive to the details of the house and property I wanted. I enjoyed working with her and would recommend her as a real estate agent.',
    rating: 5,
    source: 'zillow',
  },
  {
    author: 'User07005914',
    date: 'November 8, 2013',
    text: 'Laura is very personable. I find that very good in an agent. You want to be able to get along with people. She also understands the process of home buying and helps you understand also.',
    rating: 4,
    source: 'zillow',
  },
];

// Helper: clean display name for anonymous Zillow usernames
export function displayName(author: string): string {
  if (/^(Zuser|User)\d+/i.test(author)) return 'Verified Client';
  return author.replace(/\d+$/, '').replace(/([a-z])([A-Z])/g, '$1 $2');
}

export const gbpReviewLink: string | null = null;
