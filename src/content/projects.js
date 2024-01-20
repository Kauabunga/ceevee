export const projects = [
  {
    id: "platform",
    title: "Platform",
    client: "Forsyth Barr",
    isDisabled: false,
    brief: `
  
          TODO: Platform Summary
  
          `,
    bullets: [
      "Designed Security.",
      "Integration and Performance testing.",
      "AWS tech - cdk, cloudformation, lambda, apigateway, sqs, ses, eventbridge, dynamodb",
      "...",
    ],
  },
  {
    id: "tempo",
    title: "Tempo",
    client: "Trove",
    isDisabled: false,
    brief: `
  
          TODO: Tempo Summary
  
          `,
    bullets: [
      "Python.",
      "Integration and Performance testing.",
      "Built Web version of native app.",
      "...",
    ],
  },
  {
    id: "oba",
    title: "Open Banking Accelerator Product",
    client: "Glueware",
    isDisabled: false,
    brief: `
  
          The Open Banking Accelerator provides a standards conformant set of APIs banks can publish.
  
          With a small internal team, we created the product building on previous years experience within the Open Banking domain.
  
          My role included delegating design, implementation and testing tasks along with reviewing and supporting other work in the team. 
  
          `,
    // ////////
    // Extra //
    // ////////
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
    id: "covid",
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
    id: "cdr",
    title: "ForgeRock CDR Accelerator",
    client: "ForgeRock",
    isDisabled: true,
    brief: `
    
    
        `,
    bullets: [],
  },
  {
    id: "3ds",
    title: "Visa 3DS Integration",
    client: "Kiwibank",
    isDisabled: true,
    brief: `
    
    
        `,
    bullets: [],
  },
  {
    id: "fhir",
    title: "FHIR Integration",
    client: "Ryman Healthcare",
    isDisabled: true,
    brief: `
    
    
        `,
    bullets: [],
  },
  {
    id: "pnz",
    title: "Open Banking Sandbox Product",
    client: "Payments New Zealand",
    isDisabled: true,
    brief: `
    
    
        `,
    bullets: [],
  },

  {
    id: "properly",
    title: "Properly",
    client: "Properly",
    isDisabled: true,
    brief: `
    
    
        `,
    bullets: [],
  },
  {
    id: "bnz",
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
    id: "eab",
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
    id: "westpac",
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
    id: "sky",
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
    id: "airnz",
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
      "Polished the app correcting several rendering bottlenecks, resulting in a smooth hybrid solution.",
      "Worked with the UX and Design team to best fit solutions with the technology stack.",
      "Extended the apps feature list and matching test coverage.",
      "Provided solutions to bugs found within open source libraries",
    ],
  },
  {
    id: "airnz-name-game",
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
