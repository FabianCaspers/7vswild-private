const hamburgerBtn = document.getElementById("hamburgerBtn");
const dropdownMenu = document.querySelector(".dropdown-menu");

hamburgerBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  const target = event.target;
  const isDropdownMenu = target.matches(".dropdown-menu") || target.closest(".dropdown-menu");
  const isHamburgerBtn = target.matches("#hamburgerBtn") || target.closest("#hamburgerBtn");

  if (!isDropdownMenu && !isHamburgerBtn) {
    dropdownMenu.classList.remove("show");
  }
});