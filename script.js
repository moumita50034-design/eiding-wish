const audio = document.getElementById('bgMusic');

function openAndPlay() {
    document.getElementById('envelope').classList.toggle('open');
    if (audio.paused) {
        audio.play().catch(err => console.log("Audio play blocked. Click to start."));
    }
}

function showSalami(e) {
    e.stopPropagation();
    document.getElementById('salamiModal').style.display = 'flex';
}

function giveSalami(amount) {
    document.getElementById('salamiModal').style.display = 'none';
    const takaModal = document.getElementById('takaModal');
    const takaImg = document.getElementById('takaImg');
    const takaText = document.getElementById('takaText');

    let imgUrl = "";
    if(amount === 1000) imgUrl = "taka1000.png"; 
    if(amount === 500) imgUrl = "taka500.jpg";
    if(amount === 200) imgUrl = "taka200.png";

    takaImg.src = imgUrl;
    takaText.innerText = "অভিনন্দন! আপনি " + amount + " টাকা সালামি পেয়েছেন। 🧧";
    
    takaModal.style.display = 'flex';
}