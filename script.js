/* GLOBAL STYLES */
body {
    margin: 0;
    padding: 20px 0; /* Ensures space at the top/bottom for the background to show */
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Uses your specific background image 'a.jpg' */
    background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), 
                url('a.jpg') no-repeat center center fixed;
    background-size: cover;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
}

/* THE INVITATION CARD (Glassmorphism & Mobile Visibility) */
.invitation-card {
    background: rgba(255, 255, 255, 0.88); /* Semi-transparent white */
    backdrop-filter: blur(10px); /* Frosted glass effect */
    /* Adjusted width to 85% to ensure background is visible on sides */
    width: 85%; 
    max-width: 400px; 
    padding: 60px 20px;
    text-align: center;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    
    /* Animation initial state */
    opacity: 0;
    transform: translateY(20px);
    transition: all 1.2s ease;
}

/* Entrance animation trigger */
.card-visible {
    opacity: 1;
    transform: translateY(0);
}

/* THE BOXY DATE WRAPPER (Raised Effect) */
.date-box-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border: 1px solid #d1cfca;
    border-radius: 12px;
    margin: 35px auto;
    width: fit-content;
    /* Realistic shadow for 3D depth */
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.big-number {
    font-family: 'Playfair Display', serif;
    font-size: 55px;
    font-weight: 600;
    color: #5b7a5d; /* Your specific Sage Green */
    padding: 5px 25px;
    border-left: 1px solid #e2e0db;
    border-right: 1px solid #e2e0db;
    background: linear-gradient(to bottom, #ffffff, #f9f9f9);
}

/* THE BOXY TIMER (Sunken Effect) */
.timer-row {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 20px;
}

.timer-box {
    background: #ffffff;
    width: 72px;
    padding: 14px 0;
    border-radius: 10px;
    border: 1px solid #e0ddd7;
    /* Inset shadow for realistic "pressed" look */
    box-shadow: 
        inset 0 1px 3px rgba(0,0,0,0.02),
        0 4px 8px rgba(0,0,0,0.05);
}

/* BUTTON & INTERACTIVE ELEMENTS */
.venue-link {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    transition: transform 0.2s ease;
}

.venue-link:active {
    transform: scale(0.98);
}

.location-icon {
    fill: #5b7a5d; /* Matches Sage Green theme */
    width: 16px;
    height: 16px;
}
