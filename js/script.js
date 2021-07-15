// calling the function in window.onload to make sure the HTML is loaded
// date to the footer using JS
const toggleButton = document.getElementsByClassName('toggle-button')[0];

const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
 
    navbarLinks.classList.toggle('active');
    

})

window.onload = function () {
    //gets the year and put it in a variable
    let currentYear = new Date().getFullYear();

    //get the element we want to add by id
    let d = document.getElementById("currentYear");

    //convert the variable into a node
    let e = document.createTextNode(currentYear);
    
    //add the node to the empty span tag
    d.appendChild(e);

};

// $ means whenPageLoads: it executes when the page loads
$(function() {

    // $(".toggle-button").click(function() {
    //     $(".navbar-links").slideToggle(300);
    // });

    $(".btn").click(function() {
        $(".submenu").slideToggle(500);
    });
});
