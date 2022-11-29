const containerPrincipal = document.querySelector("#container-principal");
const raitingContainer = document.querySelector("#raiting-container");
const raiting = document.querySelectorAll(".rating");
const button = document.querySelector("button");
const containerSecundario = document.querySelector("#container-secundario");
const selectedRaiting = document.querySelector("#selected-raiting");
let rate = '';

function raitingSelect() {
  for (let index = 0; index < raiting.length; index += 1) {
    raiting[index].addEventListener("click", () => {
      for (let index2 = 0; index2 < raiting.length; index2 += 1) {
        if (raiting[index2].classList.contains("selected")) {
          raiting[index2].classList.remove("selected");
        }
        raiting[index].classList.add("selected");
        rate = raiting[index]
      }
    });
  }
}
raitingSelect();

function raitingSubmit() {
    // raitingSelect()
    button.addEventListener('click', () => {
        containerPrincipal.style.display = 'none';
        containerSecundario.style.display = 'flex';
        selectedRaiting.innerText = `You selected ${rate.innerHTML} out of 5`
    })
}
raitingSubmit()

