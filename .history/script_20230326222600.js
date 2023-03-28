var sideBarOpen = false;
var sideBar = document.getElementById("sideBar");

function openSideBar() {
    if (!sideBarOpen) {
        sideBar.style.width = "250px";
        sideBarOpen = true;
    }
}