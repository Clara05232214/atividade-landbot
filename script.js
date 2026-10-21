document.addEventListener("DOMContentLoaded", function () {
  // Atualiza o ano automaticamente no rodapé.
  const elementoAno = document.getElementById("ano");

  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
  }

  // Configure aqui o link público do seu bot no Landbot.
  const linkDoBot = "https://landbot.online/v3/H-3535178-58TGJSOK0F3YD4DV/index.html";

  const botaoLandbot = document.getElementById("botaoLandbot");

  if (botaoLandbot) {
    botaoLandbot.addEventListener("click", function (event) {
      if (
        !linkDoBot.startsWith("https://") ||
        linkDoBot.includes("COLE_AQUI")
      ) {
        event.preventDefault();

        alert(
          "Adicione o link público do seu bot do Landbot no arquivo script.js."
        );

        return;
      }

      // Abre o bot em uma nova aba.
      event.preventDefault();
      window.open(linkDoBot, "_blank", "noopener,noreferrer");
    });
  }
});