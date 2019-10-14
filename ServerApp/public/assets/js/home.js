const navDashboard = {
    button: "nav-dashboard",
    view: "view-dashboard"};
const navInbox = {
    button: "nav-inbox",
    view: "view-inbox"};
const navClass = {
    button: "nav-class",
    view: "view-class"};
const navDiscussion = {
    button: "nav-discussion",
    view: "view-discussion"};
const navSchedule = {
    button: "nav-schedule",
    view: "view-schedule"};

const allNav = [navDashboard,navInbox,navClass,navDiscussion,navSchedule];

let current;

function disableTheRest(item){
    let buttonList = document.getElementById(item.button).classList;
    let viewList = document.getElementById(item.view).classList;
    console.log(viewList);
    if(item.button==current){
        buttonList.add("disabled")
        viewList.remove("invisible");
        }
    else {
        buttonList.remove("disabled")
        viewList.add("invisible")
    };


}

function goToNavigation(navigation) {
    current = navigation;
    allNav.forEach(disableTheRest);
}


