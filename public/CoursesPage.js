async function loadNavbar() {
  try {
    const response = await fetch("./NavBar.html");
    const data = await response.text();
    document.getElementById("navbar").innerHTML = data;
  } catch (error) {
    console.error("Error loading the navbar:", error);
  }
}

loadNavbar();
async function loadHeader() {
  try {
    const response = await fetch("./CoursesCard.html");
    const data = await response.text();
    document.getElementById("coursesCard").innerHTML = data;
  } catch (error) {
    console.error("Error loading the coursesCard:", error);
  }
}

loadHeader();

async function loadFooter() {
  try {
    const response = await fetch("./Footer.html");
    const data = await response.text();
    document.getElementById("footer").innerHTML = data;
  } catch (error) {
    console.error("Error loading the footer:", error);
  }
}

loadFooter();