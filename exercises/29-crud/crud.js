!(async function () {
  /**
   * You will be using the Dummy Product API. You can find the documentation here:
   * @see https://dummyjson.com/docs/products
   *
   * You will be building a Create Update Read Delete (CRUD) application.
   * You will need to make three AJAX requests using the Dummy Product API.
   *
   * 1. Make an AJAX request to get a list of products.
   *    Display the list of products in the table below.
   *    See the sample table row HTML below.
   *    Each row must have a "Delete" button.
   *
   * 2. When the user clicks on a "Delete" button,
   *    it should make an AJAX request to delete the product.
   *
   * 3. When the user fills out and submits the "Add Product" form,
   *    send an AJAX request to add the new product.
   *
   * You can use Axios if you like to solve this problem. (You will need to get the library from a CDN.)
   * You can choose to use promise or async and await.
   *
   * HINT: You might want to embed the product ID somewhere in the HTML
   * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
   *
   * Sample table row HTML:
   * @example
   * <tr>
   *   <td>1</td>
   *   <td>iPhone 9</td>
   *   <td>An apple mobile which is nothing like apple</td>
   *   <td>$549.00</td>
   *   <td>12.96</td>
   *   <td>4.69</td>
   *   <td>94</td>
   *   <td>Apple</td>
   *   <td>smartphones</td>
   *   <td>
   *     <button class="btn btn-danger btn-sm delete-product-btn">Delete</button>
   *   </td>
   * </tr>
   */

  const products = [{
    
  }]

    //const products = document.querySelector()
    //let items = 
    /*try {
      const productData = await*/


      const productListings = document.querySelector("#productTableBody");
      //console.log(productTableBody);

    let productList;  
    axios ({
      method: "GET",
      url: "https://dummyjson.com/docs/products",
    })
      .then((response) => {
        products = response.data.results;
        products.data.forEach((product) => {
          const input = document.createElement("#productTableBody");
          option.value = product.id;
          
        });


      }
      
      function grabProductListings () {
        
        while (productTableBody.firstChild) {
          productTableBody.removeChild(productTableBody.firstChild);

        }
      



      //add products to the table - array

      dummyjson.forEach((row) => {
        //console.log(row)
          const tr = document.createElement("tr");

          row.forEach((cell) => {
            //console.log(cell);
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
            //console.log(cell);
          });

          productTableBody.appendChild(tr);
          productList.add('btn', 'btn-danger', 'btn-sm', 'delete-product-btn');
      });
    }


}



document.addEventListener("", () => {
  productListings(); 
});





      /*fetch ("https://dummyjson.com/docs/products")*/
      /*returns a promise*/
       /* .then ((response) => {

          if(!response.ok) {
            alert (`An error has occured: ${response.status}`);
          }
        
          return response.text();
        })

        .then((text) => productDisplayInfo.textContent = text)

        .catch((error) => productDisplayInfo.textContent = (`another error has occured: ${error}`);*/

      /*data.data.forEach((productId) => {
        display
      }*/
      //updating the product info to row
      /*function productAddRow () {
          if ($("#productTableBody").length == 0) {
            $("#productTable").append("<tbody></tbody");
          }

          $("#productTableBody tbody").append("<tr> +
              "<td>" + $("#"))
      }*/



      const addRows = (products) => {
        // Target the table
        const tbody = document.querySelector("#productTableBody");
        products.forEach((product) => {
          //console.log(products);
          let row = `<tr>
          <td>${product.id}</td>
          <td>${product.title}</td>
          <td>${product.description}</td>
          <td>${product.price}</td>
          <td>${product.discountPercentage}</td>
          <td>${product.rating}</td>
          <td>${product.stock}</td>
          <td>${product.brand}</td>
          <td>${product.category}</td>
          <td>
            <button class="btn btn-danger btn-sm delete-product-btn">Delete</button>
          </td>
        </tr>`;
          // Add the HTML to the page
          tbody.insertAdjacentHTML("beforeend", row);
        });
      };
      // Make the request to get the data
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          // Drill down in the result and find the product array of objects
          const products = data.products;
          // Call on "addRows" to display the table
          addRows(products);
          const buttons = document.querySelectorAll(".delete-product-btn");
          // Loops through each button and attach an event
          buttons.forEach((button) => {
            button.addEventListener("click", () => {
              alert("you clicked me!");
            });
          });
        });
          const deleteButtons = document.querySelectorAll(".delete-product-btn");

          deleteButtons.forEach((productId) => {
            productID.addEventListener("click", () => {
              Message.textContent = `Thank you for purchasing the ${product.title} product.`;

      


  
})();
