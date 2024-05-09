// function AddCart(){
//     document.querySelector('.trycl').addEventListener('click', ()=>{
//         document.querySelector('.carts').innerHTML = `
//             <div class="cart-card-list">
//                 <div class="cart-card">
//                     <img src="/Project/FrontEnd/src/css/img/appetizer.png" alt="food image">
//                     <div class="ord-dit">
//                         <h1>appetizer</h1>
//                         <p>price: 20$</p>
//                     </div>
//                 </div>
//             </div>
//         `
//     })

// }

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItemCount = document.querySelector(".cart-icons span");
  const cartItemsList = document.querySelector(".cart-items");
  const cartTotal = document.querySelector(".cart-total");
  const cartIcon = document.querySelector(".cart-icons");
  const sidebar = document.getElementById("sidebar");

  let cartItems = [];
  let totalAmount = 0;

  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const itemNameElement =
        document.querySelectorAll(".card .card--title")[index];
      const itemName = itemNameElement
        ? itemNameElement.textContent.trim()
        : null;

      if (!itemName) {
        console.error("Item name not found!");
        return; // Exit function if item name is not found
      }

      const item = {
        name: itemName,
        price: parseFloat(
          document.querySelectorAll(".price")[index].textContent.slice(1)
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

    cartItemsList.innerHTML = "";

    cartItems.forEach((item, index) => {
      const cartItem = document.createElement(`div`);
      cartItem.classList.add("cart-item", "individual-cart-item");
      cartItem.innerHTML = `
          <span> (${item.quantity}x)${item.name} </span>
          <span class="cart-item-price"> $${(
            item.price * item.quantity
          ).toFixed(2)} 
          <button class="remove-btn" data-index="${index}"><i class="fa-solid fa-times"></i></button>
          </span>
        `;
      cartItemsList.appendChild(cartItem);

      const removeButtons = cartItem.querySelectorAll(".remove-btn");
      removeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          const index = event.target.dataset.index;
          removeItemFromCart(index);
        });
      });
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

  cartIcon.addEventListener("click", () => {
    if (sidebar) {
      sidebar.classList.toggle("open");
    }
  });

  const closeButton = document.querySelector(".sidebar-close");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  }
});

export default AddCart;
