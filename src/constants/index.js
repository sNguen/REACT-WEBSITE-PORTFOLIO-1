import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";



export const HERO_CONTENT = `I'm an enthusiastic full stack developer with a talent for building resilient and scalable web applications. Over the past year, I have refined my abilities in front-end technologies such as React and Next.js, alongside back-end tools like Node.js, MySQL, PostgreSQL, and MongoDB. My aim is to utilize my skills to develop inventive solutions that foster business expansion and provide outstanding user experiences.`;

export const ABOUT_TEXT = `I currently live in Pristina, Kosovo, but my nationality is Bulgarian. I have Bulgarian documents and the right to work in Europe. I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [

  {
    year: "2022 - 2023",
    role: "Full Stack Developer",
    company: "Brunata OOD Branch in Kosovo",
    description: `SCADA programming - As a team, we worked on the programming and implementation of SCADA (Supervisory Control and Data Acquisition) for District Heating Substations and the control room for Termokos. We had to start from scratch and ensure that the client received all their requirements. 
    
    SCADA connection - Connecting all necessary equipment to the SCADA system was a key task. The main purpose was to provide Termokos, as the employer, with an easier way to access, read, and adjust various parameters of their heating system, as specified in the contract.

    Technical assistance - We supported Termokos employees whenever they needed to retrieve or change data and were unsure how to proceed. We prepared documentation explaining how to use the SCADA system, which was provided to them. At the same time, we conducted training sessions for their team both at the SCADA office and on-site. During these sessions, we demonstrated how to connect equipment, read data, and modify any required parameters.
    
    Customer service - Initially, we provided a template to show how the system would look and how to use it. During the implementation phase, we kept the client informed about the progress and discussed any potential future changes they might need. In the end, we connected all the equipment to the SCADA system and provided the employer with all the necessary information and knowledge required to effectively use the SCADA system.`,
    technologies: ["HTML", "CSS", "javaScript", "mySQL", "VisualBasic"],
  },

];

export const PROJECTS = [
  {
    title: "E-Commerce Website Shopify",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "javaScript"],
  },
  {
    title: "SCADA",
    image: project2, 
    description:
      "Supervisory Control and Data Acquisition (SCADA) systems are used for controlling, monitoring, and analyzing industrial devices and processes. The system consists of both software and hardware components and enables remote and on-site gathering of data from the industrial equipment.",
    technologies: ["HTML", "CSS", "VisualBasic", "mySQL", "javaScript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Shaqir Igrishta, Kosovo, Prishtina 10 000",
  phoneNo: "+383 48 565 505 ",
  phoneNo1: "+359 887 596 033 ",
  email: "s.nguen1992@gmail.com",
};
