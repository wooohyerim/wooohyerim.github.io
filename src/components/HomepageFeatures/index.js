import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Frontend",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        <h4>프론트엔드 개발자 우혜림입니다!</h4>{" "}
      </>
    ),
  },
  {
    title: "Communication",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <ul style={{ display: "flex" }}>
          <li style={{ fontSize: "14px" }}>
            PM, 디자이너, 백엔드개발자와{" "}
            <span style={{ fontWeight: "bold" }}>소통</span>하며 협업
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Skills",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        <code>HTML/CSS</code>&nbsp;<code>Javascript</code>&nbsp;
        <code>React</code>&nbsp;
        <code>Next.js</code>&nbsp;<code>Sass</code>&nbsp;
        <code>Tailwindcss</code>&nbsp;
        <code>styled-components</code>&nbsp;<code>zustand</code>&nbsp;
        <code>recoil</code>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
