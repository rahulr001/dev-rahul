import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../Assets";
import { projects } from "../Constants";
import { SectionWraper } from "../Utils";
import {
  desc,
  subTitleChild,
  subTitleFadeIn,
  titleChild,
  titleFadeIn,
} from "../Utils/Motion";
// import Fade from "react-reveal";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div>
      <Tilt
        scale={1.1}
        tiltEnable={false}
        glareEnable={true}
        glareBorderRadius={"14px"}
        glarePosition={"all"}
        glareMaxOpacity={0.2}
        className="bg-tertiary p-5  rounded-2xl sm:w-[360px] w-full h-[31rem] flex flex-col justify-around"
        style={{ border: "#4dba87 2px solid" }}
      >
        <div className="relative w-full h-[150px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-40 object-cover rounded-2xl"
            style={{ border: "2px solid", color: "#4dba8780" }}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const subText = ["<", "M", "y", " ", "w", "o", "r", "k", " ", "/", ">"];
  const title = ["P", "r", "o", "j", "e", "c", "t", "s", "."];
  return (
    <>
      <motion.div
        variants={subTitleFadeIn}
        initial="hidden"
        whileInView="visible"
        className="flex"
      >
        {subText.map((name, index) => (
          <motion.span
            key={index}
            variants={subTitleChild}
            className="  sm:text-[18px] text-[14px] secondary-color font uppercase  "
          >
            {name === " " ? "\u00A0" : name}
          </motion.span>
        ))}
      </motion.div>
      <motion.h2
        variants={titleFadeIn}
        initial="hidden"
        whileInView="visible"
        className={`${styles.sectionHeadText} `}
      >
        {title.map((name, index) => (
          <motion.span key={index} variants={titleChild}>
            {name === " " ? "\u00A0" : name}
          </motion.span>
        ))}
      </motion.h2>

      <motion.div
        variants={desc}
        initial="hidden"
        whileInView="visible"
        className="w-full flex"
      >
        <p className="mt-3 text-justify secondary-color font text-[17px] max-w-1xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </motion.div>
      <div className="mt-20 flex justify-center flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWraper(Works, "projects");
