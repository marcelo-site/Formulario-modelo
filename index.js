const label = document.querySelectorAll("label");
const showpass = document.querySelector("#showpass");
const hidepass = document.querySelector("#hidepass");

const cahengeFocus = (event) => {
  const labels = document.querySelector('label')
  const input = document.querySelectorAll('input')
  const index = parseInt(event.getAttribute('data-index'))
  if (!!event.value) label[index].classList.add("focus");
  else label[index].classList.remove("focus");
}

const handleFocus = (event) => {
  event.style.borderColor = "red";
  const index = parseInt(event.getAttribute('data-index'))
  cahengeFocus(event)
};

const handleBlur = (event) => {
  event.style.borderColor = "";
  const index = parseInt(event.getAttribute('data-index'))
  cahengeFocus(event)
};

const togglePassword = (event) => {
  const input = event.parentNode.querySelector("input");
  cahengeFocus(input)
  function change(hide) {
    hidepass.style.display = hide ? "none" : "block";
    showpass.style.display = hide ? "block" : "none";
    pass.type = hide ? "password" : "text";
  }

  const pass = document.querySelector("#pass");
  if (pass.type === "text") change(true)
  else change(false)
};

const handleSubmit = (event) => {
  event.preventDefault();
  alert("Sua mensagem Foi enviada!");
  window.location.reload()
};
document.querySelector("form").addEventListener("submit", handleSubmit);

const replaceStringToNumber = (el) => {
    el.value = el.value.replace(/[^0-9|-]/g, "").replace(/(\*?)\*/g, "$1")
}