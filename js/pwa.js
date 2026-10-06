(() => {
  const installButton = document.getElementById("installApp");
  let installPrompt = null;

  if (installButton) {
    installButton.hidden = false;
    installButton.addEventListener("click", async () => {
      if (installPrompt) {
        installPrompt.prompt();
        await installPrompt.userChoice;
        installPrompt = null;
        installButton.hidden = true;
        return;
      }

      const dialog = document.getElementById("messageDialog");
      const title = document.getElementById("dialogTitle");
      const message = document.getElementById("dialogMessage");
      if (!dialog || !title || !message) return;

      title.textContent = "Afegeix OposiPrep al mòbil";
      const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
      message.textContent = isIOS
        ? "A Safari, toca el botó Compartir i tria «Afegir a la pantalla d'inici». Després obre OposiPrep des de la icona nova."
        : "Si el navegador ofereix l'opció, obre el menú ⋮ i tria «Instal·la l'aplicació» o «Afegeix a la pantalla d'inici».";
      if (typeof dialog.showModal === "function") dialog.showModal();
    });
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    if (installButton) installButton.hidden = false;
  });

  window.addEventListener("appinstalled", () => {
    installPrompt = null;
    if (installButton) installButton.hidden = true;
  });

  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch((error) => {
        console.error("No s'ha pogut activar el mode d'aplicació:", error);
      });
    });
  }
})();