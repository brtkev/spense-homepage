const sideBar = document.querySelector(".topbar__responsive-sidebar-container");

const hamburgerButton = document.querySelector("#topbar__sidebar-button");

const closeSpaceSideBar =  document.querySelector(".topbar__closeSpace");

function displayResponsiveMenu(){
    sideBar.classList.toggle("active");
}

hamburgerButton.addEventListener( 'click', (ev) => {
    displayResponsiveMenu();
} );

closeSpaceSideBar.addEventListener( 'click', (ev) => {
    displayResponsiveMenu();

});
