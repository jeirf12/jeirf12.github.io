// Path url pages
let path = { "Welcome to my page": "index.html", "Start": "index.html", "Studies": "views/templates/studies.html", "Projects": "views/templates/projects.html", "Hobbies":"views/templates/hobbies.html", "Contact": "views/templates/contact.html" }
let informationPage = {
  title: { "/": "Page web","index.html": "Page web", "studies.html": "Page studies web", "projects.html": "Page projects web", "hobbies.html": "Page hobbies web", "contact.html": "Page contact web" },
  styles: {
    "/": ["views/css/style.css"], "index.html": ["views/css/style.css"], "studies.html": ["../css/style.css", "../css/styleStudies.css"], "projects.html": ["../css/style.css", "../css/styleProjects.css"], "hobbies.html": ["../css/style.css", "../css/styleHobbies.css"], "contact.html": ["../css/style.css", "../css/styleContact.css"],
  },
  icon: { 
    "/": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA9UlEQVRIie2UzZGCQBCFDWFDmBD6QPeZBJjuEMxMQzADOPWr8sKGQAZuBu5BUXQZfqZqD1pO1bs84H39BobN5u2XFSiVsVP2VgVnFZyVvVXGzgqU+cF8JGXUt9CUGLXxkTLC/TQbfm90WgxZHb4WEhnN6vDBdk1PX6DMDr9q8sVHxn54c2Q0RghGCMNmKf96bZ8GCL4fpiGEWztCmPP7TzgJ+FOX2q9xwLjfazFAGXW/FQ9nIuWvBmTqA/gA/hHwfJJzFBlNElCJ2+iDjJ9Fnsz87HrIvYl3FWNrhBDFDyreqXgXxQ9GCBVje/Euk1fiNhn+kusXkRrH5UlZp94AAAAASUVORK5CYII=", 
    "index.html": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA9UlEQVRIie2UzZGCQBCFDWFDmBD6QPeZBJjuEMxMQzADOPWr8sKGQAZuBu5BUXQZfqZqD1pO1bs84H39BobN5u2XFSiVsVP2VgVnFZyVvVXGzgqU+cF8JGXUt9CUGLXxkTLC/TQbfm90WgxZHb4WEhnN6vDBdk1PX6DMDr9q8sVHxn54c2Q0RghGCMNmKf96bZ8GCL4fpiGEWztCmPP7TzgJ+FOX2q9xwLjfazFAGXW/FQ9nIuWvBmTqA/gA/hHwfJJzFBlNElCJ2+iDjJ9Fnsz87HrIvYl3FWNrhBDFDyreqXgXxQ9GCBVje/Euk1fiNhn+kusXkRrH5UlZp94AAAAASUVORK5CYII=", 
    "studies.html": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA00lEQVRIie3UsRWCQAwG4JSYNIzACIzACI7ACI7gBtLl/lDACGyiG+gGusFZHPioFHmkI9Vdrvjevbw/RHv9WwaJBolfzyo1IBc3AJCXQaKZlD4/CNIYJFqQxgcwKcf70wVId34YJAJ8dAGAw2kEehdANSumXtdRvjlARGSBB4NEU6l9AJU69fnqAnQd5VMmVLNic4CICOB+HPbZBWg1qwwSEfjuAqS3lIlWs8oHGFfHokysAWaZ+L061gBERAh8W5SJtcAnE4EHFyBlgvtFg95rXm8ZblmqPWqgSgAAAABJRU5ErkJggg==",
    "projects.html": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAb0lEQVRIiWNgGPYgnHvW/3DuWf+JFR9YCyI4ZjuEc828D9NMMuaaeT+CY7YDbtdyzXpAtuFIlhAMDkrx4LGAqIgjRR/dLRiecTC0LBj6cTBqAf0tCOOe+YFiC7hmPcBpAaTCoaBO4Jr1AG+FMyQBAHkoUkIWkyT/AAAAAElFTkSuQmCC",
    "hobbies.html": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACRklEQVRYhe2XzW7TQBCAF665rJiRigRIlmYfoDeOzRuQJ6B5DG6xeAHn0BkfW/UF0jsSzRu0T4D9BDRXLpgDW7NZr+2NY0MlOpKlSJ7MfjM7f1bqWf4HMYJnRjAzgreG8c4IVkawsr9v7buz6UFyXBHDQw3Q8xDDg8lxNToICSxIoIgFaYAJFCSwGAXG5LgKeF4Sw5oEFkZwGw13bLSI4TIAsmxAM6ZeRHaGMSWGJQnsPBuXwyLjH8Jwk2Rat+rnOCeG0jCmrl6SaU0MN3uRYkwPgrFXUR1lpGnzyotiXE4lmdbBBD4SyIcigaIr4rX4VzUmkL2+8iCbfp95TNBebyr14m0ObyLsL90+1alscpwfCkL86h0xfiaGkgS+Jzx7HQH1J0o5zrsU1w79uk3v5FrNiOEjMXwlgZ9eRL+oVL3sdPz3eOk9R7lNrqsKWvOszg341Op0s4K3rUBudSW5TgYDCfxILuC9/z+b1PuzkPGuK0K1YqtSFBBWhvHbybWaeQ5vQrr/Dsjv2H1nudk/2ZV5s80I3ndF6Ikl9d8r+23MOfuN0W57kzRGd1Z2NUar7O8vUWCDRofArk9/+uHqRifGZmMijwjkbqDEUEatH0pNtKD56/ChS79bcdbApneFFSj8fLPXtBnFucDaWZDAeQBmFSoEEjgP7FdXg2DqwwJJbhMzMxfwwTirRMQ4GRYZX0hgEUz0yMf2qHE+FB8lybQ2jGlgFrWD2K1zVJCQ2G+wtR0B9+6gNIJbYlgnrE8nB3mWpyC/ABKl6RsjvJabAAAAAElFTkSuQmCC",
    "contact.html": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA6UlEQVRIie2UwQ2CQBBF50jCbPJLoCRLsAPtQEqwA+lgd7AA6AA60Q7wAIQFYZPF8aST7PW9/GE+RP/ZMwK+OrC1IKiCLQgOXAlMJzCdA1eqAgG3I3ySmJuiYA5Xl2wJBKYrkZ4VBFxvS9hpJCg24K3KRd1hDl+DE41nap6+wCLJVODjvK+Jc1WBRZL5KRzMYy3FUEorSE/REgHn8x5w40sGePNRTwTsFmV7CPjSJ5zguyUWhLVfR+g5cBV1cYMkUL7VV0Quq/8my/MNND6PFvRpkkxgirCI613wuYhQIj32ffHXp9j435oXbvf4I35dypkAAAAASUVORK5CYII="
  },
}

const fileName = () => {
  let pathPage = window.location.href;
  let lastBarPosition = pathPage.lastIndexOf("/");
  if(lastBarPosition + 1 === pathPage.length) return "/";
  let pathPageEnd = pathPage.substring(lastBarPosition + "/".length, pathPage.length);
  return pathPageEnd;
}

const createHead = (props) => {
  let namePage = fileName();
  let meta = document.createElement("meta");
  meta.setAttribute("charset", "UTF-8");
  let titleWeb = document.createElement("title");
  titleWeb.textContent = props.title[namePage];
  let styles = [];
  props.styles[namePage].forEach((element) => {
    let style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("type", "text/css");
    style.setAttribute("href", element);
    styles.push(style);
  })
  let styleIcon = document.createElement("link");
  styleIcon.setAttribute("rel", "stylesheet");
  styleIcon.setAttribute("href", "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");
  styles.push(styleIcon);
  let icon = document.createElement("link");
  icon.setAttribute("rel", "shortcut icon");
  icon.setAttribute("type", "image/x-icon");
  icon.setAttribute("href", props.icon[namePage]);
  return { meta, titleWeb, styles, icon };
}

// Functions Events
const openLink = (url) => window.location.href = window.location.origin + "/" + url;

const openWindowNew = (url) => window.open(url);

const toggleClassname = ({ element = "", id = "" }) => element.classList.toggle(id);

// Events with javascript
const addParam = (method, parameter) => parameter !== "" ? () => method(parameter) : method;

const loadClickEvent = (element, methodClick, parameter = "") => element.addEventListener("click", addParam(methodClick, parameter));

const loadMouseEnterEvent = (element, methodMouseEnter, parameter = "") => element.addEventListener("mouseenter", addParam(methodMouseEnter, parameter));

const loadMouseLeaveEvent = (element, methodMouseLeave, parameter = "") => element.addEventListener("mouseleave", addParam(methodMouseLeave, parameter));

// functions mutative
const createElement = (props) => {
  let element = document.createElement(props.name);
  element.setAttribute("title", props.title);
  element.setAttribute("class", props.classname);
  return element;
}

const createUnorderedListElements = (array) => {
  let ul = document.createElement("ul");
  array.forEach((name) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = name;
    loadClickEvent(a, openLink, path[name]);
    li.appendChild(a);
    ul.appendChild(li);
  })
  return ul;
}

// create elements
// ---- head ----
let { meta, titleWeb, styles, icon } = createHead(informationPage);

// ---  navigation ---
let sort = document.createElement("div");
sort.setAttribute("class", "sort");
let header = document.createElement("header");
let h3 = document.createElement("h3");
let a = document.createElement("a");
let nameWelcome = "Welcome to my page";
a.textContent = nameWelcome
let nav = document.createElement("nav");
let ul = createUnorderedListElements(["Start", "Studies", "Projects", "Hobbies", "Contact"]);

// ---  footer ---
let footer = createElement({ name: "footer", title: "", classname: "" });
let aFacebook = createElement({ name: "a", title:"Ingresa a mi perfil de facebook", classname: "bx bxl-facebook-square" });
let aInstagram = createElement({ name: "a", title:"Ingresa a mi perfil de instagram", classname: "bx bxl-instagram" });
let aGithub = createElement({ name: "a", title:"Ingresa a mi perfil de github", classname: "bx bxl-github" });
let iRobot = createElement({ name: "i", title:"Mr Robot", classname: "bx bx-bot" });

// Loads Events Elements
loadClickEvent(aFacebook, openWindowNew, "https://www.facebook.com/Fallen.100101");
loadMouseEnterEvent(aFacebook, toggleClassname, { element: aFacebook, id: "facebook" })
loadMouseLeaveEvent(aFacebook, toggleClassname, { element: aFacebook, id: "facebook" })

loadClickEvent(aInstagram, openWindowNew, "https://www.instagram.com/fallen.1001");
loadMouseEnterEvent(aInstagram, toggleClassname, { element: aInstagram, id: "instagram" })
loadMouseLeaveEvent(aInstagram, toggleClassname, { element: aInstagram, id: "instagram" })

loadClickEvent(aGithub, openWindowNew, "https://github.com/jeirf12");
loadMouseEnterEvent(aGithub, toggleClassname, { element: aGithub, id: "github" })
loadMouseLeaveEvent(aGithub, toggleClassname, { element: aGithub, id: "github" })

// Joining elements head
// ---  head ---
document.head.appendChild(meta);
document.head.appendChild(titleWeb);
styles.forEach((style) => document.head.appendChild(style));
document.head.appendChild(icon);

// Joining elements body
// ---  navigation ---
loadClickEvent(a, openLink, path[nameWelcome]);
h3.appendChild(a);
header.appendChild(h3);
nav.appendChild(ul);
let secondSort = document.getElementById("second-sort");
document.body.insertBefore(sort, secondSort);
document.body.insertBefore(header, secondSort);
document.body.insertBefore(nav, secondSort);

// ---  footer ---
footer.appendChild(aFacebook);
footer.appendChild(aInstagram);
footer.appendChild(aGithub);
footer.appendChild(iRobot);
document.body.appendChild(footer);

// Load events click contact form
document.getElementById("bottom") ? loadClickEvent(document.getElementById("bottom"), () => { window.event.preventDefault(); alert("Mensaje Enviado"); }) : "";
