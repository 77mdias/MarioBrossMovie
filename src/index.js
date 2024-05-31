import("./style.css");

document
  .querySelector(".button-menu")
  .addEventListener("click", function menuShow() {
    const menu = document.querySelector(".menu-mobal");
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      document.querySelector(".main").style.display = "flex";
      document.querySelector(".button-menu img").src =
        "../assets/menu_white_36dp.svg";
    } else {
      menu.classList.add("open");
      document.querySelector(".main").style.display = "none";
      document.querySelector(".button-menu img").src =
        "../assets/close_white_36dp.svg";
    }
  });
