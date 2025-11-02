import { Filters } from "../components";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils"
const url = '/products';

const fetchProducts = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;
  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch(url, { params: queryParams })
  }
}



export const loader = (queryClient) => async ({ request }) => {
  debugger
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  const res = await queryClient.ensureQueryData(fetchProducts(params));
  const products = res.data.data;
  const meta = res.data.meta;
  return { products, meta, params };
}
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
    </>
  )
}

export default Products