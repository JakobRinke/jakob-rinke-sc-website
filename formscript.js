
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};

    // check if form data is filled out
    if (formData.get("name") === "" || formData.get("email") === "" || formData.get("message") === "") {
        result.innerHTML = "Bitte füllen Sie alle Felder aus.";
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
        return;
    }

  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);

  result.classList.remove("text-green-500");
    result.classList.remove("text-red-500");
    result.classList.add("text-gray-500");
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Vielen Dank für Ihre Nachricht. Ich werde mich so schnell wie möglich bei Ihnen melden.";
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = "Da ist etwas schiefgelaufen. Bitte versuchen Sie mich über meine E-Mail-Adresse zu kontaktieren.";
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Da ist etwas schiefgelaufen. Bitte versuchen Sie mich über meine E-Mail-Adresse zu kontaktieren.";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
