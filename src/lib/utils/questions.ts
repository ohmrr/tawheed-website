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
    question: 'Are donations through Zelle accepted?',
    answer:
      'Yes, you can donate through Zelle for a quick and secure transfer. Be sure to add donations@masjidaltawheed.com as your Zelle recipient. Send us an email with your contact information and Zelle confirmation number so we can register you and send you a receipt. You can send all information to the email listed below.',
    href: {
      name: 'info@masjidaltawheed.com',
      url: 'mailto:info@masjidaltawheed.com'
    }
  },
  {
    question: 'Can I sponsor a specific part of the masjid?',
    answer:
      "We are currently offering sponsorship for 130 parking spaces, each for $2,000. While the space won't be reserved specifically for you, it's an excellent opportunity to earn continuous rewards every time someone uses that space. Sponsoring a parking space helps support the masjid's development and serves as a source of blessings, insha'Allah. if you'd wish to sponsor a space, please contact us for more details."
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
