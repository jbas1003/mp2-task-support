import { serverRoutes } from "./constants";

export const signIn = (username, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "username": username,
            "password": password
        });
    
        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw
        };
        return fetch(serverRoutes.logInUser, requestOptions)
    }

// START: Add to Table Users
export const addUser = (fname, lname, mname, email, uname, pword) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "firstName": fname,
        "lastName": lname,
        "middleName": mname,
        "email": email,
        "userName": uname,
        "passWord": pword
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.addUser, requestOptions)
}

// END: Add to Table Users

// START: tblusers Query All

export const getUsers = (callback) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(serverRoutes.showUsers, requestOptions)
        .then(async (result)=>{
            var newResult = await result.json()
            callback(newResult)
        })
}

export const updateUser = (userId, fname, lname, mname, email, uname, pword) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "userId": userId,
        "firstName": fname,
        "lastName": lname,
        "middleName": mname,
        "email": email,
        "userName": uname,
        "passWord": pword
    }, {
        where: {
            userId: userId
        }
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
    };
    
    return fetch(serverRoutes.updateUser, requestOptions)
}

export const deleteUser = (userId) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "userId": userId
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
    };
    
    return fetch(serverRoutes.deleteUser, requestOptions)
}


// END: tblusers Query All

// START: tblTasks Query All

export const AddTask = (taskName, taskDesc, requestor, workNumber, mobile, email) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "taskName": taskName,
        "taskDescription": taskDesc,
        "requestor": requestor,
        "workNumber": workNumber,
        "mobile": mobile,
        "email": email
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.addTask, requestOptions)
}

export const getTasks = (callback) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(serverRoutes.showTasks, requestOptions)
        .then(async (result)=>{
            var newResult = await result.json()
            callback(newResult)
        })
}

// START: tblTasks Query All