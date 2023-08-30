const targetDate = new Date("2023-09-01T00:00:00"); // Your anniversary date and time

const messageElement = document.getElementById("message");

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

        requestAnimationFrame(updateCountdown);
    } else {
        messageElement.textContent = "Happy Anniversary!";
        playFireworksAnimation();
        setTimeout(() => {
            window.location.href = 'celebration.html';
        }, 50);
    }
}


function playFireworksAnimation() {

    // Add your fireworks animation logic here
    // You can use libraries like particles.js or implement your own animation
}

updateCountdown();
