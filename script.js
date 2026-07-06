const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

// تشغيل وإيقاف الموسيقى
musicBtn.onclick = () => {

    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }

};


// قطرات الدم
const bloodContainer = document.getElementById("blood-container");

function createBlood() {

    const blood = document.createElement("div");

    blood.className = "blood";

    blood.style.left = Math.random() * window.innerWidth + "px";

    blood.style.height = (50 + Math.random() * 120) + "px";

    blood.style.width = (4 + Math.random() * 8) + "px";

    blood.style.animationDuration = (3 + Math.random() * 5) + "s";

    blood.style.opacity = (0.4 + Math.random() * 0.6);

    bloodContainer.appendChild(blood);

    setTimeout(() => {
        blood.remove();
    }, 8000);

}

// إنشاء قطرات جديدة باستمرار
setInterval(createBlood, 250);


// دخول ناعم
window.onload = () => {

    document.querySelector(".card").style.opacity = "1";

};