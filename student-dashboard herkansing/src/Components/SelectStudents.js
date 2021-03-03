import React from "react";
import { Link } from "react-router-dom";

function SelectStudents(props) {
  
  const selectStudent = [{name: "Average ratings"}];

  const students = props.students.map(student => {
    return {name: student};
  });

  const dropdownList = selectStudent.concat(students);
    
  return (
    <div className="select-student">
      {dropdownList.map(item => {
        if (item.name === "Average ratings") {
          return <Link to="/" onClick={e => props.handleStudentChange(item.name)}>{item.name}</Link> 
        } else {
          return <Link to={`/${item.name}`} onClick={e => props.handleStudentChange(item.name)}>{item.name}</Link> 
        }
      })
      }
    </div>  
  )
};

export default SelectStudents


