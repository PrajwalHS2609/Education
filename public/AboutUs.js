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
async function loadAboutUs() {
  try {
    const response = await fetch("./AboutUs.html");
    const data = await response.text();
    document.getElementById("aboutus").innerHTML = data;
  } catch (error) {
    console.error("Error loading the aboutus:", error);
  }
}

loadAboutUs();
async function loadTestimonial() {
  try {
    const response = await fetch("./Testimonial.html");
    const data = await response.text();
    document.getElementById("testimonial").innerHTML = data;
  } catch (error) {
    console.error("Error loading the testimonial:", error);
  }
}

loadTestimonial();

async function loadAboutUSWhy() {
  try {
    const response = await fetch("./AboutUsWhy.html");
    const data = await response.text();
    document.getElementById("aboutUsWhy").innerHTML = data;
  } catch (error) {
    console.error("Error loading the aboutUsWhy:", error);
  }
}

loadAboutUSWhy();

async function loadAboutUsInstructor() {
  try {
    const response = await fetch("./AboutUsInstructor.html");
    const data = await response.text();
    document.getElementById("aboutUsInstructor").innerHTML = data;
  } catch (error) {
    console.error("Error loading the aboutUsInstructor:", error);
  }
}

loadAboutUsInstructor();
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
