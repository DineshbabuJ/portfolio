import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "MERN Stack Job Portal",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "Node Js",
        },
        {
          techname: "Expres Js",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Next Js",
        },
      ],
    },

    {
      name: "MERN Stack Event Management Portal",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "Django",
        },
        {
          techname: "Expres Js",
        },
        {
          techname: "Vue Js",
        },
        {
          techname: "Nuxt Js",
        },
      ],
    },

    {
      name: "MERN Stack Social Media",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "Node JS",
        },
        {
          techname: "Expres Js",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "Nuxt Js",
        },
      ],
    },
    {
      name: "MERN Stack Video Streaming",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "Node JS",
        },
        {
          techname: "Expres Js",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "Angular Js",
        },
      ],
    },
    {
      name: "MERN Stack Online Learning Platform",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "Node JS",
        },
        {
          techname: "Expres Js",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "Angular Js",
        },
      ],
    },

    {
      name: "MERN Stack E-commerc",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      projectlink: "https://react-company-profile.netlify.app/",
      techused: [
        {
          techname: "Node JS",
        },
        {
          techname: "Expres Js",
        },
        {
          techname: "Material UI",
        },
        {
          techname: "Redux",
        },

        {
          techname: "React Js",
        },
      ],
    },
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>

            <ProjectList  {...item} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
