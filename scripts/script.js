// ----------------------------------------
// Product Data
// ----------------------------------------

const productData = {
  name: "Fall Limited Edition Sneakers",
  currentPrice: 125.0,
  originalPrice: 250.0,
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  photos: [
    {
      originalURL: "images/image-product-1.jpg",
      thumbnailURL: "images/image-product-1-thumbnail.jpg",
      alt: "Product photo #1",
    },
    {
      originalURL: "images/image-product-2.jpg",
      thumbnailURL: "images/image-product-2-thumbnail.jpg",
      alt: "Product photo #2",
    },
    {
      originalURL: "images/image-product-3.jpg",
      thumbnailURL: "images/image-product-3-thumbnail.jpg",
      alt: "Product photo #3",
    },
    {
      originalURL: "images/image-product-4.jpg",
      thumbnailURL: "images/image-product-4-thumbnail.jpg",
      alt: "Product photo #4",
    },
  ],
};

// ----------------------------------------
// HTML elements to save
// ----------------------------------------

const header = document.querySelector("header");

const navMenuToggle = document.querySelector('[aria-controls="primary-nav"]');
const cartToggle = document.querySelector('[aria-controls="cart"]');

const lightboxDialog = document.querySelector("dialog.lightbox");

const scrollGalleries = document.getElementsByClassName("photos-list");

const galleryThumbnails = document.getElementsByClassName("gallery-thumbnail");
const carouselThumbnails =
  document.getElementsByClassName("carousel-thumbnail");
const lightboxThumbnails =
  document.getElementsByClassName("lightbox-thumbnail");

const addToCartForm = document.getElementById("add-to-cart-form");
const quantityInput = document.getElementById("quantity");
const quantityDecrementButton = document.getElementById("quantity-decrement");
const quantityIncrementButton = document.getElementById("quantity-increment");

// ----------------------------------------
// Photo Gallery (Carousel + Lightbox)
// ----------------------------------------

//import { Carousel } from "/scripts/carousel.js";
import { Gallery } from "./gallery.js";

// Create the two main photo galleries:
//  - the Carousel & the Lightbox

let carousel = Gallery({
  gallerySelector: "#carousel-photos-list",
  slideSelector: ".slide",
});

let lightbox = Gallery({
  gallerySelector: "#lightbox-photos-list",
  slideSelector: ".slide",
});

// ----------------------------------------
// Product Photos
// ----------------------------------------

const updateSelectedThumbnail = (gallery, thumbnails) => {
  // Remove any existing "selected" classes
  Array.from(thumbnails).forEach((e) => {
    e.classList.remove("selected");
  });
  // Add the "selected" class to selected thumbnail
  thumbnails[gallery.getActiveSlideIndex()].classList.add("selected");
};

// ----------------------------------------
// Event Listener Functions
// ----------------------------------------

const handleWindowScroll = (e) => {
  if (window.scrollY > 0) {
    if (!header.classList.contains("shadow")) header.classList.add("shadow");
  } else {
    if (header.classList.contains("shadow")) header.classList.remove("shadow");
  }
};

const handleMobileNavClick = (e) => {
  e.preventDefault();
  if (navMenuToggle.getAttribute("aria-expanded") === "true") {
    navMenuToggle.setAttribute("aria-expanded", false);
  } else {
    navMenuToggle.setAttribute("aria-expanded", true);
  }
};

const handleCartClick = (e) => {
  e.preventDefault();
  if (cartToggle.getAttribute("aria-expanded") === "true") {
    cartToggle.setAttribute("aria-expanded", false);
  } else {
    cartToggle.setAttribute("aria-expanded", true);
  }
};

const handlePhotoControlClick = (e) => {
  e.preventDefault();

  if (
    e.target.id === "carousel-control-prev" ||
    e.target.id === "lightbox-control-prev"
  ) {
    carousel.moveToPreviousSlide();
    lightbox.moveToPreviousSlide();
    return;
  }

  if (
    e.target.id === "carousel-control-next" ||
    e.target.id === "lightbox-control-next"
  ) {
    carousel.moveToNextSlide();
    lightbox.moveToNextSlide();
    return;
  }
};

var carouselTimer, lightboxTimer;

const handleGalleryScroll = (e) => {
  if (carouselTimer !== null) clearTimeout(carouselTimer);
  if (lightboxTimer !== null) clearTimeout(lightboxTimer);

  if (e.target.id === "carousel-photos-list") {
    carouselTimer = setTimeout(function () {
      carousel.onScrollStop(() => {
        carousel.updateActiveSlide();
        updateSelectedThumbnail(carousel, carouselThumbnails);
        lightbox.moveToSlide(carousel.getActiveSlideIndex());
      });
    }, 1000);
  } else {
    lightboxTimer = setTimeout(function () {
      lightbox.onScrollStop(() => {
        lightbox.updateActiveSlide();
        updateSelectedThumbnail(lightbox, lightboxThumbnails);
        carousel.moveToSlide(lightbox.getActiveSlideIndex());
      });
    }, 1000);
  }
};

const handleGalleryThumbnailClick = (e) => {
  e.preventDefault();
  carousel.moveToSlide(Number(e.target.dataset.photoIndex));
  lightbox.moveToSlide(Number(e.target.dataset.photoIndex));
};

const handleCarouselPhotoClick = (e) => {
  e.preventDefault();

  // open the lightbox dialog
  lightboxDialog.showModal();

  // move the lightbox dialog to the photo that was clicked
  // ?
};

// ----------------------------------------
// Add to Cart Form
// ----------------------------------------

// Input error messages for this specific form
const errorMessages = {
  quantity: {
    valueMissing: "This field is required",
    rangeUnderflow: "Must be at least 1",
  },
};

const resetForm = (form) => {
  // Call built-in reset function
  form.reset();

  // Reset error messages
  clearFormErrors(form);

  // Blur the focus?
  form.blur();
};

const clearFormErrors = (form) => {
  // Remove error states from all inputs
  Array.from(form.elements)
    .filter((input) => input.name !== "")
    .forEach((input) => {
      clearInputError(input);
    });
};

// For individual input elements

const renderInputError = (input, messages) => {
  // Add "error" class to the input element itself
  input.classList.add("input-error");

  // Find the appropriate error message
  var errorMessage = "Error";
  if (input.validity["valueMissing"]) {
    errorMessage = messages["valueMissing"];
  }
  if (input.validity["rangeUnderflow"]) {
    errorMessage = messages["rangeUnderflow"];
  }

  // Find the error element associated with this input element
  const errorElement = document.getElementById(`${input.name}-error`);
  if (errorElement) {
    // Set error element's text content to be the error message
    errorElement.textContent = errorMessage;
    // Unhide the error element
    errorElement.classList.remove("hidden");
  }
};

const clearInputError = (input) => {
  // Remove error class from the input element itself
  input.classList.remove("input-error");
  // Hide the error message element
  const errorElement = document.getElementById(`${input.name}-error`);
  if (errorElement) {
    errorElement.classList.add("hidden");
    errorElement.textContent = "";
  }
};

const renderFormErrors = (form, messages) => {
  // Check each input and show errors as needed
  // Loop through each of the inputs and check for validity
  Array.from(form.elements)
    .filter((input) => input.name !== "")
    .forEach((input) => {
      input.checkValidity()
        ? clearInputError(input)
        : renderInputError(input, messages[input.name]);
    });
};

const renderFormSuccess = (form) => {
  // Render the success state
  console.log("Success! Quantity added:", Number(quantityInput.value));
  addItemToCart(productData, Number(quantityInput.value));

  // Reset the form
  resetForm(form);
};

const handleAddToCartSubmit = (e) => {
  e.preventDefault();
  e.target.checkValidity()
    ? renderFormSuccess(e.target)
    : renderFormErrors(e.target, errorMessages);
};

const handleQuantityAdjustClick = (e) => {
  e.preventDefault();

  var currentValue = parseInt(quantityInput.value, 10);
  currentValue = isNaN(currentValue) ? 0 : currentValue;

  if (e.target.id === "quantity-increment") {
    currentValue++;
  }
  if (e.target.id === "quantity-decrement") {
    // Check if currentValue is < 1, and then prevent any further decrement (and trigger an error?)
    if (currentValue > 0) {
      currentValue--;
    }
  }
  quantityInput.value = currentValue;
};

// ----------------------------------------
// Cart HTML Rendering
// ----------------------------------------

const numItemsInCart = document.getElementById("items-in-cart");
const cartContent = document.getElementById("cart-content");

const renderNumItemsInCart = (element, numItems) => {
  if (numItems === 0) {
    element.classList.add("hidden");
  } else {
    element.classList.remove("hidden");
  }
  element.textContent = numItems;
};

const renderCartItemHTML = (itemData, cartContainer) => {
  // Calculate the total item price = quantity x unit price
  const totalPrice = itemData.item.currentPrice * itemData.quantity;

  // Format the price above to USD using the locale, style, and currency.
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const starterHTML = `
  <li class="cart-item">
    <img src="${itemData.item.photos[0].thumbnailURL}" alt="${
    itemData.item.photos[0].alt
  } thumbnail" class="cart-item__thumbnail">
    <div class="cart-item__text">
      <span class="cart-item__name">${itemData.item.name}</span>
      <span class="cart-item__unit-price">${USDollar.format(
        itemData.item.currentPrice
      )}</span> x <span class="cart-item__quantity">${itemData.quantity}</span>
      <span class="cart-item__total-price">${USDollar.format(totalPrice)}</span>
    </div>
    <button class="cart-item__remove-btn" data-id="${itemData.itemId}">
      <span class="visually-hidden">Remove item from cart</span>
      <svg viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill-rule="nonzero" xlink:href="#a"/></svg>
    </button>
  </li>`;
  cartContainer.insertAdjacentHTML("beforeend", starterHTML);
};

const handleRemoveCartItem = (e) => {
  e.preventDefault();
  console.log("remove button clicked:", e.target.dataset.id);
  removeItemFromCart(Number(e.target.dataset.id));
};

const renderCartCheckoutButtonHTML = (cartContainer) => {
  const newCartCheckoutButton = document.createElement("button");
  newCartCheckoutButton.classList.add("cart-btn");
  newCartCheckoutButton.textContent = "Checkout";
  cartContainer.appendChild(newCartCheckoutButton);

  newCartCheckoutButton.addEventListener("click", clearCart);
};

const renderCartHTML = (cartData, cartContainer, cartNumItemsElement) => {
  console.log("Rendering cart HTML");

  cartContainer.innerHTML = "";

  const newCartList = document.createElement("ul");
  newCartList.classList.add("cart-items");
  cartContainer.appendChild(newCartList);

  // Render each item currently in the cart
  cartData.forEach((item) => {
    renderCartItemHTML(item, newCartList);
  });

  // Add event listeners to the remove buttons
  cartContainer.querySelectorAll(".cart-item__remove-btn").forEach((button) => {
    button.addEventListener("click", handleRemoveCartItem);
  });

  renderCartCheckoutButtonHTML(cartContainer);

  // Render the current total number of items in the cart
  renderNumItemsInCart(
    cartNumItemsElement,
    cartData.reduce((total, { quantity }) => total + quantity, 0)
  );
};

const renderEmptyCartHTML = (container) => {
  container.innerHTML = "";
  const starterHTML = `<p class="cart-empty">Your cart is empty.</p>`;
  container.insertAdjacentHTML("afterbegin", starterHTML);

  renderNumItemsInCart(numItemsInCart, 0);
};

// ----------------------------------------
// Cart (local storage)
// ----------------------------------------

const storageKey = "sneakers-cart";
var storedCart = null;

/*var cartItem1 = {
  quantity: 2,
  item: productData,
};
var cartItems = { cartItem1, cartItem1 };
var cartItemsStringified = JSON.stringify(cartItems);
console.log(cartItems);
console.log(cartItemsStringified);*/

const isLocalStoragePermitted = () => {
  return "localStorage" in window && window["localStorage"] !== null;
};

const getCartLocalStorage = (storageKey) => {
  return JSON.parse(localStorage.getItem(storageKey));
};

const setCartLocalStorage = (cart, storageKey) => {
  localStorage.setItem(storageKey, JSON.stringify(cart));
};

const initializeCart = () => {
  // Check if local storage is permitted
  if (!isLocalStoragePermitted()) {
    console.error(
      "Cannot save shopping list as your browser does not support HTML 5"
    );
    return;
  }

  // Local storage is okay to use, so first see
  // if an existing cart is stored in local storage
  storedCart = getCartLocalStorage(storageKey);

  // If not available then set to an empty array
  if (!storedCart) storedCart = [];
};

const clearCart = () => {
  console.log("Clearing cart");
  storedCart = [];
  updateCart();
};

const updateCart = () => {
  if (!storedCart) initializeCart();

  if (storedCart.length === 0) {
    // Set the cart dialog to be empty
    console.log("Cart is empty");
    renderEmptyCartHTML(cartContent);
    localStorage.removeItem(storageKey);
  } else {
    console.log("Cart is currently:");
    console.log(storedCart);
    // Update the cart dialog HTML with the lastest info
    renderCartHTML(storedCart, cartContent, numItemsInCart);
    // Save the latest cart data to local storage
    setCartLocalStorage(storedCart, storageKey);
  }
};

const addItemToCart = (item, quantity) => {
  console.log("adding an item to the cart");
  // Check if item is already in the cart
  // If yes, then add the quantity only

  // Provide a new unique Id number for the new item
  const newId =
    storedCart.length > 0
      ? 1 +
        storedCart.reduce(
          (max, { itemId }) => (max && max > itemId ? max : itemId),
          0
        )
      : 0;

  // If no, then append the whole item to the existing cart
  storedCart.push({
    itemId: newId,
    item: item,
    quantity: quantity,
  });

  updateCart();
};

const removeItemFromCart = (itemId) => {
  const itemIndex = storedCart.findIndex((item) => item.itemId === itemId);
  console.log("Deleting item from cart with index:", itemIndex);

  // Delete the object if it's found
  if (itemIndex !== -1) {
    storedCart.splice(itemIndex, 1);
  }

  updateCart();
};

// To reset (clear) ALL of the local storage;
// not just contents set by this website
// localStorage.clear();

window.load = updateCart();

// ----------------------------------------
// Main program
// ----------------------------------------

document.addEventListener("scroll", handleWindowScroll);
navMenuToggle.addEventListener("click", handleMobileNavClick);
cartToggle.addEventListener("click", handleCartClick);

document.querySelectorAll(".photo-control-btn").forEach((controlButton) => {
  controlButton.addEventListener("click", handlePhotoControlClick);
});

updateSelectedThumbnail(carousel, carouselThumbnails);
updateSelectedThumbnail(lightbox, lightboxThumbnails);

// Synchronize the scrolling gallery containers
/* const divs = document.querySelectorAll(".photos-list");
divs.forEach((div) =>
  div.addEventListener("scroll", (e) => {
    divs.forEach((d) => {
      d.scrollLeft = div.scrollLeft;
    });
  })
); */

carousel.onScrollStop(() => {
  carousel.container.addEventListener("scroll", handleGalleryScroll);
  updateSelectedThumbnail(carousel, carouselThumbnails);
});
lightbox.onScrollStop(() => {
  lightbox.container.addEventListener("scroll", handleGalleryScroll);
  updateSelectedThumbnail(lightbox, lightboxThumbnails);
});

Array.from(galleryThumbnails).forEach((e) => {
  e.addEventListener("click", handleGalleryThumbnailClick);
});

// Add event listeners to each of the carousel photo buttons
document.querySelectorAll(".slide > button").forEach((photoButton) => {
  photoButton.addEventListener("click", handleCarouselPhotoClick);
});

// Cart event listeners

addToCartForm.addEventListener("submit", handleAddToCartSubmit);
quantityDecrementButton.addEventListener("click", handleQuantityAdjustClick);
quantityIncrementButton.addEventListener("click", handleQuantityAdjustClick);

// ----------------------------------------
// End
// ----------------------------------------
