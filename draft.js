import React from "react";
import { render } from "react-dom";
import { Graph } from "react-d3-graph";
import dataGames from "./data";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const AAA = "AAA",
  BBB = "BBB",
  CCC = "CCC",
  DDD = "DDD",
  EEE = "EEE",
  FFF = "FFF",
  GGG = "GGG",
  KKK = "KKK";

const jsonData = dataGames;

const parsedNodes = [
  { id: "AAA1", label: "AAA", x: 1, y: 1 },
  { id: "BBB1", label: "BBB", x: 2, y: 1 },
  { id: "EEE1", label: "EEE", x: 3, y: 1 },
  { id: "GGG1", label: "GGG", x: 4, y: 1 },

  { id: "BBB2", label: "BBB", x: 1, y: 2 },
  { id: "EEE2", label: "EEE", x: 2, y: 2 }
];

const parsedLinks = [
  { source: "AAA1", label: "BBB1" },
  { source: "EEE1", label: "GGG1" },

  { source: "BBB2", label: "EEE2" }
];

const nodeParser = jsonData => {
  const result = [];
  let y = 0;
  let padding = 0;
  jsonData.map((stage, stageIndex) => {
    let x = padding;
    y += 50;
    stage.map((game, gameIndex) => {
      x += 50;
      result.push({
        id: `${game.source}${stageIndex}`,
        label: game.source,
        x: x,
        y: y
      });

      result.push({
        id: `${game.target}${stageIndex}`,
        label: game.target,
        x: x + 50,
        y: y
      });

      if (game.group === "final") {
        result.push({
          id: `${game.winner}${stageIndex + 1}`,
          label: game.winner,
          x: x + 30,
          y: y + 50
        });
      }

      x += 50;
      padding += 25;
    });
  });

  return result;
};

console.log(nodeParser(jsonData));

const linkParser = jsonData => {
  const result = [];

  const resultPlays = jsonData.map((stage, stageIndex) => {
    return stage.map((game, gameIndex) => {
      // result.push({
      //   source: `${game.source}${stageIndex}`,
      //   target: `${game.target}${stageIndex}`
      // });

      result.push({
        source: `${game.source}${stageIndex}`,
        target: `${game.winner}${stageIndex + 1}`
      });

      result.push({
        source: `${game.target}${stageIndex}`,
        target: `${game.winner}${stageIndex + 1}`
      });

      return {
        source: `${game.source}${stageIndex}`,
        target: `${game.target}${stageIndex}`
      };
    });
  });

  return result;
};

console.log(linkParser(jsonData));

const data = {
  nodes: nodeParser(jsonData),
  links: linkParser(jsonData)
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  nodeHighlightBehavior: true,
  staticGraph: true,
  node: {
    color: "lightgreen",
    size: 120,
    highlightStrokeColor: "blue",
    labelProperty: "label"
  },
  link: {
    highlightColor: "lightblue"
  }
};

const App = () => (
  <div style={styles}>
    <Graph
      id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
      data={data}
      config={myConfig}
    />
  </div>
);

render(<App />, document.getElementById("root"));
