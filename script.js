const cards = document.querySelectorAll(".card");
const data = [
  {
    id: "ExploreTheWorld",
    caption: "Explore The World",
    backgroundImage: "./assets/Explore The World.jpg",
  },
  {
    id: "WildForest",
    caption: "Wild Forest",
    backgroundImage: "./assets/Wild Forest.jpg",
  },
  {
    id: "SunnyBeach",
    caption: "Sunny Beach",
    backgroundImage: "./assets/Sunny Beach.jpg",
  },
  {
    id: "CityonWinter",
    caption: "City on Winter",
    backgroundImage: "./assets/City on Winter.jpg",
  },
  {
    id: "Mountains-Clouds",
    caption: "Mountains - Clouds",
    backgroundImage: "./assets/Mountains - Clouds.jpg",
  },
];

const cardsArray = Array.from(cards);
//Add backgrund & caption dynamicly
cardsArray.forEach((item, index) => {
  if (item.id === data[index].id) {
    item.style.backgroundImage = `url('${data[index].backgroundImage}')`;
    item.innerHTML = `<h3>${data[index].caption}</h3>`;
  }
});
cardsArray.forEach((item) =>
  item.addEventListener("click", () => AddClassActive(item))
);
//Add Active Class
function AddClassActive(item) {
  RemoveClassActive();
  item.classList.add("active");
}

//remove Active Class
function RemoveClassActive() {
  cardsArray.forEach((item) => item.classList.remove("active"));
}
// .style.backgroundImage = `url('${item.backgroundImage}')`)

// ? (card.style.backgroundImage = `url('${item.backgroundImage}'`)
// : "./assets/Wild Forest.jpg"
