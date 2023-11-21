export interface QueryProduct {
  page: number;
  rows: number;
  sortBy: 'id' | 'name' | 'price';
  orderBy: 'ASC' | 'DESC';
}

export const getProducts = async (body: QueryProduct) => {
  try {
    const params = new URLSearchParams(body);

    return await (
      await fetch(
        `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?${params}`,
        {
          method: 'GET',
          cache: 'force-cache',
        }
      )
    ).json();
  } catch (error) {
    console.error('mks client error => getProducts', error);
  }
};
