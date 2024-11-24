import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src={`${process.env.PUBLIC_URL}/man-svgrepo-com.svg`}
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hi! I'm Viona, a passionate self-taught UI/UX designer with a
              background in the Food and Beverage (F&B) industry. Transitioning
              into design was driven by my love for creating meaningful,
              user-friendly experiences.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Although I don't hold a formal degree, my hands-on experience as a
              freelance designer speaks volumes. I've worked on diverse
              projects, designing websites and mobile applications using Figma.
              My approach focuses on blending creativity and functionality to
              solve real-world problems while ensuring visually appealing
              designs.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My journey from F&B to UI/UX design has equipped me with a strong
              understanding of user behavior, teamwork, and adaptability. I'm
              constantly learning and staying updated with the latest trends to
              craft impactful designs that users love.
              <div className="tagline2">
                Let’s create something amazing together!
              </div>
              {/* <div className="tagline2">
                I have become confident using the following technologies:
              </div> */}
            </ScrollAnimation>

            {/* <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg
                      src={`${process.env.PUBLIC_URL}/${stack.img}`}
                      alt={stack.name}
                    />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies> */}
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
