import Login from './views/Login.js';
import Signup from  './views/Signup.js';
import Todolist from './views/Todolist.js';
import AddToDo from './views/AddToDo.js';
import {tasker} from './tasker.js';

// var tasker = require('./tasker.js');

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {path: "/", view: Login},
        {path: "/signup", view: Signup},
        {path: "/todos", view: Todolist},
        {path: "/todos/add", view: AddToDo},  
    ];

    //Verificare path-uri 
    
    const potentialMatches = routes.map(route => {
            return {
                route: route,
                isMatch: location.pathname === route.path
            };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match){ 
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    // console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }

        // router();
       
        $('#addTodo').on('click', function(e){
            e.preventDefault();
            console.log('works');

            tasker.selectElements();
            tasker.buildTask();
        
        })
       
    })
  
  
});

