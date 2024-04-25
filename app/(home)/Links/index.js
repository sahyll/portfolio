

import { SiPython, SiNodedotjs ,SiPostgresql ,SiMongodb , SiJavascript, SiBootstrap,SiCss3 , SiGithub, SiLinkedin, SiInstagram, SiReact, SiNextdotjs, SiTailwindcss, SiHtml5} from "react-icons/si";


const socials = [
  {
    link:"https://www.linkedin.com/in/mohdasahil",
    label:"linkedin",
    icon:SiLinkedin
  },
  {
    link:"https://github.com/sahyll",
    label:"github",
    icon: SiGithub
  },
  {
    link:"https://www.linkedin.com/in/mohdasahil",
    label:"instagram",
    icon: SiInstagram
  }

]

const skills = [
  {
    text:"React",
    Icon: SiReact,
  },
  {
    text:"NextJS",
    Icon: SiNextdotjs ,
  },
  {
    text:"TailwindCSS",
    Icon: SiTailwindcss ,
  },
  {
    text:"HTML",
    Icon: SiHtml5 ,
  },
  {
    text:"CSS",
    Icon: SiCss3 ,
  },
  {
    text:"Bootstrap",
    Icon: SiBootstrap ,
  },
  {
    text:"JavaScript",
    Icon: SiJavascript ,
  },
  {
    text:"MongoDB",
    Icon: SiMongodb  ,
  },
  {
    text:"PostgreSQL",
    Icon: SiPostgresql ,
  },
  {
    text:"GitHub",
    Icon: SiGithub ,
  },
  {
    text:"NodeJS",
    Icon:  SiNodedotjs,
  },
  {
    text:"Python",
    Icon: SiPython ,
  },
];

const projects =[
  {
      title: "CRUD Application (Promptopia)",
      tech:[SiReact, SiTailwindcss, SiNextdotjs, SiMongodb],
      Link: "https://prompt-sahylll.vercel.app/",
      cover: "/projectimg/prompt1.png",
      background: "#dc2626",
      textcolor: "#000000"
  },
  {
    title:"E-Commerce Website (Nike Clone)",
    tech: [SiReact, SiTailwindcss, SiJavascript],
    Link: "https://github.com/sahyll/e-commerce_nike_css",
    cover:"/projectimg/nike1.png",
    background:"#1d4ed8",
    textcolor: "#000000"
  },
  {
    title:"Responsive Weather Application",
    tech: [SiReact, SiTailwindcss,SiJavascript, SiNodedotjs  ],
    Link: "https://github.com/sahyll/weather_with_forecast",
    cover:"/projectimg/weather1.png",
    background:"#6d28d9",
    textcolor: "#000000"
  },
  {
    title:"Notes Application",
    tech: [SiReact,SiJavascript, SiCss3, SiHtml5 ],
    Link: "https://github.com/sahyll",
    cover:"/projectimg/todo1.png",
    background:"#be185d",
    textcolor: "#000000"
  }
  ,
  {
    title:"Emojipedia",
    tech: [SiJavascript, SiCss3, SiHtml5],
    Link: "https://github.com/sahyll",
    cover:"/projectimg/emoji1.png",
    background:"#ea580c",
    textcolor: "#000000"
  }
]


export {socials, skills, projects};
