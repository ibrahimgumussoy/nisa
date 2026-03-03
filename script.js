function moveButton() {
    const btn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 50);
    
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

document.getElementById('yesBtn').addEventListener('click', () => {
    document.querySelector('.message-content').style.display = 'none';
    document.querySelector('.action-area').style.display = 'none';
    document.getElementById('finalMessage').style.display = 'block';
});