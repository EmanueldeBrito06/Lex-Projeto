const botaoAbrir = document.getElementById("open-menu");// Adiciona o evento de clique para abrir o menu
const botaoFechar = document.getElementById("close-menu");// Adiciona o evento de clique para fechar o menu
const menu = document.getElementById("menu");// Seleciona o elemento do menu

function abrirMenu() {
    menu.style.display = "block"; // Tornar o menu visível
}

function fecharMenu() {
    menu.style.display = "none"; // Esconder o menu
}

botaoAbrir.addEventListener("click", abrirMenu);// Adiciona o evento de clique para abrir o menu
botaoFechar.addEventListener("click", fecharMenu);