// const products = [
//     {
//       name: "Cotton T-Shirt",
//       image: "images/tshirt.jpg",
//       description: "A comfortable and stylish cotton t-shirt.",
//       price: 19.99
//     },
//     {
//       name: "Denim Jeans",
//       image: "images/jeans.jpg",
//       description: "Classic denim jeans with a perfect fit.",
//       price: 39.99
//     },
//     {
//       name: "Silk Scarf",
//       image: "images/scarf.jpg",
//       description: "A luxurious silk scarf with beautiful patterns.",
//       price: 29.99
//     }
//   ];
  
//   const productCatalog = document.getElementById("productCatalog");
  
//   products.forEach(product => {
//     const card = document.createElement("div");
//     card.classList.add("productCard");
  
//     const image = document.createElement("img");
//     image.src = product.image;
//     image.alt = product.name;
//     card.appendChild(image);
  
//     const name = document.createElement("h2");
//     name.textContent = product.name;
//     card.appendChild(name);
  
//     const description = document.createElement("p");
//     description.textContent = product.description;
//     card.appendChild(description);
  
//     const price = document.createElement("p");
//     price.textContent = "$" + product.price.toFixed(2);
//     card.appendChild(price);
  
//     productCatalog.appendChild(card);
//   });
  