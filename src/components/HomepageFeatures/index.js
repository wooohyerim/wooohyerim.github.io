import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Developer",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    emoji: "💻",
    description: (
      <>
        <h4>프론트엔드 개발자</h4>{" "}
      </>
    ),
  },
  {
    title: "Intro",
    emoji: "👩🏻‍💻",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ fontSize: "14px" }}>
            어제보다 오늘, 혼자보다 함께 성장하는 것을 좋아하는 프론트엔드
            개발자 우혜림 입니다!
          </p>
          <p style={{ fontSize: "14px" }}>
            스타트업 근무로 기획자, 디자이너, 백엔드 개발자와 협업하며
            커뮤니케이션 경험을 쌓았습니다.
          </p>
          <p style={{ fontSize: "14px" }}>
            사용자에게 편의성을 제공하는 개발자가 되는 것을 목표로 하고
            있습니다.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "Skill",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    emoji: "💻",
    description: (
      <>
        <code>HTML/CSS</code>&nbsp;<code>Javascript</code>&nbsp;
        <code>React</code>&nbsp;
        <code>Next.js</code>&nbsp;<code>Sass</code>&nbsp;
        <code>Tailwindcss</code>&nbsp;
        <code>styled-components</code>&nbsp;<code>zustand</code>&nbsp;
        <code>recoil</code>&nbsp;
        <code>Git/Github</code>&nbsp;
        <code>Slack</code>&nbsp;
        <code>Notion</code>&nbsp;
      </>
    ),
  },
];

function Feature({ Svg, title, description, emoji }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <h1>{emoji}</h1>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p> {description}</p>
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
