import stay22Logo from "../../components/Experience/image.stay22";

const stay22 = [
  {
    title: "Stay22",
    website: "https://www.stay22.com/",
    startDate: new Date("2024-10-01"),
    endDate: null,
    isDisabled: false,
    // link: `See here for my key achievements with Forsyth Barr.`,
    // linkHref: "#project-platform",
    brief: `
    
      At Stay22, I led the rollout of a new design system and front-end architecture supporting 2,000+ daily users. 
      
      I introduced test automation and AI tooling that boosted delivery speed, code quality, and team productivity. 
      
      My responsibilities include mentoring junior developers, building internal tools, and setting technical direction through documentation and presentations.

    `,
    svg: {
      src: stay22Logo,
      height: "33px",
      width: "243px",
      style: {
        float: "right",
        height: "33px",
        width: "243px",
        padding: 4,
        backgroundColor: "#fff",
      },
    },
  },
];

export default stay22;
