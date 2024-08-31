let showSideBar = () => {
  const sideBar = document.querySelector(".respMenuContainer");
  sideBar.style.display = "block";
  sideBar.style.transform = "translateX(0)";
  console.log("showSideBar");
};

let hideSideBar = () => {
  const sideBar = document.querySelector(".respMenuContainer");
  // sideBar.style.display = "none";
  sideBar.style.transform = "translateX(100%)";
  console.log("hideSideBar");
};
