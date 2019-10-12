/*
items:[]
itemtoadd: {}
*/

export const addItemToCart = (items, itemToAdd) => {
  //...code
  return [...items, { ...itemToAdd, quantity: 1 }];
};
