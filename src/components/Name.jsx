import { motion } from "framer-motion";
import {styles} from '../styles'
import {textVariant} from "../utils/motion"
import { SectionWrapper } from '../hoc';

const Name = () => {
  return (
    <>
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Minha jornada até aqui</p>
        <h2 className={styles.sectionHeadText}>Certificados</h2>
      </motion.div>
    </div>
    </>
  )

}

export default SectionWrapper(Name, "")