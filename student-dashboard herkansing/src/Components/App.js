import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Graph from "./Graph";
import SelectStudents from "./SelectStudents";
import FilterGraph from "./FilterGraph";
import { Evelyn, Aranka, Floris, Hector, Martina, Maurits, Rahima, Sandra, Wietske, Storm } from "./Students"

import studentData from "../studentdata.json";
import students from "../students.png";




const renamedStudentData = studentData.map(ass => {
  return {
    name: ass["Wie ben je?"],
    assignment: ass["Welke opdracht of welk project lever je nu in?"],
    funRating: ass["Hoe leuk vond je deze opdracht?"],
    difficultyRating: ass["Hoe moeilijk vond je deze opdracht?"]
  };
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allData: renamedStudentData,
      toBeShownInChart: [],
      studentsReady: false,
      currentStudent: "",
      filterGraph: {
        onlyFun: false,
        onlyDifficulty: false,
        both: true
      }
    };
  };

  componentDidMount(){
    this.addAvgRatingsToState();
    const students = this.getUniqueStudents();
    this.setState({
      students: students,
      studentsReady: true
    });
    console.log(this.state.allData);
  };

  getUniqueAssignments = () => {
    const allDataCopy = [...this.state.allData];
    let assignments = allDataCopy.map(item => {
      return item.assignment
    });
    const uniqueSet = new Set(assignments);
    const uniqueAssignments = [...uniqueSet];
    const uniqueAssignmentsObj = uniqueAssignments.map(item => {
      return {assignment: item};
    });
    return uniqueAssignmentsObj;
  };
  
  getUniqueStudents = () => {
    const allDataCopy = [...this.state.allData];
    const students = allDataCopy.map(item => {
      return item.name
    });
    const uniqueSet = new Set(students);
    const uniqueStudentArr = [...uniqueSet];
    return uniqueStudentArr;
  };
  
  addAvgRatingsToState = () => {
    const allDataCopy = [...this.state.allData];
    let assignments = this.getUniqueAssignments();
    assignments.forEach(item => {
      item["funRating"] = 0;
      item["difficultyRating"] = 0;
    });
    allDataCopy.forEach(item => {
      const correctItem = assignments.filter(obj => {
        return obj.assignment === item.assignment
      })
      assignments.forEach(obj => {
        if (obj.assignment === correctItem[0].assignment) {
          obj.funRating = obj.funRating + item.funRating;
          obj.difficultyRating = obj.difficultyRating + item.difficultyRating;
        }
      })
    });
    assignments.forEach(item => {
      const avgFunRating = item.funRating / this.getUniqueStudents().length;
      const avgDifficultyRating = item.difficultyRating / this.getUniqueStudents().length;
      item.funRating = avgFunRating;
      item.difficultyRating = avgDifficultyRating;
    });
    this.setState({toBeShownInChart: assignments}, () => console.log(this.state.toBeShownInChart))
  };

  handleStudentChange = (student) => {
    console.log(student);
    if (student === "Average ratings") {
      this.addAvgRatingsToState();
    } else {
      this.setState({currentStudent: student}, () => this.getDataPerStudent());
    }
  };

  getDataPerStudent = () => {
    console.log(this.state.allData)
    const allDataCopy = [...this.state.allData];
    const filteredData = allDataCopy.filter(obj => {
      return obj.name === this.state.currentStudent 
    });
    this.setState({toBeShownInChart: filteredData})
  };

  handleFilterButtonChange = (e) => {
    e.preventDefault();
    switch(e.target.value) {
      case "fun":
        this.setState({
          filterGraph: { 
            onlyFun: true,
            onlyDifficulty: false,
            both: false
          }
        });
        break;
      case "difficulty":
        this.setState({
          filterGraph: { 
            onlyFun: false,
            onlyDifficulty: true,
            both: false
          }
        });
        break;
      case "both":
        this.setState({
          filterGraph: { 
            onlyFun: false,
            onlyDifficulty: false,
            both: true
          }
        });
        break;
      default:
        console.log("Error");
    };
  };

  render() {
    return (
      <Router>
        <div>
          <div className="header">
            <h1 className="header-text">Student dashboard</h1>
            <img className="student-image" src={students} alt="Student logo"/>
          </div>
          <div className="menu-container">
            {this.state.studentsReady ? 
            <SelectStudents students={this.state.students} handleStudentChange={this.handleStudentChange}/> : 
            <h2>Student selection menu is loading is loading...</h2>
            }
            <FilterGraph handleFilterButtonChange={this.handleFilterButtonChange}/>
          </div>  
          <Switch>
            <Route exact path="/">
              <Graph toBeShownInChart={this.state.toBeShownInChart} filterGraph={this.state.filterGraph}/>
            </Route>
            <Route exact path="/Evelyn">
              <Evelyn 
                handleStudentChange={this.handleStudentChange}
                toBeShownInChart={this.state.toBeShownInChart}
                filterGraph={this.state.filterGraph}
              />
            </Route>
            <Route exact path="/Aranka">
              <Aranka 
                handleStudentChange={this.handleStudentChange}
                toBeShownInChart={this.state.toBeShownInChart}
                filterGraph={this.state.filterGraph}
              />
            </Route>
            <Route exact path="/Floris">
              <Floris 
                handleStudentChange={this.handleStudentChange}
                toBeShownInChart={this.state.toBeShownInChart}
                filterGraph={this.state.filterGraph}
              />
            </Route>
            <Route exact path="/Hector">
              <Hector 
                handleStudentChange={this.handleStudentChange}
                toBeShownInChart={this.state.toBeShownInChart}
                filterGraph={this.state.filterGraph}
              />
            </Route>
            <Route exact path="/Martina">
              <Martina 
                handleStudentChange={this.handleStudentChange}
                toBeShownInChart={this.state.toBeShownInChart}
                filterGraph={this.state.filterGraph}
              />
            </Route>
            <Route exact path="/Maurits">
              <Maurits 
                handleStudentChange={this.handleStudentChange}
                toBeShownInChart={this.state.toBeShownInChart}
                filterGraph={this.state.filterGraph}
              />
            </Route>
            <Route exact path="/Rahima">
              <Rahima 
                handleStudentChange={this.handleStudentChange}
                toBeShownInChart={this.state.toBeShownInChart}
                filterGraph={this.state.filterGraph}
              />
            </Route>
            <Route exact path="/Sandra">
              <Sandra 
                handleStudentChange={this.handleStudentChange}
                toBeShownInChart={this.state.toBeShownInChart}
                filterGraph={this.state.filterGraph}
              />
            </Route>
            <Route exact path="/Wietske">
              <Wietske 
                handleStudentChange={this.handleStudentChange}
                toBeShownInChart={this.state.toBeShownInChart}
                filterGraph={this.state.filterGraph}
              />
            </Route>
            <Route exact path="/Storm">
              <Storm 
                handleStudentChange={this.handleStudentChange}
                toBeShownInChart={this.state.toBeShownInChart}
                filterGraph={this.state.filterGraph}
              />
            </Route>
          </Switch>      
        </div>
      </Router>
    )
  };
};

export default App