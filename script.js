// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const optionsSection = document.querySelector('.options-section');

menuToggle.addEventListener('click', () => {
    if (optionsSection.style.display === "flex") {
        optionsSection.style.display = "none";
    } else {
        optionsSection.style.display = "flex";
    }
});

// Option buttons click
const optionButtons = document.querySelectorAll('.option-button');
const displayText = document.getElementById('display-text');
const secureInputContainer = document.getElementById('secure-input-container');
const secureInput = document.getElementById('secure-input');
const secureSaveBtn = document.getElementById('secure-save-btn');

optionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const option = btn.getAttribute('data-option');
        if(option === "1"){
            displayText.textContent = "Qunnamtiif: Bilbilaa fi Email fayyadami.";
            secureInputContainer.style.display = "none";
        } else if(option === "2"){
            displayText.textContent = "Gargaarsaaf: Tuqi button barbaachisaa.";
            secureInputContainer.style.display = "none";
        } else if(option === "3"){
            displayText.textContent = "Secure Option ⫸ barreessi password siif kenna.";
            secureInputContainer.style.display = "block";
        }
    });
});

// Save password (temporary)
secureSaveBtn.addEventListener('click', () => {
    const pass = secureInput.value;
    if(pass !== ""){
        alert("Password saved successfully!");
        secureInput.value = "";
        secureInputContainer.style.display = "none";
    } else {
        alert("Password galchuu hin dagatin!");
    }
});
