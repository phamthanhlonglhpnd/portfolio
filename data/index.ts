import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Xanalia is a multi-chain digital content NFT platform",
    des: "Xanalia is a multi-chain digital content NFT platform where users can create, sell and buy digital content NFTs easily. Users follow their favorite creators, buy and sell their collectibles in the market. Creators can create and trade NFTs on different blockchain networks such as Ethereum, BSC, Poligon.",
    img: "/xana.webp",
    iconLists: [
      "/next.svg",
      "nestjs.svg",
      "/aws.svg",
      "/three.svg",
      "/mongo.svg",
    ],
    link: "https://xana.net/nft/marketplace",
  },
  {
    id: 2,
    title: "Kaia - where your Web3 journey begins Register",
    des: "Welcome to Kaia! Whether you're new to blockchain development or experienced with EVM chains, this guide helps you build on Kaia quickly. We'll walk you through setup, tools, and your first projects step by step.",
    img: "/kaia-sdk.png",
    iconLists: ["ethers.svg", "web3.svg", "/next.svg", "/ts.svg"],
    link: "https://docs.kaia.io",
  },
  {
    id: 3,
    title: "The CODE - Beyond Storage",
    des: "Daily deliveries and collections. We deliver and collect your items from anywhere you want",
    img: "/the-code.svg",
    iconLists: [
      "nestjs.svg",
      "/next.svg",
      "/tail.svg",
      "/pgsql.svg",
      "/aws.svg",
    ],
    link: "https://app.thecode.ae/",
  },
  {
    id: 4,
    title: "AI Livestream",
    des: "Discover the power of livestreaming with AI Live. Grow your sales and grow your brand with 24/7 AI livestream.",
    img: "/ai-livestream.png",
    iconLists: ["python.svg", "/next.svg", "/tail.svg", "/pgsql.svg"],
    link: "https://ai.passio.eco/home-page",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Pham Thanh Long was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Pham Thanh Long's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Pham Thanh Long is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Pham Thanh Long was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Pham Thanh Long's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Pham Thanh Long is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Pham Thanh Long was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Pham Thanh Long's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Pham Thanh Long is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Pham Thanh Long was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Pham Thanh Long's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Pham Thanh Long is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Pham Thanh Long was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Pham Thanh Long's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Pham Thanh Long is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
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
    title: "Frontend Engineer - SotaTek",
    desc: "Assisted in the development of a web-based platform using React.js, NextJS, Web3JS enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer - Ecomobi",
    desc: "Designed and developed web app using NextJS.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Led the dev of a web app for a client, from initial concept to deployment on production.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/phamthanhlonglhpnd",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/longphamthanh/",
  },
];
