import theblackbeltsLogo from "../../components/Experience/image.theblackbelts";

const blackbelts = [
  {
    title: "The Black Belts",
    website: "https://www.theblackbelts.co.nz/",
    startDate: new Date("2024-03-03"),
    endDate: new Date("2024-09-30"),
    isDisabled: false,
    // link: `See here for my key achievements with Forsyth Barr.`,
    // linkHref: "#project-platform",
    brief: `
        
      At The Black Belts, I led API and microservice design that enabled customer adoption of new Open Banking standards. 
      
      I drove backend development for three of New Zealand's top five banks, supporting multi-million-dollar revenue streams and over one million users. 
      
      My responsibilities included mentoring through code reviews, sharing knowledge via presentations and documentation, contributing to Open Banking standards, and working directly with customers to design new features.

    `,
    svg: {
      src: theblackbeltsLogo,
      height: "70px",
      width: "303px",
      style: {
        float: "right",
        height: "35px",
        width: "150px",
        padding: 4,
        backgroundColor: "#fff",
      },
    },
  },
];

export default blackbelts;
