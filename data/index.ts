export const navItems = [
  { name: "About", link: "#about" },
  { name: "Portfolio", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

// 调整grid对齐实在每个className中调整row span

export const gridItems = [
  {
    id: 1,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },

  {
    id: 2,
    title: "New York University '26",
    description: "Born in Zhuhai (China), made in New York City",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },

  {
    id: 4,
    title: "Tech enthusiast with a passion for AI, Robotics, and LLM.",
    description: "I volunteered at NYU AI4CE Lab",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  // {
  //   id: 3,
  //   title: "I prioritize client collaboration, fostering open communication ",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "w-full h-full",
  //   titleClassName: "justify-end",
  //   img: "/b1.svg",
  //   spareImg: "",
  // },

  {
    id: 5,
    title: "Currently building a startup: ",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2 lg:col-span-3",
    imgClassName: "absolute right-0 bottom-0 md:w-70 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Company News Agent",
    des: "An autonomous AI agent system to search, scrape, and generate AI insights from public company news",
    img: "/newsagent.svg",
    iconLists: [],
    link: "https://github.com/andrewangbl/company-news-collector-gpt",
  },
  {
    id: 2,
    title: "Prompt Hub",
    des: " An open-source AI prompting tool for discovering, creating, and sharing AI prompts",
    img: "/phub.svg",
    iconLists: ["/next.svg", "/tail.svg"],
    link: "https://github.com/andrewangbl/prompt-sharing-hub",
  },
];

export const testimonials = [
  {
    quote:
      "Andre worked as a software engineering intern at Procuro for several months, and he was a fantastic addition to the team. He is smart, thoughtful, and, most importantly, curious. He asked great questions and was always eager to take on more work and projects. Andre showed a lot of grit and a strong work ethic. During his time at Procuro, Andre over-delivered on his project that will be implemented in our production environment in the near future. We highly recommend him as a valuable member of the team.",
    name: "Antonio Goncalves",
    title: "CEO @ procuro.ai (Antonio managed Andre directly)",
    avatar: "/antonio.png",
  },
  {
    quote:
      "Andre has a strong will to seek out new challenges, effectively leveraging resources to learn new things & apply them right away. At Procuro AI, Andre was able to learn from scratch how to build and deploy an AI research agent that writes data to an external database for research relevant to business operations. To employ these skills not learned in the classroom, Andre was able to stay on top of his work and hit milestones effectively while taking a full course load at NYU. ",
    name: "Jake Vollkommer",
    title: "CTO @ procuro.ai (Jake managed Andre directly)",
    avatar: "/jake.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern - Procuro AI",
    desc: "Built a scalable backend API to automate the scraping of company news articles.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - CityCharge",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance AI Engineer - Pomu",
    desc: "Assisted in building a fashion manufacture recommendation system based on OpenAI CLIP(Contrastive Language-Image Pre-training) model.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Undergraduate Research Assistant",
    desc: "Tested and calculated metrics for SLAM (Simultaneous Localization and Mapping) algorithms.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/andrewangbl",
    name: "github",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/AndreBinglin",
    name: "twitter",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/binglin-wang/",
    name: "linkedin",
  },
];
