const readJSON = () => {
    fetch('/studentdata.json').then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log("Error!");
    })
};

export default readJSON
