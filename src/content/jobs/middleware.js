import middlewareLogo from "../../components/Experience/image.mwnz";

export default [
  {
    title: "Middleware NZ",
    website: "https://www.middleware.co.nz/",
    date: "Mar 2019 - Feb 2022 ( 2 years 11 months )",
    startDate: new Date("2019-03-01"),
    endDate: new Date("2022-02-01"),
    isDisabled: false,
    brief: `
      
      I worked at Middleware NZ as a Senior Developer. My focus shifted more towards API and microservice development aiming to broaden my technical experience.

      Many projects gave me practice across a variety of teams, technology and process. 
      I was able to adapt to each unique challenge and achieve positive outcomes for internal and external clients.

      A good part of my time at Middleware NZ was focused delivering an internal product, 
      the Open Banking Accelerator and Engagement Platform, which was successfully implemented within multiple banking clients.
  
      `,
    link: `See the Projects section for some of the work I've done with Middleware NZ.`,
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
];
