const showcaseContent = {
  sectionTitle: "Showcase",
  sectionSubtitle: "Selected Work",
  cards: [
    { id: 1, type: "evervault", text: "EV" },
    {
      id: 2,
      type: "github",
      label: "LATEST PUSH",
      title: "Partb's Github",
      status: "12h ago",
      headline: '"feat: add template previews for various components"',
      repoName: "Private work",
      socials: { github: "#", linkedin: "#", twitter: "#" },
    },
    {
      id: 3,
      type: "visitors",
      label: "VISITORS",
      headingLine1: "Leave your",
      headingLine2: "signature",
      description: "Let me know you were here.",
      ctaText: "Sign Guestbook",
      ctaLink: "#",
      visitors: [
        { id: 1, image: "/p1.jpg", name: "Visitor 1" },
        { id: 2, image: "/p2.jpg", name: "Visitor 2" },
        { id: 3, image: "/p3.jpg", name: "Visitor 3" },
      ],
      visitorsText: "Join others",
    },
    {
      id: 4,
      type: "tools",
      title: "Favorite Tools",
      tools: ["claude", "gemini", "n8n"],
    },
    {
      id: 5,
      type: "musicMood",
      embedUrl:
        "https://open.spotify.com/embed/playlist/37i9dQZF1DXcYHCSWjSx6A?utm_source=generator&theme=0",
    },
  ],
};

export default showcaseContent;
