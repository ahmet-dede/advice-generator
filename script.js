const loadingElement = document.getElementById("loading");
const adviceElement = document.getElementById("advice-id");
const adviceTextElement = document.getElementById("advice-text");
const adviceButtonElement = document.getElementById("advice-button");

async function fetchAdvice() {
  try {
    const isActive = adviceButtonElement.hasAttribute("disabled");

    if (isActive) {
      adviceButtonElement.removeAttribute("disabled");
    } else {
      adviceButtonElement.setAttribute("disabled", "true");
    }

    adviceButtonElement.style.cursor = "not-allowed";
    loadingElement.style.display = "block";
    adviceElement.innerText = "";
    adviceTextElement.innerText = "";

    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    const adviceId = data.slip.id;
    const adviceText = data.slip.advice;

    loadingElement.style.display = "none";
    adviceButtonElement.style.cursor = "pointer";

    adviceElement.innerText = `ADVICE #${adviceId}`;
    adviceTextElement.innerText = `"${adviceText}"`;
  } catch (error) {
    console.error("Error fetching advice:", error);
    loadingElement.innerText = "Error fetching advice. Please try again.";
  }
  adviceButtonElement.removeAttribute("disabled");
}

adviceButtonElement.addEventListener("click", fetchAdvice);

fetchAdvice();