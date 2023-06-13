// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";
import content from "../../../content/index/about.json";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="hello!! 👋"
          subTitle="With a diverse skill set that includes UX design, UI design, full stack development."
        />
        <section className={about.content}>
          <div className={about.image}>
            {/* <img src="/img/family-photo.jpg" alt="Ayush_Photo" /> */}
            <Image src="/img/family-photo.jpg" width={800} height={1200} />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title={content.block1.title}
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "user"]}
              copy={content.block1.description}
            />
            <BadgesBlock
              title={content.block2.title}
              containerClass={about.container}
              list={methods}
              fullContainer="fullContainer"
              block="methods"
              icon="fingerprint"
              copy={content.block2.description}
              //invertedColor="invertedColor"
              headerIcon={`${about.icon}`}
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "planet-moon", name: "UI/UX", type: "fad" },
  { key: "window", name: "Web Development", type: "fad" },
  { key: "hexagon-vertical-nft-slanted", name: "Blockchain", type: "far" },
  { key: "wand-sparkles", name: "Automation", type: "fad" },
  { key: "robot", name: "Robotics", type: "fad" },
  { key: "qrcode", name: "Embedded System", type: "fad" },
];
