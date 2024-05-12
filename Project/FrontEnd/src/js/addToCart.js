// //add to cart js
// document.addEventListener("DOMContentLoaded", () => {
//   const addToCartButtons = document.querySelectorAll(".add-to-cart");
//   const cartItemCount = document.querySelector(".btn-one span");
//   const cartItemsList = document.getElementById("carts");
//   const cartTotal = document.querySelector(".ord-info form #price");

//   let cartItems = [];
//   let totalAmount = 0;

//   addToCartButtons.forEach((button, index) => {
//     button.addEventListener("click", () => {
//       const itemNameElement = document.querySelectorAll(
//         ".menu-card .item-name"
//       )[index];
//       const itemName = itemNameElement
//         ? itemNameElement.textContent.trim()
//         : null;

//       if (!itemName) {
//         console.error("Item name not found!");
//         return;
//       }

//       const item = {
//         name: itemName,
//         price: parseFloat(
//           document.querySelectorAll(".food-price")[index].textContent.slice(1)
//         ),
//         quantity: 1,
//       };

//       const existingItemIndex = cartItems.findIndex(
//         (cartItem) => cartItem.name === item.name
//       );

//       if (existingItemIndex !== -1) {
//         cartItems[existingItemIndex].quantity++;
//       } else {
//         cartItems.push(item);
//       }

//       totalAmount += item.price;

//       updateCartUI();
//     });
//   });

//   function updateCartUI() {
//     const cartItemLength = cartItems.reduce(
//       (total, currentItem) => total + currentItem.quantity,
//       0
//     );
//     updateCartItemsCount(cartItemLength);
//     updateCartItemList();
//     updateCartTotal();
//   }

//   function updateCartItemsCount(count) {
//     if (cartItemCount) {
//       cartItemCount.textContent = count;
//     }
//   }

//   function updateCartItemList() {
//     if (!cartItemsList) {
//       console.error("Cart items list not found!");
//       return; // Exit function if cart items list is not found
//     }

//     cartItemsList.innerHTML = ""; // Clear the existing cart items before updating

//     cartItems.forEach((item, index) => {
//       const cartItem = document.createElement("div"); // Create a new cart item container
//       cartItem.classList.add("cart-card"); // Add necessary classes

//       // Construct HTML for the cart item
//       cartItem.innerHTML = `
//             <img
//               src="${item.image}"
//               alt="${item.alt}"
//             />
//             <div class="ord-dit">
//               <h1>${item.name}</h1>
//               <p>
//                 <span class="cart-item-price"> $${(
//                   item.price * item.quantity
//                 ).toFixed(2)} <br /></span>
//                 <span>vat:</span> +$3<br />
//                 <span>Total: </span>$${item.price}
//               </p>
//             </div>
//             <div class="pl-btn">
//               <button class="remove-btn" data-index="${index}">-</button>
//               <p>${item.quantity}</p>
//               <button class="add-btn" data-index="${index}">+</button>
//             </div>
//         `;

//       cartItemsList.appendChild(cartItem); // Append the cart item to the list

//       const removeButton = cartItem.querySelector(".remove-btn");
//       removeButton.addEventListener("click", () => removeItemFromCart(index));
//     });
//   }

//   function removeItemFromCart(index) {
//     const removedItem = cartItems.splice(index, 1)[0];
//     totalAmount -= removedItem.price * removedItem.quantity;
//     updateCartUI();
//   }

//   function updateCartTotal() {
//     if (cartTotal) {
//       cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
//     }
//   }
// });

// {
//   /* <span> (${item.quantity}x)${item.name} </span>
//           <span class="cart-item-price"> $${(
//             item.price * item.quantity
//           ).toFixed(2)}
//           <button class="remove-btn" data-index="${index}"><i class="fa-solid fa-times"></i></button>
//           </span> */
// }

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItemCount = document.querySelector(".btn-one span");
  const cartItemsList = document.getElementById("carts"); // Add this line
  const cartTotal = document.querySelector(".ord-info form #price");

  let cartItems = [];
  let totalAmount = 0;

  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const itemNameElement = document.querySelectorAll(
        ".menu-card .item-name"
      )[index];
      const itemName = itemNameElement
        ? itemNameElement.textContent.trim()
        : null;

      if (!itemName) {
        console.error("Item name not found!");
        return;
      }

      const item = {
        name: itemName,
        price: parseFloat(
          document.querySelectorAll(".food-price")[index].textContent.slice(1)
        ),
        quantity: 1,
      };

      const existingItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItemIndex !== -1) {
        cartItems[existingItemIndex].quantity++;
      } else {
        cartItems.push(item);
      }

      totalAmount += item.price;

      updateCartUI();
    });
  });

  function updateCartUI() {
    const cartItemLength = cartItems.reduce(
      (total, currentItem) => total + currentItem.quantity,
      0
    );
    updateCartItemsCount(cartItemLength);
    updateCartItemList();
    updateCartTotal();
  }

  function updateCartItemsCount(count) {
    if (cartItemCount) {
      cartItemCount.textContent = count;
    }
  }

  function updateCartItemList() {
    if (!cartItemsList) {
      console.error("Cart items list not found!");
      return; // Exit function if cart items list is not found
    }

    cartItemsList.innerHTML = ""; // Clear the existing cart items before updating

    cartItems.forEach((item, index) => {
      const cartItem = document.createElement("div"); // Create a new cart item container
      cartItem.classList.add("cart-card"); // Add necessary classes

      // Construct HTML for the cart item
      cartItem.innerHTML = `
            <img
              src="${item.image}"
              alt="${item.alt}"
            />
            <div class="ord-dit">
              <h1>${item.name}</h1>
              <p>
                <span class="cart-item-price"> $${(
                  item.price * item.quantity
                ).toFixed(2)} <br /></span>
                <span>vat:</span> +$3<br />
                <span>Total: </span>$${item.price}
              </p>
            </div>
            <div class="pl-btn">
              <button class="remove-btn" data-index="${index}">-</button>
              <p>${item.quantity}</p>
              <button class="add-btn" data-index="${index}">+</button>
            </div>
        `;

      cartItemsList.appendChild(cartItem); // Append the cart item to the list

      const removeButton = cartItem.querySelector(".remove-btn");
      removeButton.addEventListener("click", () => removeItemFromCart(index));
    });
  }

  function removeItemFromCart(index) {
    const removedItem = cartItems.splice(index, 1)[0];
    totalAmount -= removedItem.price * removedItem.quantity;
    updateCartUI();
  }

  function updateCartTotal() {
    if (cartTotal) {
      cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
    }
  }
});
