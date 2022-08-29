import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Frontend",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Toda la documentación necesaria para entender el funcionamiento del
        frontend
      </>
    ),
  },
  {
    title: "Arquitectura",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>Entender toda la arquitectura del proyecto, deploys y status</>
    ),
  },
  {
    title: "Backend",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Decisiones de diseño, patrones y estructuras del backend</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row"></div>
      </div>
    </section>
  );
}
