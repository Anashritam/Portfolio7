import {
    FaJava, FaJs, FaHtml5, FaReact, FaNodeJs, FaBootstrap, FaDocker, FaCss3Alt
}
    from 'react-icons/fa';

import {
    SiThymeleaf, SiSpringboot, SiMysql, SiMongodb,
    SiPostgresql, SiHeroku, SiNetlify
    , SiRailway, SiKubernetes, SiDjango, SiTensorflow,SiKeras, SiPytorch, SiScikitlearn
} from "react-icons/si";

import { GiArtificialIntelligence } from "react-icons/gi";  // AI-related icon
import { MdOutlineDataExploration } from "react-icons/md"; 
// import { DiScrum } from "react-icons/di";

const SkillsData = [
    {
        id: 8,
        skillName: 'Artificial Intelligence & Machine Learning',
        listTechnologies: [
            { name: 'Machine Learning', icon: <GiArtificialIntelligence /> },
            { name: 'Deep Learning', icon: <GiArtificialIntelligence /> },  // Example icon for TensorFlow
            { name: 'NLP', icon: <GiArtificialIntelligence /> },
            { name: 'Computer Vision', icon: <GiArtificialIntelligence /> },  // Placeholder icon for CV
            { name: 'Geospatial Analysis', icon: <MdOutlineDataExploration /> },
            { name: 'TensorFlow', icon: <SiTensorflow /> },
            { name: 'Keras', icon: <SiKeras /> },
            { name: 'PyTorch', icon: <SiPytorch /> },
            { name: 'Scikit-Learn', icon: <SiScikitlearn /> },
        ],
    },
    {
        id: 1,
        skillName: 'Fundamentals',
        listTechnologies: [
            { name: 'Java', icon: <FaJava /> },
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'HTML', icon: <FaHtml5 /> },
            { name: 'CSS', icon: <FaCss3Alt /> },
        ],
    },
    {
        id: 2,
        skillName: 'Frontend',
        listTechnologies: [
            { name: 'React.js', icon: <FaReact /> },
            { name: 'Thymeleaf', icon: <SiThymeleaf /> },
        ],
    },
    {
        id: 3,
        skillName: 'Backend',
        listTechnologies: [
            { name: 'Spring Boot', icon: <SiSpringboot /> },
            { name: 'Django', icon: <SiDjango /> },
        ],
    },
    {
        id: 4,
        skillName: 'Databases',
        listTechnologies: [
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
        ],
    },
    // {
    //     id: 5,
    //     skillName: 'Testing',
    //     listTechnologies: [
    //         { name: 'JUnit', icon: <SiJunit5 /> },
    //         { name: 'Postman', icon: <SiPostman /> },
    //         { name: 'Swagger', icon: <SiSwagger /> },
    //     ],
    // },
    {
        id: 6,
        skillName: 'Deployment',
        listTechnologies: [
            { name: 'Heroku', icon: <SiHeroku /> },
            { name: 'Netlify', icon: <SiNetlify /> },
            { name: 'Railway', icon: <SiRailway /> },
        ],
    },
    {
        id: 7,
        skillName: 'DevOps',
        listTechnologies: [
            { name: 'Docker', icon: <FaDocker /> },
            { name: 'Kubernetes', icon: <SiKubernetes /> }
        ],
    },

];

export default SkillsData;
