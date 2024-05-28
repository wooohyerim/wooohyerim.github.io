import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Developer",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    emoji: "🙇🏻‍♀️",
    description: (
      <>
        <h4 style={{ textAlign: "center" }}>프론트엔드 개발자</h4>{" "}
      </>
    ),
  },
  {
    title: "Intro",
    emoji: "🌱",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            학습한 내용과 과정을 기록하는 공간입니다 👀
          </p>
          {/* <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            프로젝트, 스터디를 회고합니다!
          </p> */}
        </div>
      </>
    ),
  },
  {
    title: "Skill",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    emoji: "⚒️",
    description: (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
        <code>HTML/CSS</code>&nbsp;<code>Javascript</code>&nbsp;
        <code>React</code>&nbsp;
        <code>Next.js</code>&nbsp;<code>Sass</code>&nbsp;
        <code>Tailwindcss</code>&nbsp;
        <code>styled-components</code>&nbsp;<code>zustand</code>&nbsp;
        <code>recoil</code>&nbsp;
        <code>Git/Github</code>&nbsp;
        <code>Slack</code>&nbsp;
        <code>Notion</code>&nbsp;
      </div>
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
      <div className="padding-horiz--md">
        <div className="text--center">
          <Heading as="h2">{title}</Heading>
        </div>
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
