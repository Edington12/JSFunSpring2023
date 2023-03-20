const links = {
  Dogs: "http://www.omfgdogs.com",
  Kittens: "https://giphy.com/search/kitten",
  "Hamster Dance": "https://hamster.dance/hamsterdance/",
};

/**
 * Create an variable called "html".
 * Loop through all properties within the "links" object
 * and set "html" to a list of HTML links.
 *
 * @example
 * console.log(html);
 * // <a href="http://www.omfgdogs.com">Dogs</a><a href="https://giphy.com/search/kitten">Kittens</a><a href="https://hamster.dance/hamsterdance/">Hamster Dance</a>
 *
 * Your answer should still work when "links" has different keys and values.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let html = "";
/*for (let [animals, links] of Object.entries(links)) {
  const html = animals + " <a href=" + links + "</a>";
  console.log(html);
}*/

for (let animals in links) {
  console.log(animals);
  console.log(links[animals]);
  html +=`<a href="${links[animals]}">${animals}</a>`;

}
