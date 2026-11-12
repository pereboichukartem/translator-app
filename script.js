const inputField = document.getElementById("input");
const translateBtn = document.getElementById("translateBtn");
const outputDiv = document.getElementById("output");

async function translateText() {
    const textToTranslate = inputField.value;
    
    if (!textToTranslate.trim()) return;

    const safeText = encodeURIComponent(textToTranslate);
    
    const email = "pereboichukartem@gmail.com"; 

    const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=uk|en&de=${email}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        outputDiv.textContent = data.responseData.translatedText;
    } catch (error) {
        console.error("Помилка при перекладі:", error);
        outputDiv.textContent = "Сталася помилка при перекладі.";
    }
}

translateBtn.addEventListener("click", translateText);