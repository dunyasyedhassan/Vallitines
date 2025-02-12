const validPasswords = generateCaseVariations("aasai kothamalli");

function generateCaseVariations(password) {
    let variations = [];
    const len = password.length;
    const limit = Math.pow(2, len);

    for (let i = 0; i < limit; i++) {
        let variation = "";
        for (let j = 0; j < len; j++) {
            if ((i & (1 << j)) !== 0) {
                variation += password[j].toUpperCase();
            } else {
                variation += password[j];
            }
        }
        variations.push(variation);
    }
    return variations;
}

function checkPassword() {
    const input = document.getElementById("password").value;
    if (validPasswords.includes(input)) {
        const image = document.getElementById("main-image");
        const body = document.body;

        // Apply zoom-in effect
        image.style.transition = "transform 2s ease";
        image.style.transform = "scale(100)";

        // Apply fade-out effect to the whole page
        setTimeout(() => {
            body.style.transition = "opacity 1s ease";
            body.style.opacity = "0";
        }, 1000);

        // Redirect after both animations complete
        setTimeout(() => {
            window.location.href = "kirby.html"; // Replace with your second page URL
        }, 2000);
    } else {
        showPopup();
    }
}



function showPopup() {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <p>Incorrect Password</p>
        <img src="images/error_sf.png" alt="Error Image">
        <button onclick="closePopup()">Close</button>
    `;
    document.body.appendChild(popup);
    popup.style.display = "block";
}

function closePopup() {
    const popup = document.querySelector(".popup");
    if (popup) {
        popup.remove();
    }
}
