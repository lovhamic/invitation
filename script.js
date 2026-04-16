<script>
    const weddingDate = new Date("April 25, 2026 11:00:00").getTime();

    const updateTimer = setInterval(function() {
        const now = new Date().getTime();
        const diff = weddingDate - now;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        // Update HTML elements
        document.getElementById("days").innerText = d.toString().padStart(2, '0');
        document.getElementById("hours").innerText = h.toString().padStart(2, '0');
        document.getElementById("mins").innerText = m.toString().padStart(2, '0');
        document.getElementById("secs").innerText = s.toString().padStart(2, '0');

        if (diff < 0) {
            clearInterval(updateTimer);
            document.querySelector(".timer-container").innerHTML = "Wedding Started";
        }
    }, 1000);
</script>
