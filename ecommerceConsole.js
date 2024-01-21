const collections = [
  { id: 1, name: 'face wash', price: 20},
  { id: 2, name: 'face cream', price: 30},
  { id: 3, name: 'sunscreen', price: 50},
  { id: 4, name: 'body lotion', price: 100},
  { id: 5, name: 'body wash', price: 100},
];

const cart = [];

function firstMessage() {
  console.log('Welcome to the best skincare store');
}

function displayItems() {
  console.log('Our Collections');

  let i = 0;
  while (i < collections.length) {
      console.log(`${collections[i].id}. ${collections[i].name} - $${collections[i].price}`);
      i++;
  }
}

function selectItems() {
  const selected = Number(prompt('enter ID to add to cart or 0 to checkout'));
  if (selected === 0){
    displaySelected();
    if (cart.length === 0) {
      console.log('Empty cart.')
      const action = prompt('press q to quit shopping or c to view collections again');
      if (action === 'q') {
        console.log('Thanks for checking us out!');
      } else if (action === 'c') {
        startShopping();
      }
    } 
    else {
    // proceeds to payment or just close it
    const action = prompt('Would you like to proceed to payment? (yes/no)').toLowerCase();
    
    if (action === 'yes') {
      console.log('Proceeding to payment... Thank you for shopping!');
      // navigate to payment page
    } else {
      console.log('Your items are saved in cart!');
    }
  }

  } else {
    addToCart(selected);
    startShopping();
  }
}

function displaySelected() {
  console.log('Your Collections');

  for (let i = 0; i < cart.length; i++) {
    console.log(`${cart[i].name} - $${cart[i].price}`);
  }
  console.log(`Total: $${calculateTotal()}`)
}

function calculateTotal() {
  let total = 0;

  cart.forEach(item => {
    total += item.price;
  });

  return total;
}

function addToCart(selected) {
let selectedItem;
for (let i = 0; i < collections.length; i++) {
  if (collections[i].id === selected) {
    selectedItem = collections[i];
    break;
  }
  }

  if (selectedItem) {
    const itemCopy = Object.assign({}, selectedItem);
    cart.push(itemCopy);

    console.log(`${selectedItem.name} added to cart.`);
  } else {
    console.log('Item not in our collections')
  }
}

function startShopping() {
  firstMessage();
  displayItems();
  selectItems();
}

startShopping();
