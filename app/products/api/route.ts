export async function POST(request: Request) {
  const items = (await request.json()) as Array<{ id: number; count: number }>;
  const { products } = await (
    await fetch(
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC'
    )
  ).json();
  let total = 0;
  const response = items.map((item) => {
    const product = products.find((i) => i.id === item.id);
    if (product) {
      total += product.price * item.count;
      return {
        ...product,
        count: item.count,
        amount: product.price * item.count,
        total,
      };
    }
  });
  return Response.json({ cart_items: response, total, count: response.length });
}
