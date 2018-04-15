import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Graph } from "react-d3-graph";
import jsonData from "Data/graph-data.json";

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingLeft: '240px',
    paddingTop: '55px',
    minWidth: 0,
  }
});

const nodeParser = jsonData => {
  const result = [];
  let y = 0;
  let padding = 150;
  jsonData.map((stage, stageIndex) => {
    let x = padding;
    y += 100;
    stage.map((game, gameIndex) => {
      x += 50;
      result.push({
        id: `${game.source}${stageIndex}`,
        label: game.source,
        svg: 'http://simpleicon.com/wp-content/uploads/football.svg',
        x: x,
        y: y
      });

      result.push({
        id: `${game.target}${stageIndex}`,
        label: game.target,
        svg: 'http://simpleicon.com/wp-content/uploads/football.svg',
        x: x + 50,
        y: y
      });

      if (game.group === "final") {
        result.push({
          id: `${game.winner}${stageIndex + 1}`,
          label: game.winner,
          svg: 'http://simpleicon.com/wp-content/uploads/football.svg',
          x: x + 30,
          y: y + 100
        });
      }

      x += 50;
      padding += 25;
    });
  });

  return result;
};

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

const data = {
  nodes: nodeParser(jsonData),
  links: linkParser(jsonData)
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  nodeHighlightBehavior: true,
  staticGraph: true,
  width: '100%',
  height: "100vh",
  maxZoom: 3,
  minZoom: 1,
  node: {
    color: "lightgreen",
    size: 200,
    highlightStrokeColor: "blue",
    labelProperty: "label"
  },
  link: {
    highlightColor: "lightblue"
  }
};

@withStyles(styles)
class GraphPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <Graph
          opacity={1}
          id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
          data={data}
          config={myConfig}
        />
      </div>
    )
  }
};

export default GraphPage;

