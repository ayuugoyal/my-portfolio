// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle title="Experience" preTitle="Career" subTitle="-" />
        <section className={career.area}>
          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Full Stack Developer & UI/UX Designer</h3>
                  <h4>Software Development Cell, USS</h4>
                  <h4>Apr 2022 - Present · 1 yrs 2 mos</h4>
                  <h5>GGSIPU - East Campus</h5>
                </span>
                <p>
                  As the lead full stack developer I am responsible for all
                  software development, and QA. This is for the front end, APIs,
                  and the back end. Additionally I was tasked with identifying
                  and analyzing weak points in the workflows. Each project had
                  to be estimated and prioritized based on its workload and
                  immediate impact to efficiency.
                </p>
                <p>Skills that i learned there👇</p>
                <ul className={career.list}>
                  <li>
                    Full Stack Development
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Achieved 80%
                      Development growth
                    </span>
                  </li>
                  <li>
                    UI/UX Designer
                    <span className={career.subList}>
                      <span className={career.bullet}></span>Achieved 90%
                      Designing Skillset
                    </span>
                  </li>
                </ul>
                <Badges
                  list={fullStack}
                  block="stack"
                  fullContainer="fullContainer"
                />
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>
        </section>
      </Container>
    </Section>
  );
}

const fullStack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "github", name: "GitHub", type: "devicon" },
  { key: "photoshop", name: "Photoshop", type: "devicon" },
  { key: "illustrator", name: "Illustrator", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "mailbox", name: "Postman", type: "fas" },
  { key: "aftereffects", name: "After Effects", type: "devicon" },
  { key: "premierepro", name: "Premiere Pro", type: "devicon" },
];
