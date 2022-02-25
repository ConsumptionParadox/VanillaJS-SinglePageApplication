//client side (front end) entry point (where we will make a client side router)


import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";



const navigateTo = url => {
    history.pushState(null, null, url);
    router();                               
}


//asynchronous because we will be loading our views within here
const router = async () => {
    const routes = [
    { path: "/404", view: () => console.log("Viewing 404")},
    { path: "/", view: Dashboard},
    { path: "/posts", view: Posts},
    { path: "/settings", view: Settings},
    ];
    
    
    //Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    //grab our match
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    //404 no match available
    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    
    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    console.log(location.pathname);
};

//making sure router is rerun upon using history arrows
window.addEventListener("popstate", router)


//connecting router to important events
document.addEventListener("DOMContentLoaded", () =>{
    
    //delegated event listener
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();            //prevents default navigation
            console.log("Navigating to link friend");
            navigateTo(e.target.href);
        }
    });
    router();
});