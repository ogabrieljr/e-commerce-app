export const addItemToCart = (items, itemToAdd) => {
  const existingItem = items.find(item => item.id === itemToAdd.id);
  if (existingItem) {
    return items.map(item => {
      if (item.id === itemToAdd.id) return { ...itemToAdd, quantity: item.quantity + 1 };
      else return item;
    });
  } else return [...items, { ...itemToAdd, quantity: 1 }];
};
