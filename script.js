const dataGame = [
  {
    judul: "Ib (Bahasa Indonesia)",
    deskripsi: "Petualangan horor gadis kecil bernama Ib di dalam galeri seni misterius.",
    gambar: "https://via.placeholder.com/400x250/333/fff?text=Gambar+Game+1", 
    linkDownload: "https://drive.google.com"
  },
  {
    judul: "The Witch's House (Bahasa Indonesia)",
    deskripsi: "Eksplorasi rumah penyihir penuh teka-teki dan jebakan mematikan.",
    gambar: "https://via.placeholder.com/400x250/333/fff?text=Gambar+Game+2",
    linkDownload: "https://mediafire.com"
  }
];

const tempatGame = document.getElementById("daftar-game");

dataGame.forEach(game => {
  const card = document.createElement("div");
  card.className = "card";
  
  card.innerHTML = `
    <img src="${game.gambar}" alt="${game.judul}">
    <div class="card-content">
      <h3>${game.judul}</h3>
      <p>${game.deskripsi}</p>
      <a href="${game.linkDownload}" target="_blank" class="btn-download">Download Game</a>
    </div>
  `;
  
  tempatGame.appendChild(card);
});
