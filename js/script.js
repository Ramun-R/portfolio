
if (!localStorage.getItem("theme")) {
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    preferDark ? setDarkMode() : setLightMode();
}
else{
    if(localStorage.getItem("theme") === "dark") setDarkMode();
    else setLightMode();
}

function scrollToSection(sectionID){
    document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
}

function toggleDarkMode(){
    if (document.body.getAttribute("data-theme") === "light") setDarkMode();
    else setLightMode();
}

function setDarkMode(){
    document.body.setAttribute("data-theme", "dark");
    document.getElementById("theme-icon").alt = "sun icon";
    localStorage.setItem("theme", "dark");
}
function setLightMode(){
    document.body.setAttribute("data-theme", "light");
    document.getElementById("theme-icon").alt = "moon icon";
    localStorage.setItem("theme", "light");
}