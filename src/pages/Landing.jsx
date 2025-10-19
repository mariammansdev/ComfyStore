import { FeaturedProducts, Hero } from "../components"
import { customFetch } from "../utils";

const url = '/products/?featured=true'

const featuredProductsQuery = {
  queryKey: ['featured-products'],
  queryFn: async () => {
    const res = await customFetch(url);
    return res.data.data;
  },
}
export const loader = (queryClient) => async () => {
  const products = await queryClient.ensureQueryData(featuredProductsQuery);

  return { products };
} 
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing