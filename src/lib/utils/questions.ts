export interface Question {
  question: string;
  answer: string;
  href?: {
    name: string;
    url: string;
  };
}

export const questions: Question[] = [
  {
    question: 'Why does the community need a new masjid?',
    answer:
      'Our current facility no longer meets the needs of our growing community. The new masjid will provide larger prayer spaces, dedicated classrooms for Islamic education, areas for community events, and improved facilities. It will serve as a spiritual hub for generations to come.'
  },
  {
    question: 'Can I make a recurring donation?',
    answer:
      'Yes, recurring donations are a great way to contribute consistently. You can set up a recurring donation plan by going onto the donation website below. It has options for both one-time and monthly recurring donations. Even small monthly donations can make a significant impact, and any support is greatly appreciated.',
    href: {
      name: 'Click here to donate',
      url: 'https://checkout.square.site/merchant/MLJGAABQWSY7N/checkout/LMCROJTOGFCEPQJM5VAPH7VX'
    }
  },
  {
    question: 'I have a question that was not answered in this FAQ. What can I do to learn more?',
    answer:
      'Please feel free to contact us with any of your questions or comments at the email below. We will try to get back to you as soon as possible.',
    href: {
      name: 'info@masjidaltawheed.com',
      url: 'mailto:info@masjidaltawheed.com'
    }
  }
];
