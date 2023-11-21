export const getCart = (key: string) => {
  const items = localStorage.getItem(key);
  if (items)
    return JSON.parse(items) as Array<{ count: number; id: number }> | null;
  return null;
};

export const addCart = (key: string, item: { count: number; id: number }) => {
  const cart = getCart(key);

  if (!cart) {
    return localStorage.setItem(key, JSON.stringify([item]));
  }
  const items = cart;

  const index = items.findIndex((i) => i.id === item.id);

  if (index !== -1) {
    const product = items[index];

    items[index] = { ...product, count: product.count + item.count };
  } else {
    items.push({
      count: item.count,
      id: item.id,
    });
  }

  return localStorage.setItem(key, JSON.stringify(items));
};

export const removeCart = (key: string, productId: number) => {
  const cart = getCart(key);

  if (!cart) {
    throw new Error('Id is invalid');
  }

  let items = cart;

  const index = items.findIndex((i) => i.id === productId);

  if (index !== -1) {
    const product = items[index];

    if (product.count === 1) {
      items = items.filter((i) => i.id !== productId);
      return localStorage.setItem(key, JSON.stringify(items));
    }

    items[index] = { ...product, count: product.count - 1 };
  }

  return localStorage.setItem(key, JSON.stringify(items));
};

export const deleteItem = (key: string, productId: number) => {
  const cart = getCart(key);

  if (!cart) {
    throw new Error('Id is invalid');
  }

  let items = cart;

  items = items.filter((i) => i.id !== productId);

  return localStorage.setItem(key, JSON.stringify(items));
};
