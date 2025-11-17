// ---------------- CONFIG PADRÃO ----------------
const defaultConfig = {
  page_title: "Thayna",
  inicio_title: "Início",
  eu_title: "Thay",
  jesus_title: "Jesus",
  estudos_title: "Estudos",
  familia_title: "Família",
  amigos_title: "Amigos"
};

// ---------------- FUNÇÃO PARA ADICIONAR FOTOS ----------------
function addPhotos(containerId, photoList) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  photoList.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    container.appendChild(img);
  });
}

// ---------------- LISTAS DE FOTOS ----------------
// coloque seus arquivos dentro de /fotos/amigos/

const amigosFotos = [
  "fotos/amigos/thay-e-gabi.jpg",
  "fotos/amigos/marcus-bruno-thay-e-malu.jpg",
  "fotos/amigos/thay-e-alex.jpg",
  "fotos/amigos/thay-e-aliane-dnj.jpg",
  "fotos/amigos/thay-e-malu.jpg",
  "fotos/amigos/thay-e-manu.jpg",
  "fotos/amigos/thay-e-samuel.jpg",
  "fotos/amigos/br-em-queenstown.jpg",
  "fotos/amigos/trinity-torre.jpg",
  "fotos/amigos/grupo-do-alequis.jpg",
  "fotos/amigos/meu-aniversario-amigos.jpg",
  "fotos/amigos/thay-e-bruno.jpg"
];

// Adiciona as fotos na aba AMIGOS
addPhotos("amigos-photos", amigosFotos);

// ---------------- MENU & TABS ----------------
const menuToggle = document.getElementById("menuToggle");
const menuTabs = document.getElementById("menuTabs");
const menuOverlay = document.getElementById("menuOverlay");

menuToggle.onclick = () => menuTabs.classList.toggle("open");
menuOverlay.onclick = () => menuTabs.classList.remove("open");

document.querySelectorAll(".tab-button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");

    menuTabs.classList.remove("open");
  };
});
