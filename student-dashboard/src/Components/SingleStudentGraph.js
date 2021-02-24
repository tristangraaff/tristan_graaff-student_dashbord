import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";
import wincTheme from "./VictoryThemeMaterial"

function SingleStudentGraph (props) {

    let tValues = [];
    for (let i = 1; i <= props.avgPerAssignment.length; i++) {
        tValues.push(i);
    };

    return (
        <div>
          <VictoryChart domainPadding={20}
                        zoomDomain={{x: [0, 3], y: [0, 20]}}
                        theme={wincTheme}
          >
              <VictoryGroup offset={3}>
                  <VictoryBar
                    data={props.avgPerAssignment}
                    x="assignment"
                    y="difficultyRating"            
                  />
                  <VictoryBar
                    data={props.avgPerAssignment}
                    x="assignment"
                    y="funRating"
                  />
              </VictoryGroup>
              <VictoryAxis
              tickValues={tValues}
              tickFormat={props.avgPerAssignment.map(item => item.assignment)}
              style={{ tickLabels: { angle: 60 } }}
              />
              <VictoryAxis dependentAxis/>
          </VictoryChart>
        </div>
    )
};

export default SingleStudentGraph