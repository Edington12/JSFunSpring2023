(async function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   */
  const button = document.querySelector("#dropdown");
  const displayPic = document.querySelector("#");
  const displayName = document.querySelector("#")
 
  button.addEventListener("click", async () => {
    let message = "";
  try {
    const response = await axios.request({
      method: "GET",
      url: "https://rickandmortyapi.com/api/character",
    })
    message = response.data[0];

  } catch (err) {
    console.log("So sorry, an error has occurred");
  }

  try {
    const response = await axios.request({
      method: "GET",
      url: "https://rickandmortyapi.com/api/2",
    })
    message = response.data[1];
    //where do I put the information in the container??
    //and how do I do 2 requests??
    //and how do I look up the api information if not using thunder client?

    
  } catch (err) {
    console.log("So sorry, another error has occurred");
    
  }
  //display on page??
  const message2 = document.querySelector("#dropdown");
  message.textcontent = dropdown;


})();


/*
(async function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   */
  const dropdownMenu = document.querySelector("#dropdown");
  const displayName = document.querySelector("#title-head");
  const displayPhoto = document.querySelector("#main-img");
  try {
    const response = await axios.request({
      method: "GET",
      url: "https://rickandmortyapi.com/api/character",
    });
    response.data.results.forEach((characterOption) => {
      const dropdownOptions = `<option value=${characterOption.id}>${characterOption.name}</option>`;
      dropdownMenu.insertAdjacentHTML("beforeend", dropdownOptions);
      const imgSrc = `${characterOption.url}`;
    });
    dropdownMenu.addEventListener("change", async () => {
      const characterAPI = `https://rickandmortyapi.com/api/character/${dropdownMenu.value}`;
      try {
        const response = await axios.request({
          method: "GET",
          url: characterAPI,
        });
        const chosenCharacter = response.data;
        console.log(chosenCharacter);
        displayName.textContent = chosenCharacter.name;
        displayPhoto.src = chosenCharacter.image;
      } catch (err) {
        console.error(err);
      }
    });
  } catch (err) {
    console.error(err);
  }
})();
