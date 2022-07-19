let lastVisit = document.lastModified;
document.getElementById("updated").textContent = "Last Updated:" + lastVisit;
const currentYear = new Date();
document.getElementById("year").textContent = currentYear.getFullYear();