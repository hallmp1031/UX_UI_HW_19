 // .on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler

 const dropdownBtn = document.querySelectorAll(".dropdown-btn");
 const dropdown = document.querySelectorAll(".dropdown");
 const hamburgerBtn = document.getElementById("hamburger");
 const navMenu = document.querySelector(".menu");
 const links = document.querySelectorAll(".dropdown a");

 function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

function toggleHamburger() {
    navMenu.classList.toggle("show");
    hamburgerBtn.setAttribute(
        "aria-expanded",
        hamburgerBtn.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
}

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);
    console.log(dropdownElement);
  });
});

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
  });
});

// close dropdown menu when the dropdown links are clicked
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
  })
);

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});

// close dropdown when the escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdownMenu();
    setAriaExpandedFalse();
  }
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "container") {
    x.className += " responsive";
  } else {
    x.className = "container";
  }
}

// Close the dropdown menu if the user clicks outside of it


/*function myFunction() {
  document.getElementById("aboutMenu").classList.toggle("show");
}*/



/*$(".menuButton").on("click", function(){
  $(".menuButton").toggleClass("active");
  if ($(".menuButton").hasClass("active")) {
    $(".dropDown").css("height", "100vh");
    $("#aboutMenu").css("opacity","1");
    //$(".searchIcon").removeClass("fa-search").addClass("fa-times");
  }
  else {
    $(".menuButton").css('height', "0vh");
    $("#aboutMenu").css("opacity","0");
    //$(".searchIcon").removeClass("fa-times").addClass("fa-search");
  }
});

$(".toggle").click(function(){
  $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});*/


/*// Step 2: Change a color
$('#button2').on("click", function(){
  $('.cssChange').css("background-color","red");
});

// Step 3: Append content
$('#button3').on("click", function(){
  $('.appendMe').append("<div class='child'>I got appended! Nice!</div> ")
});

// Step 4: Animate a DIV
$("button").click( function(){
     $('.animate').animate( {left: '250px'}, 1000 );
});*/

