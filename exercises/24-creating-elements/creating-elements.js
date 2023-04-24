(function () {
  const alertButton = document.querySelector("#alertShowPic");
  alertButton.addEventListener("click", () => {
    alert("Thank you! ..I hope you enjoy the picture");
  });

  const startOverButton = document.querySelector("#startOver");
  startOverButton.type = "submit";

  const completeStartOver = () => {
    startOverButton.disabled = "cleared";
    startOverButton.textContent = ("Building a pie...");
      alert("I hope you enjoyed the picture");
    document.querySelector("#clearMe").style.diplay = "hidden";
  };
  startOverButton.addEventListener("click", completeStartOver);

  })();

  