/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex
        justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        Sou um desenvolvedor habilidoso, atualmente cursando engenharia da
        computação, e estou desenvolvendo várias habilidades no campo da
        programação. Tenho uma prática significativa em Python, JavaScript,
        HTML, CSS e TypeScript, e também utilizo Node.js e React em meus
        projetos. Além disso, estou sempre explorando diversas tecnologias para
        aprimorar meus conhecimentos.<br></br>Tenho facilidade em lidar com interações e
        explicações, o que me permite comunicar de forma clara e eficiente com
        colegas de equipe e clientes. Adoro compartilhar conhecimento e aprender
        com os outros, pois acredito que o crescimento profissional acontece por
        meio da troca de experiências. <br></br>Gosto de trabalhar em conjunto com outras
        pessoas, trocando conhecimentos e experiências para evoluir tanto
        individualmente quanto em equipe. Sou apaixonado por aprender coisas
        novas e sempre busco inovar em minhas soluções. Vamos colaborar e juntos
        dar vida às suas ideias, criando soluções eficientes, escaláveis e
        amigáveis ao usuário para resolver problemas do mundo real!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
