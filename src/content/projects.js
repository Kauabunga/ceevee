export const projects = [
  {
    id: "platform",
    title: "Platform",
    client: "Forsyth Barr",
    isDisabled: false,
    briefOriginal: `

          Forsyth Barr is a New Zealand leading investment firm who is also dedicated
          to investing in its own technology capability.

          Using the experience gained during the development of Tempo, the team implemented a platform product going
          live with its first integration within 8 months.

          My role involved design, direction, implementation focused on the delivery of The Platform with the majority
          of my time done working in a separate timezone between Canada and New Zealand.

          `,
    brief: `

    Forsyth Barr is a leading investment firm in New Zealand and committed to advancing its technology capabilities.
    
    I applied my experience from developing Tempo to contribute to the implementation of a new platform product. Within just 8 months, our team successfully launched the platform, marking its first integration. My role primarily involved design, direction, and implementation of the platform, with a significant portion of my time dedicated to remote collaboration across time zones between Canada and New Zealand.
    `,
    bullets: [
      "Lead the delivery of JavaScript and Python SDKs.",
      "Moved rapidly from conception to first integration.",
      "Collaborated in The Platforms Security, API and Eventing architectures.",
      "Rooted myself in AWS thinking and its ecosystem.",
      "Provided feedback on product direction and scope.",
    ],
  },
  {
    id: "tempo",
    title: "Tempo",
    client: "Trove",
    isDisabled: false,
    briefOriginal: `
  
          Tempo is New Zealand's first guided retail investment app. A detached subsidiary of Forsyth Barr aimed to delivery
          this product to open a new set of customers and cement their technology capacity.

          This product successfully went to market and is now serving New Zealand.

          My role was flexible and included implementation design, mentoring, on call support and generally filling needs of the team and product.
  
          `,
    brief: `
    Tempo, New Zealand's pioneering guided retail investment app, emerged with the aim of expanding the customer base and fortifying the technological capabilities of its parent company, Forsyth Barr.
    
    Successfully launched to market, Tempo now serves customers across New Zealand. 
    
    In this role, my responsibilities were diverse and adaptable, encompassing implementation design, mentoring, providing on-call support, and addressing various needs of the team and product.
    `,
    bullets: [
      "Rapidly up-skilled in Python and AWS development.",
      "Assisted with hiring phases of new recruits.",
      "Championed a performance testing suite steering the direction of several optimizations.",
      "Delivered the foundation of a Web version of the native apps.",
      "Mentored junior and intermediate team members.",
    ],
  },
  {
    id: "oba",
    title: "Open Banking Accelerator Product",
    client: "Glueware (MWNZ)",
    isDisabled: false,
    briefOriginal: `
  
          The Open Banking Accelerator provides a standards conformant set of APIs banks can publish.
  
          With a small internal team, we created the product building on previous years experience within the Open Banking domain.
  
          My role included owning and delegating design, implementation and testing tasks along with reviewing and supporting other work in the team. 
  
          `,

    brief: `
    
    The Open Banking Accelerator offers a standardized set of APIs that banks can leverage to make conformance simpler.
    
    Developed by a compact internal team, the product builds upon years of prior experience within the Open Banking domain. 
    
    In my role, I took ownership of design, implementation, and testing tasks, as well as delegated responsibilities within the team. 
    
    Additionally, I provided reviews and support for other team members' work.
    `,
    // ////////
    // Extra //
    // ////////
    // The second piece of the product enables a sandbox environment that still adheres to the standards but completely isolates the data a third party interacts with.
    // The last piece of the product presents a conformance test suite that verifies that an API implementation is conforming to the Open Banking standards with or without OBA.
    bullets: [
      "Owned technical leadership of microservice development and testing.",
      "Succeeded to prove value through delivery into multiple banks.",
      "Promoted strong testing culture throughout team.",
      "Applied feedback from customers to improve experience and quality of the product.",
      "Worked closely with Product Owners to ensure team tasks and focus was aligned.",
      "Designed scalable and modular application using cloud and microservice patterns.",
    ],
  },
  {
    id: "covid",
    title: "NZ COVID Pass Integration",
    client: "MoH (MWNZ)",
    isDisabled: false,
    briefOriginal: `
          
          This project was part of the Ministries COVID response to bring a verifiable COVID pass to people living or visiting New Zealand.
          
          Challenges included ensuring forecasted demand was handled and ensuring the APIs were appropriately secured given their sensitive nature.
  
          My role involved helping support more junior members of the team and aligning the work of the team with the delivery. 
    
        `,
    brief: `
    
    As part of the Ministry's COVID response, this project aimed to provide a verifiable COVID pass to residents and visitors in New Zealand. 
    
    Challenges included managing forecasted demand and ensuring the security of sensitive APIs. 
    
    In my role, I supported junior team members and ensured alignment of our work with project delivery objectives.
    
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
    client: "ForgeRock (MWNZ)",
    isDisabled: true,
    brief: `
    
    
        `,
    bullets: [],
  },
  {
    id: "3ds",
    title: "Visa 3DS Integration",
    client: "Kiwibank (MWNZ)",
    isDisabled: true,
    brief: `
    
        Integration with Visa with strict security and performance constraints.
    
        `,
    bullets: [
      "Integration with Visa with strict security and performance constraints",
    ],
  },
  {
    id: "fhir",
    title: "FHIR Integration",
    client: "Ryman Healthcare (MWNZ)",
    isDisabled: true,
    brief: `
    
    
        `,
    bullets: [],
  },
  {
    id: "pnz",
    title: "Open Banking Sandbox Product",
    client: "Payments New Zealand (MWNZ)",
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
    client: "BNZ (Solnet)",
    isDisabled: false,
    briefOriginal: `
    
          I joined a product team at BNZ to help transform their Lending and Onboarding systems, aiming to improve the experience
          for customers and bank users. This transformation was supported by a new way of delivery, promoting more modular systems
          design and implementation with supporting platforms and dev-ops processes.
    
          I shared the lead for the Front-end implementation of two major applications and a component library.
    
        `,

    brief: `
    
    I joined BNZ's product team to contribute to the transformation of their Lending and Onboarding systems, 
    with the goal of enhancing the experience for both customers and bank users. 
    
    his transformation embraced a new delivery approach, emphasizing modular system design and implementation, 
    supported by platform development and DevOps processes. 
    
    Within the team, I co-led the Front-end implementation of two significant applications and a component library.
    
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
    client: "Ministry of Business and Innovation and Employment (Solnet)",
    isDisabled: false,
    briefOriginal: `
    
          EAB is an application for small to medium businesses to create new Employment agreements while learning
          about employment law with easy-to-digest content.
            
          EAB exceeded its objectives and was built, tested, and delivered in three months.
    
        `,
    brief: `
        
        EAB is an application designed for small to medium businesses to generate new Employment Agreements 
        while providing educational content on employment law in an easily understandable format. 
        
        EAB successfully surpassed its objectives and was developed, tested, 
        and deployed within a three-month time frame.

        `,
    bullets: [
      "Practiced BDD and TDD creating a suite of feature-complete integration and unit tests.",
      "Created a reusable forms solution, reused for a second MBIE Policy Builder app.",
      "Promoted a full stack JavaScript solution supported by docker.",
      "Implemented Node.js micro service handling 10x expected load.",
      "Implemented a pipeline that performed automated testing and releases.",
    ],
  },
  {
    id: "westpac",
    title: "Online Banking",
    client: "Westpac (Solnet)",
    isDisabled: false,
    briefOriginal: `
    
          I was part of a Westpac team with a goal to improve their online banking experience.
    
          I supported the developers of the project, mediating communications between development teams.
          I improved automation in local, development, and test environments helping developers become more autonomous.
    
          After two months my role extended to a technical lead of a team of five, responsible for feature development in the middleware.
    
        `,
    brief: `
        
        I was a member of a Westpac team dedicated to enhancing their online banking experience. 
        
        Initially, I supported project developers by facilitating communication between development teams 
        and enhancing automation in local, development, and test environments, fostering developer autonomy. 
        
        After two months, I transitioned into a technical leadership role, 
        overseeing a team of five and spearheading feature development within the middleware.
        
        `,
    bullets: [
      "Trusted as the custodian of environments relied on by a team of 60+.",
      "Lead and mentor of a team of five.",
      "Proposed and owned developer tooling and experience improvements.",
      "Implemented a JavaScript framework that supported other teams.",
      "Took ownership for the security features of the client.",
      // "Created and implemented a UX review noting usability and performance improvements for the application.",
    ],
  },
  {
    id: "sky",
    title: "NEON",
    client: "Sky TV (Solnet)",
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
    client: "Air New Zealand (Solnet)",
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
      "Worked effectively with other JavaScript, UX and UI developers in parallel streams.",
    ],
  },
];
