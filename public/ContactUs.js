async function loadNavbar() {
  try {
    const response = await fetch("./NavBar.html");
    const data = await response.text();
    document.getElementById("navbar").innerHTML = data;
  } catch (error) {
    console.error("Error loading the navbar:", error);
  }
}
loadNavbar()
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

async function loadContactForm() {
    try {
      const response = await fetch("./ContactUsForm.html");
      const data = await response.text();
      document.getElementById("contactForm").innerHTML = data;
    } catch (error) {
      console.error("Error loading the contactForm:", error);
    }
  }
  
  loadContactForm();

  async function loadContactMap() {
    try {
      const response = await fetch("./ContactUsMap.html");
      const data = await response.text();
      document.getElementById("contactMap").innerHTML = data;
    } catch (error) {
      console.error("Error loading the contactMap:", error);
    }
  }
  
  loadContactMap();