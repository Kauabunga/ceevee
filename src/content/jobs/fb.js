import fbLogo from "../../components/Experience/image.fb";

const fb = [
  {
    title: "Forsyth Barr",
    website: "https://www.forsythbarr.co.nz/",
    startDate: new Date("2022-12-01"),
    endDate: new Date("2024-03-03"),
    isDisabled: false,
    link: `See here for my key achievements with Forsyth Barr.`,
    linkHref: "#project-platform",
    brief: `
    
      As a Senior Platform Engineer at Forsyth Barr, I played a key role in developing a new platform aimed at accelerating FinTech product development. 

      This platform eases the integration of commonly used industry services, enhancing efficiency and functionality. 
      
      My responsibilities included managing the design and implementation of critical components such as Identity and Access, SDKs, Event Framework, and API Gateway.
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
