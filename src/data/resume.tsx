import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shameera Carrim",
  initials: "SC",
  url: "https://shameeracarrim.com",
  location: "Colombo, Sri Lanka",
  locationLink: "",
  description: "Software Engineer and I love building things.",
  summary: `Software engineer with experience of building interactive and user centered
web applications’ features proactively. Proven ability to leverage full-stack
knowledge and work as a hardworking, problem solving individual and
extensively carry out tasks start to finish.`,
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "NextJs",
    "VueJs",
    "NuxtJs",
    "Typescript",
    "NodeJs",
    "JavaScript",
    "SQL",
    "Dot net web API with C#",
    "MongoDB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://medium.com/@shameeracarrim",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "shameera.carrim17@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Shameera17",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shameeracarrim17/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "shameera.carrim17@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "D3 Maven (PVT) ltd",
      href: "https://innovative-e.com/",
      badges: [],
      location: "On-site",
      title: "Software Engineer",
      logoUrl: "/d3_maven_logo.jpeg",
      start: "January 2025",
      end: "Present",
      description: [
        "Developed and maintained a Gym Facility Management System to onboard brands and their facilities, manage facility memberships, bookings, and resource allocation.",
        "Built features for a Therapy Management System including therapist scheduling, client tracking, and session notes.",
      ],
    },
    {
      company: "Innovative-e (PVT) ltd",
      href: "https://innovative-e.com/",
      badges: [],
      location: "On-site",
      title: "Software Engineer",
      logoUrl: "/innovativee.jpg",
      start: "May 2024",
      end: "September 2024",
      description: [
        "In the Telemedicine Platform project, I worked with a tech stack including React.js, C#, MSSQL Server, Context API, Syncfusion, and Material-UI. My responsibilities included implementing full-stack features with seamless frontend-backend integration, collaborating effectively with the team to address feedback and concerns, and performing demos to leads to showcase progress and gather insights. Additionally, I mentored interns, helping them navigate challenges, and shared knowledge on new technologies with the team. I also played a key role in negotiating requirements and ensuring alignment between the development process, Business Analysts (BA), and Quality Assurance (QA) teams to ensure successful project delivery.",
      ],
    },
    {
      company: "Innovative-e (PVT) ltd",
      href: "https://innovative-e.com/",
      badges: [],
      location: "On-site",
      title: "Assciate Software Engineer",
      logoUrl: "/innovativee.jpg",
      start: "March 2023",
      end: "May 2024",
      description: [
        "In the Telemedicine Platform project, I worked with a tech stack that included React.js, C#, MSSQL Server, Context API, Syncfusion, and Material-UI. My key responsibilities involved integrating i18n to support multiple languages, building REST APIs with C#, and developing React components based on the Atomic Design System. Additionally, I mentored interns, providing guidance on debugging and fixing issues.",
        "For the Password Sharing App, I utilized React.js, C#, and MSSQL Server. My role included providing knowledge transfer (KT) sessions to interns, clarifying project goals and technical expectations, and mentoring them in REST architecture to improve their technical skills. I also reviewed and provided feedback on their work to ensure quality and consistency.",
        "In the Auction Web Application, I worked with a tech stack consisting of React.js, Node.js, Express.js, MySQL, Context API, and Material-UI. I was responsible for developing data filter and display card components, enhancing form activities using react-hook-form with Yup validation, and building REST APIs to enable communication between the frontend and backend. Additionally, I handled debugging and fixed various issues to ensure smooth operation of the application.",
      ],
    },
    {
      company: "CabbageApps",
      badges: [],
      href: "https://www.cabbage.team/",
      location: "Remote",
      title: "Assciate Software Engineer",
      logoUrl: "/cabbageteam.png",
      start: "February 2022",
      end: "January 2023",
      description: [
        "In the Core Banking System - Fintech project, I worked on a core-banking platform developed in-house to standardize and optimize fintech operations. The tech stack included React.js, TypeScript, Context API, Redux, AntD, Tailwind, and Sass. The platform encompassed several subsystems, including CASA, ATM, Lending, Term Deposit, and Cash & Teller. My responsibilities included debugging and fixing bugs, developing reusable components based on atomic design patterns, and creating user interfaces to facilitate CRUD operations.",
      ],
    },
    {
      company: "CabbageApps",
      badges: [],
      href: "https://www.cabbage.team/",
      location: "Remote",
      title: "Intern Software Engineer",
      logoUrl: "/cabbageteam.png",
      start: "August 2021",
      end: "February 2022",
      description: [
        "In the QA Tool (In-House Project), developed using the MERN stack, I was involved in both the QA automation algorithm and the web application. For the QA Tool automation algorithm, I conducted research and development (R&D), writing test cases and using permutation logic to generate them. I also developed a mechanism to generate test cases based on user-selected components and datasets. For the QA Tool web application, I worked with a tech stack including React, TypeScript, Redux, AntD, HTML/CSS, Tailwind, and SASS. My responsibilities included developing reusable components based on atomic design patterns and creating feature components to perform QA tasks.",
        "In the Core Banking System - Fintech, I worked with React, TypeScript, Context API, Redux, AntD, Tailwind, HTML/CSS, and Sass. The subsystems I focused on included Collateral and CASA. My responsibilities included developing a feature to process multiple manual entries and bulk file upload entries, as well as developing user interfaces to facilitate CRUD operations.",
      ],
    },
  ],
  education: [
    {
      school: "University of Plymouth",
      href: "https://www.plymouth.ac.uk",
      degree: "BSc(Hons) Software Engineering,",
      logoUrl: "/plymouth.png",
      start: "2021",
      end: "2018",
    },
    {
      school: "NSBM Green University Town",
      href: "https://www.nsbm.ac.lk",
      degree: "Foundation for bachelor’s degree",
      logoUrl: "/nsbm.png",
      start: "2017",
      end: "2018",
    },
    {
      school: "Royal Institute International",
      href: "https://royalinstitute.org/",
      degree: "Secondary Education",
      logoUrl: "/ri.png",
      start: "2012",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Task management",
      href: "https://task-management-v2-five.vercel.app/tasks",
      dates: "November 2024",
      active: true,
      description: `The Task Management Drag-and-Drop feature, built with Next.js, allows users to easily organize and prioritize tasks by dragging them between columns. It enables seamless task movement through stages like "To Do," "In Progress," and "Completed." The feature is responsive, offering smooth transitions across devices.`,
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://task-management-v2-five.vercel.app/tasks",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Shameera17/task-management-v2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/task-mng.png",
      video: "",
    },
    {
      title: "User Portfolio Management",
      href: "https://user-portfolio-management-ivory.vercel.app",
      dates: "October 2024 - Present",
      active: true,
      description:
        "User Portfolio Management is a feature that enables users to manage and track their portfolios efficiently. It allows users to add, edit, and remove portfolio items, categorize them, and view detailed insights. Built with a responsive interface, it provides a seamless experience across devices. The system ensures data integrity and delivers a user-friendly design for streamlined portfolio management.",
      technologies: [
        "Next.js",
        "Typescript",
        "Next-auth",
        "Shadcn UI",
        "MangoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://user-portfolio-management-ivory.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/user-port.png",
      video: "",
    },
    {
      title: "Grid Layout",
      href: "https://qgf6f9.csb.app/",
      dates: "-",
      active: true,
      description:
        "Exploring responsive grid layouts with CSS Grid and Flexbox. ",
      technologies: ["React.js", "HTML/CSS", "Javascript"],
      links: [
        {
          type: "Website",
          href: "https://qgf6f9.csb.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://codesandbox.io/p/sandbox/learning-responsiveness-qgf6f9",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/responsive.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
