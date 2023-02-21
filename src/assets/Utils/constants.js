export const myApiURL = 'https://upset-mite-skirt.cyclic.app';

export const serverRoutes = {
    // START: USER ROUTES'
    logInUser: myApiURL + '/login',
    addUser: myApiURL + '/addUser',
    showUsers: myApiURL + '/showUsers',
    updateUser: myApiURL + '/updateUser',
    deleteUser: myApiURL + '/deleteUser',
    // END: USER ROUTES

    // START: LISTS ROUTES

    showList: myApiURL + '/showList',

    // END: LIST ROUTES

    // START: TASKS ROUTES

    addTask: myApiURL + '/addTasks',
    showTasks: myApiURL + '/showTasks',
    deleteTask: myApiURL + '/deleteTask'
    // END: TASKS ROUTES
}