import middlewareLogo from "../../components/Experience/image.mwnz";

const middleware = [
  {
    title: "Middleware NZ",
    website: "https://www.middleware.co.nz/",
    startDate: new Date("2019-03-01"),
    endDate: new Date("2022-02-01"),
    isDisabled: false,
    link: `See here for my key achievements with Middleware NZ.`,
    linkHref: "#project-oba",
    briefOriginal: [
      `
      I worked with Middleware NZ as a Senior Developer. My focus shifted more towards API 
      and microservice development aiming to broaden my technical experience.

      Numerous projects gave me practice across a variety of teams, technology and process. 
      I adapted to each challenge and achieved positive outcomes for internal and external clients.
      `,
      `
      A core part of my time at Middleware NZ was focused delivering a product, 
      the Open Banking Accelerator, which continues to be successfully implemented within 
      multiple New Zealand banking clients. This product helps bank implement APIs and Security Profiles aligned
      with the New Zealand Open Banking specification.
      `,
    ],
    brief: [
      `
      
      As a Senior Developer at Middleware NZ, I transitioned my focus towards API and microservice development to diversify my technical expertise. Working on multiple projects across different teams, technologies, and processes, I adeptly tackled each challenge, delivering positive outcomes for both internal and external clients.
      
      `,
      `

      While at Middleware NZ, a primary focus of my role involved spearheading the delivery of the Open Banking Accelerator. This product has been effectively integrated across several New Zealand banking clients, streamlining the implementation of APIs and Security Profiles in alignment with the New Zealand Open Banking specification.

      `,
    ],
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
];

export default middleware;
