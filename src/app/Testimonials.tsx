export const testimonials = [
  {
    text: "Working with the team is my favorite part of the week.",
    user: "Arvid Winterfeld",
    role: "CEO at Qura",
    imageUrl: "/images/profiles/arvid.png",
  },
  // {
  //   text: "They truly understand great design.",
  //   user: "Alex Wikström",
  //   role: "CEO at Darwin",
  //   imageUrl: ""
  // },
  {
    text: "Professional team doing a really good job. After the first job I hired them again.",
    user: "Jan Eriksson",
    role: "CEO at Flexiwaggon & TTS",
    imageUrl: "/images/profiles/jan.png",
  },
  {
    text: "We are grateful for having worked with them, and hope to do it again in the future.",
    user: "Magnus Ivarsson",
    role: "CEO at MycoMine",
    imageUrl: "/images/profiles/magnus.png",
  },
  {
    text: "They really understood our company and our vision. I can recommend these guys.",
    user: "Hans Delking",
    role: "CEO at Payable",
    imageUrl: "/images/profiles/hans.png",
  },
  {
    text: "My startup coach said my website looked like some million-dollar business.",
    user: "Alex Aktén",
    role: "CEO at Airbon",
    imageUrl: "/images/profiles/alex-a.png",
  },
  {
    text: "Really happy working with them.",
    user: "Karthik Laxman",
    role: "CEO at SWT",
    imageUrl: "/images/profiles/karthik.png",
  },
];

export const reversedTestimonials = testimonials.map((testimonial) => ({
  ...testimonial,
}));
