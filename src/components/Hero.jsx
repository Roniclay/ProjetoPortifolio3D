import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-[700px] mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Oi, Eu sou <span className="text-[#915eff]">Roni</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Bem-vindo ao meu portifolio! <br className="sm:block hidden" />
            conheça um pouco sobre meus desenvolvimentos e habilidades.
          </p>{" "}
          <br />
          <div className='inline-block'>
            <a
              href="https://www.linkedin.com/in/roniclay-rodrigues-240a9621a/"
              target="_blank"
              rel="noopner noreferrer"
            >
              <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></img>
            </a>

            <br></br>

            <a
              href="https://github.com/Roniclay"
              target="_blank"
              rel="noopner noreferrer"
            >
              <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
