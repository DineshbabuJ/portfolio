import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";



import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const data = [
    {
      name: "Oxford University",
      degree: "M.sc in Software Engineering",
      year: "2020-2022",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      name: "MIT University",
      degree: "B.sc in Software Engineering",
      year: "2016-2020",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      name: "Cambridge College",
      degree: "College Graduation",
      year: "2014-2016",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
      name: "Queen school",
      degree: "School Graduation",
      year: "2007-2013",
      des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
  ];


  const colors = [
    "#001CCE",
    "#4B088A",
    "#FE2EF7",
    "#FF1042",
  ];

  return (
    <div className="container education-section" id="education">

      <div className="section-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>


      <div className="timeline-section">

        <VerticalTimeline lineColor="#FF1042">

          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.name}
              </h3>
              <h5 className="vertical-timeline-element-subtitle" style={{color:"yellow"}}>
                {item.degree}
              </h5>


              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>


    </div>
  );
};

export default Education;
