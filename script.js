let yesScale = 1;
let noScale = 1;

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    // 1. Hayır butonunu küçült ve Evet butonunu büyüt
    noScale -= 0.1;
    yesScale += 0.15;

    if (noScale < 0.2) noScale = 0.2; // Tamamen yok olmasın ama çok küçülsün

    noBtn.style.transform = `scale(${noScale})`;
    yesBtn.style.transform = `scale(${yesScale})`;

    // 2. Hayır butonu yine ekranda rastgele kaçmaya devam etsin
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

document.getElementById('yesBtn').addEventListener('click', () => {
    document.querySelector('.message-content').style.display = 'none';
    document.querySelector('.action-area').style.display = 'none';
    document.getElementById('finalMessage').style.display = 'block';
});
