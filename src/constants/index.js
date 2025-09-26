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
} from "../assets";

import minhaj from "../assets/company/Minhaj model.jpg";
import read from "../assets/company/Read.png";
import must from "../assets/company/must.png";

import cybersecurity from "../assets/tech/cyber security.png";
import wifi_security from "../assets/tech/Wifi security.png";
import ethical_hacking from "../assets/tech/ethical hacking.png";
import wordpress from "../assets/tech/wordpress.png";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "education",
        title: "Education",
    },
    {
        id: "certifications",
        title: "Certifications",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Full Stack Developer",
        icon: backend,
    },
    {
        title: "Penetration Tester",
        icon: creator,
    },
    {
        title: "UI/UX Designer",
        icon: mobile,
    },
];

const technologies = [{
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const education = [{
        title: "Matriculation",
        company_name: "Minhaj Model High School (MMHS) Liaqatabad, Bhimber",
        icon: minhaj,
        iconBg: "#383E56",
        date: "2020-2022",
        points: [
            "Grade: A+",
        ],
    },
    {
        title: "FSc (Pre Engineering)",
        company_name: "Read Foundation College, Bhimber AJK",
        icon: read,
        iconBg: "#E6DEDD",
        date: "2022-2024",
        points: [
            "Grade: A",
        ],
    },
    {
        title: "Graduation (BS Software Engineering)",
        company_name: "Mirpur University of Science and Technology (MUST), Mirpur AJK",
        icon: must,
        iconBg: "#383E56",
        date: "2024-2028",
        points: [
            "CGPA: 3.3/4.0",
        ],
    },
];

const certifications = [{
        title: "WiFi Security",
        company_name: "Punjab Skill Development Initiative",
        icon: wifi_security,
        iconBg: "#E6DEDD",
        date: "2025",
        link: "/certificate/download (1).png",
        points: [
            "Completed course on WiFi Security fundamentals and best practices.",
        ],
    },
    {
        title: "WordPress Web Development",
        company_name: "Punjab Skill Development Initiative",
        icon: wordpress,
        iconBg: "#383E56",
        date: "2025",
        link: "/certificate/wordpress.jpg",
        points: [
            "Learned WordPress development, theme customization, and plugin integration.",
        ],
    },
    {
        title: "Professional Freelancing",
        company_name: "Professional Freelancing Training Program (PFTFP)",
        icon: cybersecurity,
        iconBg: "#E6DEDD",
        date: "2024",
        link: "/certificate/B19004414-Cybersecurity Course_page-0001.jpg",
        points: [
            "Completed 3-month online course on Professional Freelancing skills and knowledge required for freelancing.",
        ],
    },
    {
        title: "Ethical Hacking",
        company_name: "Professional Freelancing Training Program (PFTFP)",
        icon: ethical_hacking,
        iconBg: "#383E56",
        date: "2025",
        link: "/certificate/B22006717-Certified Ethical Hacking Course_page-0001.jpg",
        points: [
            "Completed 3-month online course on Ethical Hacking skills and knowledge required for cybersecurity freelancing.",
        ],
    },
];

const testimonials = [];

const projects = [{
        name: "Car Rent",
        description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [{
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, education, certifications, testimonials, projects };