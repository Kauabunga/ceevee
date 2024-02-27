import troveLogo from "../../components/Experience/image.trove";

const trove = [
  {
    title: "Trove",
    website: "https://www.linkedin.com/company/trove-nz",
    startDate: new Date("2022-02-01"),
    endDate: new Date("2022-12-01"),
    isDisabled: false,
    link: `See here for my key achievements with Trove.`,
    linkHref: "#project-trove",
    brief: [
      `
      As a Senior Financial Engineer at Trove, I contributed to the launch of Tempo, a FinTech product, by developing Financial Services and supporting tools for the mobile app. Utilizing AWS services, I quickly gained proficiency in Python and serverless development.
      `,

      `
      One notable achievement was the creation of a performance testing suite, which significantly enhanced our confidence in the system's ability to handle loads well beyond launch expectations.

      This suite not only pinpointed areas for enhancement but also provided valuable insights that informed design decisions within and between teams.

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
