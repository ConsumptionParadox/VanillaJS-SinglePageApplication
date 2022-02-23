//client side (front end) entry point (where we will make a client side router)


//asynchronous because we will be loading our views within here
const router = async () => {
    const routes = [
    { path: "/", view: () => console.log("Viewing Dashboard")},
    { path: "/posts", view: () => console.log("Viewing Post")},
    { path: "/settings", view: () => console.log("Viewing Settings")},
    ];
    
    
    //Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    console.log(potentialMatches);
};


//We only defined the router above.
document.addEventListener("DOMContentLoaded", () =>{
    router();
});