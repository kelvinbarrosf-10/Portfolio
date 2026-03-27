
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});
// 1. FAZER A LUZ SEGUIR O MOUSE E O TOQUE (MOBILE)
function updateLightPosition(e) {
  // Verifica se é um toque na tela (mobile) ou mouse (PC)
  const x = e.touches ? e.touches[0].clientX : e.clientX;
  const y = e.touches ? e.touches[0].clientY : e.clientY;
  
  document.body.style.setProperty("--x", x + "px");
  document.body.style.setProperty("--y", y + "px");
}

document.addEventListener("mousemove", updateLightPosition);
document.addEventListener("touchmove", updateLightPosition);


// 2. SISTEMA DE TEMA (DARK/LIGHT MODE) COM LOCALSTORAGE
const themeToggleBtn = document.getElementById("theme-toggle");

// Verifica no navegador se o usuário já escolheu o modo claro antes
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  document.body.classList.add("light-mode");
}

// Quando clicar no botão, troca o tema e salva
themeToggleBtn.addEventListener("click", () => {
  // Liga ou desliga a classe 'light-mode' no body
  document.body.classList.toggle("light-mode");
  
  // Verifica qual tema ficou e salva no localStorage
  let theme = "dark";
  if (document.body.classList.contains("light-mode")) {
    theme = "light";
  }
  localStorage.setItem("theme", theme);
});