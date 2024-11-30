import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ProjectCard() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(ProjectList[0]);

  return (
    <>
      {ProjectList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img
                src={`${process.env.PUBLIC_URL}/projects/${list.id}/mockup.png`}
                alt={list.name}
              />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.github_url.length > 0 && (
                  <a
                    className="btn SecondaryBtn btn-shadow"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Figma
                  </a>
                )}
                {list.demo_url.length > 0 && (
                  <button
                    className="btn PrimaryBtn btn-shadow"
                    type="button"
                    onClick={() => {
                      setSelected(list);
                      setOpen(true);
                    }}
                  >
                    Demo ➜
                  </button>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={
          Array.from({ length: selected.images }).map((_, item) => {
            return {
              src: `${process.env.PUBLIC_URL}/projects/${selected.id}/${
                item + 1
              }.png`,
            };
          })

          //   [
          //   { src: "/renr-responsive.png" },
          // ]
        }
      />
    </>
  );
}

export default ProjectCard;
