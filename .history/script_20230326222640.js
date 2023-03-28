var sideBarOpen = false;
var sideBar = document.getElementById("sideBar");

function openSideBar() {
    if (!sideBarOpen) {
        sideBar.classList.add("sideBar-respo");
        sideBarOpen = true;
    }
}