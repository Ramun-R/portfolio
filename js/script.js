
if (!localStorage.getItem("theme")) {
    const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = preferDark ? "dark" : "light";
    document.body.setAttribute("data-theme", defaultTheme);
}
else{
    const defaultTheme = localStorage.getItem("theme");
    document.body.setAttribute("data-theme", defaultTheme);
}

function scrollToSection(sectionID){
    document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
}

function toggleDarkMode(){
    if (document.body.getAttribute("data-theme") === "light"){ 
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
    else {
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
    }
}