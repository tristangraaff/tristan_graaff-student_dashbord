import React from "react";

function SelectStudents(props) {

    const selectStudent = [{name: "Average ratings"}];
    const students = props.students.map(student => {
        return {name: student};
    });
    const dropdownList = selectStudent.concat(students);
    console.log(dropdownList);
    
    return (
     <div className="select-student">
        <form>
            <label>
                Select student:
            </label>
            <select onChange={e => props.handleStudentChange(e.target.value)}>
                {dropdownList.map(student => <option name={student.name}>{student.name}</option> )}
            </select>
        </form>
     </div>  
    )
};

export default SelectStudents

