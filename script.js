<script>
    // 1. SET TARGET DATE: April 25, 2026, at 11:00 AM
    // Using the Date.parse or new Date() format
    const weddingDate = new Date("April 25, 2026 11:00:00").getTime();

    // 2. UPDATE FUNCTION: Runs every 1000ms (1 second)
    const timerInterval = setInterval(function() {
        
        // Get current timestamp
        const now = new Date().getTime();
        
        // Calculate the difference (Delta T)
        const distance = weddingDate - now;

        // 3. TIME CONVERSIONS
        // Math.floor handles the rounding to integers
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // 4. DISPLAY THE DATA
        // .padStart(2, '0') ensures "8" becomes "08" for that boxy look
        document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("mins").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("secs").innerHTML = seconds.toString().padStart(2, '0');

        // 5. EXPIRATION LOGIC
        if (distance < 0) {
            clearInterval(timerInterval);
            document.querySelector(".timer-container").innerHTML = "<h3>The Wedding Ceremony is Underway!</h3>";
        }
        
    }, 1000);
</script>
