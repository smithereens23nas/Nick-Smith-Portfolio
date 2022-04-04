import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { SiBulma } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

export default [
  {
    id: 1,
    image: "https://i.imgur.com/GH82T97.jpeg",
    title: "Wayfarer",
    description: "A travel blog to post your favorite hotspots and memories.",
    github: "https://github.com/smithereens23nas/wayfarer",
    demo: "https://smithereens23nas.github.io/wayfarer/",
    icon: <SiPython />,
    icon1: <SiPostgresql />,
    icon2: <DiDjango />,
    icon3: <SiBulma />,
    icon4: <SiCss3 />,
  },
  {
    id: 2,
    image: "https://i.imgur.com/3XXhlKo.jpeg",
    title: "Pokemon Game",
    description: "A basic version of the classic Pokemon game. Gotta Catch em' all.",
    github: "https://github.com/smithereens23nas/Pokemon",
    demo: "https://smithereens23nas.github.io/Pokemon/",
    icon: <SiJavascript />,
    icon1: <SiHtml5 />,
    icon2: <SiJquery />,
    icon3: <SiCss3 />,
  },
  {
    id: 3,
    image: "https://i.imgur.com/h9IoBwK.jpg",
    title: "Closed Ocean",
    description: "Inspired by OpenSea NFT website. A marketplace for NFT's.",
    github: "https://github.com/smithereens23nas/closedOcean",
    demo: "https://closed-ocean.herokuapp.com/home",
    icon: <SiMongodb />,
    icon1: <SiExpress />,
    icon2: <SiNodedotjs />,
    icon3: <SiCss3 />,
    icon4: <SiBulma />,
  },

  {
    id: 4,
    image: "https://i.imgur.com/E7pQfrG.jpg",
    title: "Zauben - Dashboard",
    description:
      "A Performance dashboard for the Chicago based living wall company, Zauben.",
    github: "https://github.com/smithereens23nas/Zauben-Dashboard-FrontEnd",
    demo: "https://zauben.netlify.app/performance",
    icon: <SiReact />,
    icon1: <SiPostgresql />,
    icon2: <SiSequelize />,
    icon3: <SiNodedotjs />,
    icon4: <SiCss3 />,
    icon5: <SiExpress />,
  },
];
