export interface QueryProduct {
  page: number;
  rows: number;
  sortBy: 'id' | 'name' | 'price';
  orderBy: 'ASC' | 'DESC';
}

export const getProducts = async (body: QueryProduct) => {
  try {
    /* eslint-disable-next-line */
    const params = new URLSearchParams(body as any);

    return await (
      await fetch(
        `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?${params}`,
        {
          // method: 'GET',
          // cache: 'force-cache',
        }
      )
    ).json();
  } catch (error) {
    console.error('mks client error => getProducts', error);
  }
};

export const cartTotal = async (body: Array<{ id: number; count: number }>) => {
  try {
    return await (
      await fetch(`/products/api`, {
        method: 'POST',
        cache: 'force-cache',
        body: JSON.stringify(body),
      })
    ).json();
  } catch (error) {
    console.error('mks client error => cartTotal', error);
  }
};
