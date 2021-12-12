import properlyLogo from "./components/Experience/image.properly";
import solnetLogo from "./components/Experience/image.solnet";
import victoriaLogo from "./components/Experience/image.vuw";
import middlewareLogo from "./components/Experience/image.mwnz";

export const jobs = [
  {
    title: "Middleware NZ",
    date: "Mar 2019 - Feb 2022 ( 2 years 11 months )",
    isDisabled: false,
    brief: `
      
      I worked at Middleware NZ as a Senior Developer. My focus shifted more towards API and microservice development aiming to broaden my technical experience.

      Many projects gave me practice across a variety of teams, technology and process. 
      I was able to adapt to each unique challenge and achieve positive outcomes for internal and external clients.

      A good part of my time at Middleware NZ was focused delivering an internal product, 
      the Open Banking Accelerator and Engagement Platform, which was successfully implemented within multiple banking clients.
  
      `,
    link: `See the Projects section and some of the work I was apart of with Middleware NZ.`,
    linkHref: "#Projects",
    svg: {
      src: middlewareLogo,
      height: "132px",
      width: "135px",

      style: {
        width: 52,
        float: "right",
        padding: 4,
        backgroundColor: "#282940",
      },
    },
  },
  {
    title: "Properly",
    date: "Nov 2017 - Mar 2019 ( 1 year 4 months )",
    isDisabled: false,
    brief: `
      
      I joined Properly with a team of 14, working across the world to provide tools and people
      to property owners and managers.
  
      After achieving our Series-A funding I became the lead for the frontend team, together owning the multiple web apps of Properly.
  
      Beyond this role, I was involved with more of our engineering, design, and test team activities. This included:
      Web/Service implementation design, Full stack development, UX design, UI test automation, CI pipelines, Infrastructure design, and Infrastructure as code.
  
      `,
    svg: {
      src: properlyLogo,
      height: "2215px",
      width: "770px",
    },
  },
  {
    title: "Solnet",
    date: "Aug 2012 - Nov 2017 ( 5 years 3 months )",
    isDisabled: false,
    brief: `
      
      I started with Solnet after graduating, joining the delivery team.
  
      I gained experience with a variety of clients, first as a front end developer, then as others:
       Devops developer, API developer, Automation tester, and UX designer.
  
      Later at my time in Solnet I mentored team members in Javascript 
      tooling and practices, through 1-on-1's and group presentations.
  
      `,
    link: `See the Projects section and some of the work I've done with Solnet.`,
    linkHref: "#Projects",
    svg: {
      src: solnetLogo,
      height: "2215px",
      width: "770px",
    },
  },
  {
    title: "Research Project: Query Expansion",
    date: "Nov 2011 - March 2012 ( 4 months )",
    isDisabled: true,
    brief: `
  
      My second research opportunity was offered by the supervisor of my honours project.
      
      The project looked at ways that Wikipedia and its hyperlinks could be used to support 
      Query Expansion.  
      
      With Victoria's Web Intelligence team, I got my thesis submitted and accepted to an 
      Australasian Web Intelligence conference.
  
      `,
    svg: {
      src: victoriaLogo,
      height: "792px",
      width: "192px",
    },
  },
  {
    title: "Research Project: Eye Gaze tracking",
    date: "Nov 2010 - March 2011 ( 4 months )",
    isDisabled: true,
    brief: `
      At the end of my 300 level university year I was awarded a research scholarship.
      
      With the support of my supervisor and his team,
      I contributed to the development of an open source gaze tracking system.
  
      `,
    svg: {
      src: victoriaLogo,
      height: "792px",
      width: "192px",
    },
  },
  {
    title: "Cool Bananas",
    date: "Nov 2009 - March 2010 ( 4 months )",
    isDisabled: true,
    brief: `
  
      During an internship with another student and senior
       our team prototyped a scripting interpreter and runtime for embedded systems.
       
      The experience helped cement the past year study learning C, Agile processes, and Testing practices.
      
      `,
  },
];

export const projects = [
  {
    title: "Open Banking Accelerator Product",
    client: "Glueware",
    isDisabled: false,
    brief: `
  
          The Open Banking Accelerator (OBA) product provides a standards conformant set of APIs banks can publish.
  
          With a small internal team, we created the product building on previous years experience within the Open Banking domain.
  
          My role included delegating design, implementation and testing tasks along with reviewing and supporting other work in the team. 
  
          `,
    // The second piece of the product enables a sandbox environment that still adheres to the standards but completely isolates the data a third party interacts with.
    // The last piece of the product presents a conformance test suite that verifies that an API implementation is conforming to the Open Banking standards with or without OBA.
    bullets: [
      "Owned technical leadership of microservice development and testing.",
      "Promoted strong testing culture throughout team.",
      "Succeeded to prove value through multiple trials with banks.",
      "Applied feedback from customers to improve experience and quality of the product.",
      "Worked closely with Product Owners to ensure team tasks and focus was aligned.",
      "Designed scalable and modular application using cloud and microservice patterns.",
    ],
  },
  {
    title: "NZ COVID Pass Integration",
    client: "MoH",
    isDisabled: false,
    brief: `
          
          This project was part of the Ministries COVID response to bring a verifiable COVID pass to people living or visiting New Zealand.
          
          Challenges included ensuring forecasted demand was handled and ensuring the APIs were appropriately secured given their sensitive nature.
  
          My role involved helping support more junior members of the team and aligning the work of the team with the delivery. 
    
        `,
    bullets: [
      "Balanced quality of development under high time pressures.",
      "Enabled other developers and testers within the team by code reviews and pair programming.",
      "Communicated with client and other venders to ensure alignment of delivery.",
      "Supported design and achieved implementation of a highly available solution.",
    ],
  },
  {
    title: "ForgeRock CDR Accelerator",
    client: "ForgeRock",
    isDisabled: true,
    brief: `
    
    
        `,
    bullets: [],
  },
  {
    title: "Visa 3DS Integration",
    client: "Kiwibank",
    isDisabled: true,
    brief: `
    
    
        `,
    bullets: [],
  },
  {
    title: "FHIR Integration",
    client: "Ryman Healthcare",
    isDisabled: true,
    brief: `
    
    
        `,
    bullets: [],
  },
  {
    title: "Open Banking Sandbox Product",
    client: "Payments New Zealand",
    isDisabled: true,
    brief: `
    
    
        `,
    bullets: [],
  },

  {
    title: "Properly",
    client: "Properly",
    isDisabled: true,
    brief: `
    
    
        `,
    bullets: [],
  },
  {
    title: "Lending and Onboarding",
    client: "BNZ",
    isDisabled: false,
    brief: `
    
          I joined a product team at BNZ to help transform their Lending and Onboarding systems, aiming to improve the experience
          for customers and bank users. This transformation was supported by a new way of delivery, promoting more modular systems
          design and implementation with supporting platforms and dev-ops processes.
    
          I shared the lead for the Front-end implementation of two major applications and a component library.
    
        `,
    bullets: [
      // "Lead app design and development seeing Angular 2 through its beta releases.",
      "Lead app design and development using a new front end technology.",
      "Promoted and adapted a UI component library for multiple applications.",
      "Guided Front-end developers through best practices, process and tooling.",
      "Guided UI Integration testers through best practices, process and tooling.",
    ],
  },
  {
    title: "Employment Agreement Builder",
    client: "Ministry of Business and Innovation and Employment",
    isDisabled: false,
    brief: `
    
          EAB is an application for small to medium businesses to create new Employment agreements while learning
          about employment law with easy-to-digest content.
            
          EAB exceeded its objectives and was built, tested, and delivered in three months.
    
        `,
    bullets: [
      "Practiced BDD and TDD creating a suite of feature-complete integration and unit tests.",
      "Created a reusable forms solution, reused for a second MBIE Policy Builder app.",
      "Promoted a full stack Javascript solution supported by docker.",
      "Implemented Node.js micro service handling 10x expected load.",
      "Implemented a pipeline that performed automated testing and releases.",
    ],
  },
  {
    title: "Online Banking",
    client: "Westpac",
    isDisabled: false,
    brief: `
    
          I was part of a Westpac team with a goal to improve their online banking experience.
    
          I supported the developers of the project, mediating communications between development teams.
          I improved automation in local, development, and test environments helping developers become more autonomous.
    
          After two months my role extended to a technical lead of a team of five, responsible for feature development in the middleware.
    
        `,
    bullets: [
      "Trusted as the custodian of environments relied on by a team of 60+.",
      "Lead and mentor of a team of five.",
      "Proposed and owned developer tooling and experience improvements.",
      "Implemented a Javascript framework that supported other teams.",
      "Took ownership for the security feature of the client.",
      // "Created and implemented a UX review noting usability and performance improvements for the application.",
    ],
  },
  {
    title: "NEON",
    client: "Sky TV",
    isDisabled: true,
    brief: `
    
          NEON is Sky TV's entry into the New Zealand TV on demand market. Our project's team was responsible for 
          implementing the Front-end and API supporting other NEON product sitting on different platforms.
    
          My role was a Front-end developer with close contact to the Web API and UX layers.
    
        `,
    bullets: [
      "With the team, implemented Neon's web app using angular.",
      "Integrated with Salesforce API.",
      "Worked remotely for a third of the project.",
    ],
  },
  {
    title: "Crew Forms",
    client: "Air New Zealand",
    isDisabled: true,
    brief: `
    
          The Crew Forms application looked to turn a paper based form into a mobile tablet-based solution.
    
          The experience of these forms was improved with the new technology and with a change in platform 
          the forms were able to be re-imagined to provide a better user experience.
    
          I worked on the project in its second phase, bringing in new features and tidying the first implementation.
    
        `,
    bullets: [
      "Polished up the app correcting dozens of rendering bottlenecks, resulting in a jank-free hybrid solution.",
      "Worked with the UX and Design team to best fit solutions with the technology stack.",
      "Extended the apps feature list and matching test coverage.",
      "Provided solutions to bugs found within open source libraries",
    ],
  },
  {
    title: "Name learning game",
    client: "Private",
    isDisabled: true,
    brief: `
          We entered in a competition to imagine, design, and develop a proof of concept mobile gamification app in 3 days.
    
          The brief was to create an educational tool that would help staff learn the names of their clients.
    
          We placed well in the competition, gaining access to the company's evaluation panel for future
          projects. Shortly after Solnet made a winning proposal for a separate project.
    
        `,
    bullets: [
      "Created a proof of concept application in 3 days.",
      "Succeeded in gaining a position on the client's project panel.",
      "Worked effectively with other Javascript, UX and UI developers in parallel streams.",
    ],
  },
];

export const interests = [
  {
    title: "Javascript",
    isDisabled: true,
  },
  {
    title: "Netball",
    isDisabled: false,
  },
  {
    title: "Running",
    isDisabled: false,
  },
  {
    title: "Cycling",
    isDisabled: false,
  },
  {
    title: "Photography",
    isDisabled: false,
  },
  {
    title: "Gaming",
    isDisabled: false,
  },
  {
    title: "Sound systems",
    isDisabled: true,
  },
  {
    title: "Beer brewing",
    isDisabled: true,
  },
  {
    title: "Stenciling",
    isDisabled: true,
  },
];
