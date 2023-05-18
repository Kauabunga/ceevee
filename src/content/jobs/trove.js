import troveLogo from "../../components/Experience/image.trove";

export default [
  {
    title: "Trove",
    website: "https://www.linkedin.com/company/trove-nz",
    date: "Feb 2022 - Feb 2022 ( 2 years 11 months )",
    startDate: new Date("2022-02-01"),
    endDate: new Date("2022-12-01"),
    isDisabled: false,
    brief: `
      
      I worked at Trove as a Senior Financial Engineer, developing API services to support a product.

      Development was serverless using AWS.
  
      `,
    svg: {
      src: troveLogo,
      height: "132px",
      width: "135px",

      style: {
        width: 52,
        float: "right",
        padding: 4,
      },
    },
  },
];
