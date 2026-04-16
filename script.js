// A. WAIT FOR ASSETS TO LOAD
window.onload = function() {
    
    // Initialize Lucide Icons
    lucide.createIcons();

    // B. GSAP ENTRANCE ANIMATION (The "Pop-In" Effect)
    const tl = gsap.timeline();

    // Fade out loader
    tl.to("#loader", { 
        opacity: 0, 
        duration: 0.6, 
        onComplete: () => document.getElementById("loader").style.display = "none" 
    });

    // Animate Card (Slides up and fades in)
    tl.fromTo("#mainCard", 
        { opacity: 0, y: 50, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "back.out(1.7)" }
    );

    // Continuous Subtle Floating Animation
    gsap.to("#mainCard", {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
};

// C. THE COUNTDOWN LOGIC
const targetTime = new Date("April 25, 2026 11:00:00").getTime();

const updateTimer = () => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) return; // Stop if date passed

    // Calculation
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // UI Update with Padding (e.g. 05 instead of 5)
    document.getElementById("days").innerHTML = d.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = h.toString().padStart(2, '0');
    document.getElementById("mins").innerHTML = m.toString().padStart(2, '0');
    document.getElementById("secs").innerHTML = s.toString().padStart(2, '0');
};

// Run timer every second
setInterval(updateTimer, 1000);
