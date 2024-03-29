export const projects = [
  {
    id: "platform",
    title: "Platform",
    client: "Forsyth Barr",
    isDisabled: false,
    brief: `

    Forsyth Barr is a leading investment firm in New Zealand and committed to advancing its technology capabilities.
    
    I applied my experience from developing Tempo to contribute to the implementation of a new platform product.
    
    Within 8 months, our team successfully launched the platform, marking its first integration. 
    
    My role primarily involved design, direction, and implementation of the platform, with a significant portion
    of my time dedicated to remote collaboration across time zones between Canada and New Zealand.
    `,
    bullets: [
      "Lead the delivery of JavaScript and Python SDKs.",
      "Moved rapidly from conception to first integration.",
      "Collaborated in The Platforms Security, API and eventing architectures.",
      "Rooted myself in AWS thinking and its ecosystem.",
      "Provided feedback on product direction and scope.",
    ],
  },
  {
    id: "tempo",
    title: "Tempo",
    client: "Trove",
    isDisabled: false,
    brief: `

    Tempo, New Zealand's pioneering guided retail investment app, emerged with the
    goal of expanding the customer base and fortifying the technological capabilities of its parent company, Forsyth Barr.
    
    Successfully launched to market, Tempo now serves customers across New Zealand. 
    
    In this role, my responsibilities were diverse and adaptable, encompassing 
    implementation design, mentoring, providing on-call support, and addressing various needs of the team and product.
    
    `,
    bullets: [
      "Rapidly up-skilled in Python and AWS development.",
      "Assisted with hiring phases of new recruits.",
      "Championed performance testing steering the direction of several optimizations.",
      "Delivered the foundation of a web version of the native apps.",
      "Mentored junior and intermediate team members.",
    ],
  },
  {
    id: "oba",
    title: "Open Banking Accelerator Product",
    client: "Glueware (MWNZ)",
    isDisabled: false,
    brief: `
    
    The Open Banking Accelerator offers a standardized set of APIs that banks can leverage to make conformance simpler.
    
    Developed by a compact internal team, the product builds upon years of prior experience within the open banking domain. 
    
    In my role, I took ownership of design, implementation, and testing tasks, while also delegating additional responsibilities within the team. 
    
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
      "Worked closely with product owners to ensure team tasks and focus was aligned.",
      "Designed scalable and modular application using cloud and microservice patterns.",
    ],
  },
  {
    id: "covid",
    title: "NZ COVID Pass Integration",
    client: "MoH (MWNZ)",
    isDisabled: false,
    brief: `
    
    As part of the ministry's COVID response, this project aimed to provide a verifiable COVID pass to residents and visitors in New Zealand. 
    
    Challenges included managing forecasted demand and ensuring the security of sensitive APIs. 
    
    In my role, I supported team members and ensured alignment of our work with project delivery objectives.
    
    `,
    bullets: [
      "Balanced quality of development under extreme time pressures.",
      "Enabled other team members through code reviews and pair programming.",
      "Communicated with ministry teams and other vendors to ensure alignment of delivery.",
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
    title: "WIP: Visa 3DS Integration",
    client: "Kiwibank (MWNZ)",
    isDisabled: true,
    brief: `

        Critical component of the banks payment system, used to verify payments challenged by visa. 

        Sensitive information
    
        Integration with Visa with strict security and performance constraints.

        Collaborate with multiple participants including Visa, KiwiBank and another consultancies.

        Tooling to improve testing and development experience avoiding certificate and PI issues.
    
        `,
    bullets: [
      "Integration with Visa with strict security and performance constraints.",
      "Trusted part of deployment to production.",
      "Contracted to Auckland to up skill others in the hosting system used by the bank.",
      "Quickly up-skilled in C# development.",
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
    title: "WIP: Properly",
    client: "Properly",
    isDisabled: true,
    brief: `

    Part of the team that helped achieve our Series-A funding.

    Unified a scattered set of front-end technologies into a composed, maintainable package.

    Rapid prototyping with product and ux designers delivering a rewrite of the application within a two week design sprint??

    Worked globally, directing members in New Zealand, India, and UK.

    Several performance improvements to the api layer.

        `,
    bullets: [
      "Unified front-end technologies into a manageable package.",
      "Enabled test team with tooling and frameworks.",
      "...",
      "...",
    ],
  },
  {
    id: "bnz",
    title: "Lending and Onboarding",
    client: "BNZ (Solnet)",
    isDisabled: false,
    brief: `
    
    I joined BNZ's product team to contribute to the transformation of their Lending and Onboarding systems, 
    with the goal of enhancing the experience for both customers and bank users. 
    
    This transformation embraced a new delivery approach, emphasizing modular system design and implementation, 
    supported by platform development and DevOps processes. 
    
    Within the team, I co-led the front-end implementation of two significant applications and a component library.
    
    `,
    bullets: [
      // "Lead app design and development seeing Angular 2 through its beta releases.",
      "Lead app design and development using a new front-end technology.",
      "Promoted and adapted a UI component library for multiple applications.",
      "Guided front-end developers through best practices, process and tooling.",
      "Guided UI Integration testers through best practices, process and tooling.",
    ],
  },
  {
    id: "eab",
    title: "Employment Agreement Builder (EAB)",
    client: "MBIE (Solnet)",
    isDisabled: false,
    brief: `
        
        EAB is an application designed for small to medium businesses to generate new employment agreements 
        while providing educational content on employment law in an easily understandable format. 
        
        EAB successfully surpassed its objectives and was developed, tested, 
        and deployed within a three-month time frame.

        `,
    bullets: [
      "Practiced BDD and TDD creating a suite of feature-complete integration and unit tests.",
      "Created a reusable forms solution, reused for a second MBIE policy builder app.",
      "Promoted a full-stack JavaScript solution supported by docker.",
      "Implemented NodeJS micro service handling 10x expected load.",
      "Implemented a pipeline that performed automated testing and releases.",
    ],
  },
  {
    id: "westpac",
    title: "Online Banking",
    client: "Westpac (Solnet)",
    isDisabled: false,
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
          implementing the front-end and API supporting other NEON product sitting on different platforms.
    
          My role was a front-end developer with close contact to the web API and UX layers.
    
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
      "Provided solutions to bugs found within open source libraries.",
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
