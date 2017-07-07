

var shoppingList = [
  {
    name: "Milk",
    price: 4.25
  },
  {
    name: "Eggs",
    price: 2.15
  },
  {
    name: "Captain Crunch",
    price: 5.25
  },
  {
    name: "Bananas",
    price: 2.25
  },
  {
    name: "Chicken breast",
    price: 4.55
  }
]

var arrayLength = shoppingList.length;

var item = shoppingList;

var total = 0

var tax = 1.06;

for (a = 0; a < shoppingList.length; a++) {
  item = shoppingList[a];
  console.log( item.name + ' : $' + item.price);
}



for (a = 0; a < shoppingList.length; a++) {
total = (shoppingList[a].price + total);
}  console.log('Total : $' + total.toFixed(3) * 1.06);
