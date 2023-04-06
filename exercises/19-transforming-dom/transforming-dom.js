/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  
  const img = document.querySelector("img")
  console.log(img);
  console.log(img.src);
  img.src = "https://https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";
  
  //const classes = element.class
  //element.classList.remove(""alert alert-warning");

/*const correctLink = document.querySelector("#correctLink").textContent;
const linkToChange = document.querySelector("#linkToChange");
linkToChange.href = correctLink;*/

  const linkTo = document.querySelector("linkTo");
  linkTo.remove("alert alert-warning")
  linkTo.add("https://developer.mozilla.org/en-US/docs/Web/JavaScript")


  const success = document.querySelector(".alert-success");
  success.textContent = "I am victorous";
  //this has to b inbetween the DIV

  const bootstrap = doocuent.querySelector(".bootstrap");
  //console.log(bootstrap);
  bootstrap.classList.add(".alert-info");
  bootstrap.classlist.remove(".alert-danger");
  bootstrap.classList.ass(".bg-info");

  //see if the button has a class "btn-primary
  //then say check blue

  const button = document.querySelector("button");
  if (button.classList.contains(".btn-primary")) {
    const destination = document.querySelector("destination");
    destination.textContent = "/u2713 blue";
  }




})();
