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
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Isru Bandara</strong> a passionate Mobile developer with experience. 
            I specialize in creating cross-platform mobile apps, blending functionality with aesthetic appeal. 
            Proficient in Mobile development and Web Development. Let's collaborate and bring your app ideas to life! 📱✨
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
           
Certainly! Here are the two paragraphs condensed further:

In my professional journey, I have developed mobile applications using Flutter and React Native, focusing on state management and user interface design. I have managed backend services with Node.js, Express.js, and Spring Boot, and worked with databases like MySQL, Firebase, and MongoDB. 
I effectively used Git and GitHub for version control and collaborated on group projects, contributing to both front-end and back-end development within agile processes.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            I successfully built three mobile apps: a Personal Expense Tracker App, a To-Do List App, and a Recipe App, and contributed to the Smart Governing Portal. Additionally, I developed the RecyclingApp and a MoviesTicketBooking website using Flutter and Firebase,
            and an e-commerce app, BuyShoes, with React Native, MySQL, and Spring Boot. I consistently met project deadlines and received positive feedback for my problem-solving skills, thriving in dynamic environments and continuously embracing new challenges in software development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
