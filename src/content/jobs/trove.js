import troveLogo from "../../components/Experience/image.trove";

const trove = [
  {
    title: "Trove",
    website: "https://www.linkedin.com/company/trove-nz",
    startDate: new Date("2022-02-01"),
    endDate: new Date("2022-12-01"),
    isDisabled: false,
    link: `See here for some of the work I've done with Trove.`,
    linkHref: "#Products-and-Products",
    brief: [
      `
      
      I worked with Trove as a Senior Financial Engineer. At Trove I helped develop
      API services and tooling to support Tempo, a FinTech product launched in New Zealand.

      Development was centered around a serverless design using AWS services. 

      `,
    ],
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

export default trove;
