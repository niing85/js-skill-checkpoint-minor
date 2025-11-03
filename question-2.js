// Question #2: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

function userData(){
    return fetch("https://jsonplaceholder.typicode.com/users")
}

function handleRespons (response){
    return response.json()
}

function error(err){
    return console.log(err);
};

function displayData(data){
    let newUsers = data.map(user => user.name)
    console.log(newUsers)
    return newUsers
}

function longNames(data){
    let longName = data.filter(name =>name.length>17);
    console.log(longName);
    return 
}
userData().then(handleRespons).then(displayData)
userData().then(handleRespons).then(displayData).then(longNames).catch(error)