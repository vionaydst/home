import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={["Hi, I'm Viona.", () => setShowSubtitle(true)]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    "A UI/UX Designer.",
                    1000,
                    "A self-taught creative.",
                    1000,
                    "A Figma enthusiast.",
                    1000,
                    "Someone who loves making ideas come alive.",
                    1000,
                    "A problem solver.",
                    1000,
                    "An F&B survivor turned designer.",
                    1000,
                    "A... coffee addict?",
                    1000,
                    "Ok, let’s be real...",
                    1000,
                    "Ok, let’s be real... I also snack a lot when I design.",
                    1000,
                    "But hey, my designs are worth it!",
                    1000,
                    "You should scroll down to see my work.",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Seriously, my designs are super cool, go check them out!",
                    1000,
                    "Still here?",
                    1000,
                    "Ok, you're persistent. I like that.",
                    1000,
                    "Let’s create something awesome together!",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src={`${process.env.PUBLIC_URL}/man-svgrepo-com.svg`}
                alt="man-svgrepo"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img
                  src={`${process.env.PUBLIC_URL}/scroll-down.svg`}
                  alt="scroll-down"
                />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>
  );
}

export default Hero;
