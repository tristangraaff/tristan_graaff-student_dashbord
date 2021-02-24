const addAssignments = () => {
    let assignments = props.data.map(item => {
        return {assignment: item.assignment}
    });
    console.log(assignments);
    const uniqueSet = new Set(assignments);
    const uniqueAssignments = [...uniqueSet];
    console.log(uniqueAssignments);
};

addAssignments()

// const addAssignments = () => {
//     let assignments = props.data.map(item => {
//         return item.assignment
//     });
//     console.log(assignments);
//     const uniqueSet = new Set(assignments);
//     const uniqueAssignments = [...uniqueSet];
//     console.log(uniqueAssignments);
//     const uniqueAssignmentsObj = uniqueAssignments.map(item => {
//         return {assignment: item};
//     })
//     console.log(uniqueAssignmentsObj)
// };

// addAssignments()