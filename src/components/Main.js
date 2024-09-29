import { motion } from 'framer-motion';
import Pdf from '../assets/pdf/Curriculo.pdf';
import SvgDev from './SvgDev';
import Button from './Button';
import '../styles/main.css';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Main = () => {

    function openResume() {
        window.open(Pdf);
    }

    return (
        <div className="main-container">
            <motion.div className="bio-info-container"
                variants={containerVariants}
                initial="hidden"
                animate="visible" >
                <motion.span variants={childVariants} className="tagline">
                    🌟Welcome to my Portfolio
                </motion.span>

                <motion.h1 variants={childVariants}>
                    Hi! I'm <span className="name-title">Rishikesh</span> 👋🏼
                </motion.h1>

                <motion.h2 variants={childVariants}>
                    Coder|
                    Developer |
                    AI/ML Enthusiast
                </motion.h2>

                <motion.p variants={childVariants}>
                    I'm a inquisitive student, passionate about learning noval and innovative things. Currently, I am practicing Deep Learing and Data Sciences. Additionaly,I am working on some projects on React and Spring Boot.
                </motion.p>


                <motion.div
                    variants={childVariants}
                >
                    <Button
                        buttonName={"Resume"}
                        onClickFunction={openResume} />
                </motion.div>
            </motion.div>

            <div className="bio-svg-container">
                <SvgDev />
            </div>
        </div>
    );

};

export default Main;