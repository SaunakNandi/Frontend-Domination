const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const text = document.querySelector("#text");
const ul = document.querySelector("ul");
add.addEventListener("click", () => {
  //create li element
  var li = document.createElement("li");
  ul.appendChild(li);
  li.textContent = text.value;
  // append it as child inside ul tag
  text.value = "";
});

var li
remove.addEventListener("click", () => {
    let li_list= document.querySelectorAll("li");
    console.log(ul.removeChild(li_list[0]))
});
