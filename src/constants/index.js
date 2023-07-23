import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ironman,
  pokedex,
  python,
  pyhtoncrt,
  dioangularcrt,
  jscrt,
  pentestcrt,
  responsivecrt,
  webscrappingcrt,
  pentest,
  angular
} from "../assets";

export const navLinks = [
  {
    id: "Sobre",
    title: "Sobre",
  },
  {
    id: "Contato",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name:"python",
    icon: python,
  }
  
];

const experiences = [
  {
    title: "Programação em Python do básico ao avançado",
    company_name: "Geek University",
    icon: python,
    iconBg: "#383E56",
    date: "",
    points: [
    ],
    img: pyhtoncrt
  },
  {
    title: "Python Web Scraping",
    company_name: "Udemy",
    icon: python,
    iconBg: "#383E56",
    date: "",
    points: [
    ],
    img: webscrappingcrt
  },
  {
    title: "Fundamentos de Ethical Hacking",
    company_name: "Udemy",
    icon: pentest,
    iconBg: "#383E56",
    date: "",
    points: [
    ],
    img: pentestcrt
  },
  {
    title: "Potência Tech Angular Developer",
    company_name: "DIO",
    icon: angular,
    iconBg: "#383E56",
    date: "",
    points: [
    ],
    img: dioangularcrt
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    company_name: "Free Code Camp",
    icon: javascript,
    iconBg: "#383E56",
    date: "",
    points: [
    ],
    img: jscrt
  },
  {
    title: "Responsive Web Design",
    company_name: "Free Code Camp",
    icon: css,
    iconBg: "#383E56",
    date: "",
    points: [
    ],
    img: responsivecrt
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Landing Page",
    description:
      "Neste projeto, desenvolvi uma Landing Page.Utilizei HTML e CSS puro para criar um design atraente e moderno, que se adapta perfeitamente a diferentes dispositivos, proporcionando uma experiência consistente e envolvente em desktops, tablets e smartphones.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: ironman,
    source_code_link: "https://github.com/Roniclay/Landing-Page",
  },
  {
    name: "Pokedex",
    description:
      "Neste projeto, desenvolvi um aplicativo de visualização de dados de Pokémons que utiliza uma API de terceiros para obter informações detalhadas sobre essas adoráveis criaturas. O objetivo principal foi criar uma interface interativa e amigável que permitisse aos usuários explorarem e conhecerem melhor os Pokémons de forma divertida e informativa.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: pokedex,
    source_code_link: "https://github.com/Roniclay/Pokedex",
  },
];

export { services, technologies, experiences, testimonials, projects };