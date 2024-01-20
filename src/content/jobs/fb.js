import fbLogo from "../../components/Experience/image.fb";

const fb = [
  {
    title: "Forsyth Barr",
    website: "https://www.forsythbarr.co.nz/",
    startDate: new Date("2022-12-01"),
    endDate: new Date("2024-03-03"),
    isDisabled: false,
    link: `See here for some of the work I've done with Forsyth Barr.`,
    linkHref: "#Products-and-Products",
    brief: `
      
      I transitioned into Trove's parent company Forsyth Barr as a Senior Platform Engineer, 
      joining a team focused on developing a new platform product.

      This product would accelerate the development of new FinTech products by supporting
      several sets of APIs commonly appearing in the industry.

      I took on several responsibilities in the team including design and implementation of
      several components including Identity and Access, SDK, Event framework, and API Gateway.
      `,
    svg: {
      src: fbLogo,
      height: "33px",
      width: "243px",
      style: {
        float: "right",
        height: "33px",
        width: "243px",
        padding: 4,
        backgroundColor: "#212529",
      },
    },
  },
];

export default fb;
