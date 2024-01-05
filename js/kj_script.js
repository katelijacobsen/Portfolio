window.addEventListener("load", clickDescription);

let macbook = document.querySelector(".macbook");
let basicWeb = document.querySelector("#basic_web");
let webDescription = document.querySelector("#web_description");
let projectWeb = document.querySelector("#project");

let basicUiUx = document.querySelector("#basic_ui_ux");
let UiUxTitle = document.querySelector("basic_ux_h_customized_font");
let paperBG = document.querySelector("#paper_texture_container");
let croissant = document.querySelector("#croissant");
let uxDescription = document.querySelector("#ux_description");
let projectDocumentation = document.querySelector("#project_documentation");
let projectPrototype = document.querySelector("#project_prototype");
let projectUxWebsite = document.querySelector("#project_croissant_website");

let basicAnimation = document.querySelector("#basic_animation");
let star1 = document.querySelector("#star_1");
let star2 = document.querySelector("#star_2");
let ducky = document.querySelector("#ducky");
let animationDescription = document.querySelector("#animation_description");
let linkDuckyWeb = document.querySelector("#ducky_link");

let basicContent = document.querySelector("#basic_content");
let contentDescription = document.querySelector("#content_description");
let movieCamera = document.querySelector(".movie-camera");
let contentHTTP = document.querySelector("#content_anchor_container")

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

function clickDescription(){
    console.log("click");
    basicWeb.addEventListener("click", showDescriptionWeb);
    basicUiUx.addEventListener("click", showDescriptionUX);
    basicAnimation.addEventListener("click", showDescriptionAnimation);
    basicContent.addEventListener("click", showDescriptionContent);

}


function showDescriptionWeb(){
    webDescription.classList.remove("hide");
    macbook.classList.add("hide");
    basicWeb.classList.remove("basic_web_collapsed");
    basicWeb.classList.add("enlarge_web");
    projectWeb.classList.remove("hide");
    projectWeb.classList.add("show");


    hideDescriptionUX();
    hideDescriptionAnimation();
    hideDescriptionContent();

}

function showDescriptionUX(){
    uxDescription.classList.remove("hide");
    croissant.classList.add("hide");
    paperBG.classList.add("enlarge_paper_texture_container");
    basicUiUx.classList.remove("basic_ui_ux_collapsed");
    basicUiUx.classList.add("enlarge_basic_ui_ux");
    projectDocumentation.classList.remove("hide");
    projectDocumentation.classList.add("show");
    projectPrototype.classList.remove("hide");
    projectPrototype.classList.add("show");
    projectUxWebsite.classList.remove("hide");
    projectUxWebsite.classList.add("show");

    hideDescriptionWeb();
    hideDescriptionAnimation();
    hideDescriptionContent();

    
}
function showDescriptionAnimation(){
    basicAnimation.classList.remove("basic_animation_collapsed");
    basicAnimation.classList.add("enlarge_basic_animation");
    animationDescription.classList.remove("hide");
    star1.classList.remove("show");
    star1.classList.add("hide");
    star2.classList.remove("show");
    star2.classList.add("hide");
    ducky.classList.remove("show");
    ducky.classList.add("hide");
    linkDuckyWeb.classList.remove("hide");
    linkDuckyWeb.classList.add("show");

    hideDescriptionWeb();
    hideDescriptionUX();
    hideDescriptionContent();

}
function showDescriptionContent(){
    contentDescription.classList.remove("hide");
    basicContent.classList.remove("basic_content_collapsed");
    basicContent.classList.add("enlarge_basic_content");
    movieCamera.classList.add("hide");
    contentHTTP.classList.remove("hide");
    contentHTTP.classList.add("show");

    hideDescriptionWeb();
    hideDescriptionUX();
    hideDescriptionAnimation();

}


function hideDescriptionWeb(){
    macbook.classList.remove("hide");
    webDescription.classList.add("hide");
    basicWeb.classList.remove("enlarge_web");
    basicWeb.classList.add("basic_web_collapsed");
    projectWeb.classList.remove("show");
    projectWeb.classList.add("hide");
}
function hideDescriptionUX(){
    uxDescription.classList.add("hide");
    croissant.classList.remove("hide");
    paperBG.classList.add("enlarge_paper_texture_container");
    basicUiUx.classList.remove("enlarge_basic_ui_ux");
    basicUiUx.classList.add("basic_ui_ux_collapsed");
    projectDocumentation.classList.add("hide");
    projectDocumentation.classList.remove("show");
    projectPrototype.classList.add("hide");
    projectPrototype.classList.remove("show");
    projectUxWebsite.classList.add("hide");
    projectUxWebsite.classList.remove("show");
}
function hideDescriptionAnimation(){
    basicAnimation.classList.add("basic_animation_collapsed");
    basicAnimation.classList.remove("enlarge_basic_animation");
    animationDescription.classList.add("hide");
    star1.classList.add("show");
    star1.classList.remove("hide");
    star2.classList.add("show");
    star2.classList.remove("hide");
    ducky.classList.add("show");
    ducky.classList.remove("hide");
    linkDuckyWeb.classList.add("hide");
    linkDuckyWeb.classList.remove("show");

}
function hideDescriptionContent(){
    contentDescription.classList.add("hide");
    basicContent.classList.add("basic_content_collapsed");
    basicContent.classList.remove("enlarge_basic_content");
    movieCamera.classList.remove("hide");
    contentHTTP.classList.add("hide");
    contentHTTP.classList.remove("show");

}

