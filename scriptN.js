document.addEventListener("DOMContentLoaded", function() {
    const bellIcon = document.getElementById("bell-icon");
    const notificationBar = document.getElementById("notification-bar");
    const notificationList = document.getElementById("notification-list");
  
    let notifications = [];
  
    const page = document.body.getAttribute("data-page");
  
    if (page === "home") {
      notifications = [
        "Bienvenido a la página principal",
        "Revisa nuestras nuevas secciones"
      ];
    } else if (page === "musica") {
      notifications = [
        "Se agregaron nuevas canciones",
        "No olvides crear tu playlist"
      ];
    } else if (page === "biblioteca") {
      notifications = [
        "Nuevos libros disponibles",
        "Revisa tu lista de lectura"
      ];
    }
  
    notificationList.innerHTML = notifications.map(msg => `<li>${msg}</li>`).join("");
  
    bellIcon.addEventListener("click", function () {
      notificationBar.classList.toggle("show");
    });
  });
  