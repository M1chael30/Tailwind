//icons
const MOON = document.getElementById("dark");
const SUN = document.querySelector(".light");

//theme variables
const USERTHEME = localStorage.getItem("theme");
const SYSTEMTHEME = window.matchMedia("(prefers-color-scheme: dark)").matches;

//icon toggling
const ICONTOGGLE = () => {
 MOON.classList.toggle("hide");
 SUN.classList.toggle("hide");
};

//initial theme check
const THEMECHECK = () => {
 if (USERTHEME === "dark" || (!USERTHEME && SYSTEMTHEME)) {
  document.documentElement.classList.add("dark");
  MOON.classList.add("hide");
  return;
 } else {
  SUN.classList.add("hide");
 }
};

//manual theme switch
const THEMESWITCH = () => {
 if (document.documentElement.classList.contains("dark")) {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
  ICONTOGGLE();
  return;
 } else {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  ICONTOGGLE();
 }
};

//call theme switch on clicking buttons
SUN.addEventListener("click", () => {
 THEMESWITCH();
});

MOON.addEventListener("click", () => {
 THEMESWITCH();
});

//invoke theme check on initial load
THEMECHECK();
