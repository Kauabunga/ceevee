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
    brief: [
      `
      
      As a Senior Developer at Middleware NZ, I transitioned my focus towards API and microservice development to
      diversify my technical expertise. Working on multiple projects across different teams, technologies, and processes, 
      I adeptly tackled each challenge, delivering positive outcomes for both internal and external clients.
      
      `,
      `

      While at Middleware NZ, a significant focus of my role involved spearheading the delivery of the Open Banking Accelerator. 
      This product has been effectively integrated across several New Zealand banking clients, streamlining the implementation 
      of APIs and Security Profiles in alignment with the New Zealand Open Banking specification.

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
