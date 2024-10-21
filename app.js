const reviews = [
  {
    id: 1,
    name: "zubair",
    img: "t2.jpg",
    profession: "Developer",
    discription:
      "lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis",
  },
  {
    id: 2,
    name: "fahemm",
    img: "t3.webp",
    profession: "Developer full stack",
    discription:
      "lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis",
  },
  {
    id: 3,
    name: "ibrahim",
    img: "t4.webp",
    profession: "imamm sab",
    discription:
      "lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis",
  },
  {
    id: 4,
    name: "ishtiaq",
    img: "t2.jpg",
    profession: "Developer",
    discription:
      "lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis",
  },
];

//select items
const img = document.querySelector(".images img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const text = document.querySelector(".text");

const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const randombtn = document.querySelector(".randombtn");

window.addEventListener("DOMContentLoaded", function () {
  //call back function
  showPerson();
});

//set initial value
let currentItems = 0;

function showPerson() {
  const item = reviews[currentItems];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.profession;
  text.textContent = item.discription;
}

// show next person when click the next button

next.addEventListener("click", () => {
  currentItems++;
  // console.log("bhai chal raha hai")
  showPerson();
});

previous.addEventListener("click", () => {
  currentItems--;
  // console.log("bhai chal raha hai")
  showPerson();
});
randombtn.addEventListener("click", () => {

  currentItems=Math.floor(Math.random()*4)
  console.log(currentItems)
  // console.log("bhai chal raha hai")
  showPerson();
});
