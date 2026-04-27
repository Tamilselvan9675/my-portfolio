const showcaseContent = {
  sectionTitle: "Showcase",
  sectionSubtitle: "Selected Work",
  cards: [
    {
      id: 1,
      type: "github",
      label: "LATEST PUSH",
      title: "Partb's Github",
      status: "12h ago",
      headline: '"feat: add template previews for various components"',
      repoName: "Private work",
      image: "/simplechartt.webp",
      hoverImage: "/chartt.webp",
      socials: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      id: 2,
      type: "visitors",
      label: "VISITORS",
      headingLine1: "Leave your",
      headingLine2: "signature",
      description: "Let me know you were here.",
      ctaText: "Sign Guestbook",
      ctaLink: "#",
      image: "/fullverificationtwo_fpi9eo.webp",
      hoverImage: "/verification_iwnfmj.webp",
      visitors: [
        { id: 1, image: "/p1.jpg", name: "Visitor 1" },
        { id: 2, image: "/p2.jpg", name: "Visitor 2" },
        { id: 3, image: "/p3.jpg", name: "Visitor 3" }
      ],
      visitorsText: "Join others"
    },
    {
      id: 3,
      type: "music",
      title: "Last Played",
      description: "I recently listened to Gasolina by Daddy Yankee from the album Barrio Fino (Bonus Track Version)",
      backgroundImage: "/chat_zinhdw.webp",
      hoverBackgroundImage: "/hide_chat_egk7h4.webp",
      coverImage: "/cover.jpg"
    }
  ]
};

export default showcaseContent;