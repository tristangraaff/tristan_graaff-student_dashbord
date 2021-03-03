import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";
import wincTheme from "./VictoryThemeMaterial"

function Graph (props) {

  let tValues = [...props.toBeShownInChart];

  const funComponent = 
    <VictoryBar 
      data={props.toBeShownInChart}
      x="assignment"
      y="funRating"            
    />;

  const difficultyComponent = 
    <VictoryBar data={props.toBeShownInChart}
      x="assignment"
      y="difficultyRating"            
    />;

  const bothComponents = [difficultyComponent, funComponent]                            

  return (
    <div className="chart">
      <VictoryChart 
        domainPadding={20}
        zoomDomain={{x: [0, 3], y: [0, 20]}}
        theme={wincTheme}
      >
        <VictoryGroup offset={3}>
          {props.filterGraph.both ? bothComponents : null}
          {props.filterGraph.onlyFun ? funComponent : null}
          {props.filterGraph.onlyDifficulty ? difficultyComponent : null}           
        </VictoryGroup>
        <VictoryAxis
          tickValues={tValues}
          tickFormat={props.toBeShownInChart.map(item => item.assignment)}
          style={{ tickLabels: { angle: 60 } }}
        />
        <VictoryAxis dependentAxis/>
      </VictoryChart>
    </div>
  )
};

export default Graph

