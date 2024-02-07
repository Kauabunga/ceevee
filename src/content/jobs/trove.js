import troveLogo from "../../components/Experience/image.trove";

const trove = [
  {
    title: "Trove",
    website: "https://www.linkedin.com/company/trove-nz",
    startDate: new Date("2022-02-01"),
    endDate: new Date("2022-12-01"),
    isDisabled: false,
    link: `See here for some of the work I've done with Trove.`,
    linkHref: "#project-trove",
    brief: [
      `
      
      I worked with Trove as a Senior Financial Engineer. At Trove I helped launch Tempo, a FinTech product in New Zealand, 
      by developing Financial Services and tooling to support the mobile product.

      The system centered around utilising AWS services, where I was able to quickly up skill in both Python and serverless development.
      
      `,
      `
      One of my early achievements at Trove included creating a performance testing suite that helped significantly improve confidence knowing the system was capable of handling loads well beyond launch expectations.
      This suite highlighted parts of the system that required attention which was able to feed into design and development 
      for teams to improvement their designs and processes.

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
