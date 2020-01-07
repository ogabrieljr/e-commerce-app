export const addItemToCart = (items, itemToAdd) => {
  const existingItem = items.find(item => item.id === itemToAdd.id);
  if (existingItem) {
    return items.map(item =>
      item.id === itemToAdd.id ? { ...itemToAdd, quantity: item.quantity + 1 } : item
    );
  }
  return [...items, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (items, itemToRemove) => {
  const existingItem = items.find(item => item.id === itemToRemove.id);

  if (itemToRemove.quantity === 1) {
    return items.filter(item => item.id !== itemToRemove.id);
  }

  if (existingItem) {
    return items.map(item =>
      item.id === itemToRemove.id
        ? { ...itemToRemove, quantity: item.quantity - 1 }
        : item
    );
  }
};
