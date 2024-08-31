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

async function loadExplore() {
  try {
    const response = await fetch("./Explore.html");
    const data = await response.text();
    document.getElementById("explore").innerHTML = data;
  } catch (error) {
    console.error("Error loading the explore:", error);
  }
}

loadExplore();

async function loadWhyChoose() {
  try {
    const response = await fetch("./WhyChoose.html");
    const data = await response.text();
    document.getElementById("whyChoose").innerHTML = data;
  } catch (error) {
    console.error("Error loading the explore:", error);
  }
}

loadWhyChoose();

async function loadAboutUs() {
  try {
    const response = await fetch("./AboutUs.html");
    const data = await response.text();
    document.getElementById("aboutUs").innerHTML = data;
  } catch (error) {
    console.error("Error loading the aboutUs:", error);
  }
}

loadAboutUs();
async function loadTestimonial() {
  try {
    const response = await fetch("./Testimonial.html");
    const data = await response.text();
    document.getElementById("testimonial").innerHTML = data;
  } catch (error) {
    console.log("Error loading Testimonial :", error);
  }
}
loadTestimonial();

async function loadCourses() {
  try {
    const response = await fetch("./Courses.html");
    const data = await response.text();
    document.getElementById("courses").innerHTML = data;
  } catch (error) {
    console.log("Error loading courses :", error);
  }
}
loadCourses();

async function loadFooter() {
  try {
    const response = await fetch("./Footer.html");
    const data = await response.text();
    document.getElementById("footer").innerHTML = data;
  } catch (error) {
    console.log("Error loading Footer :", error);
  }
}
loadFooter();
