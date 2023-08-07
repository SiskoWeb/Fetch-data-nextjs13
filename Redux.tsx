import ProductForm from "@/components/AdminDashboard/Product/ProductForm";
import Preloader from "@/components/Preloader";
import ProductService from "@/services/ProductApi";
import { setDetaileProduct } from "@/stores/productsSlice/ProductsSlice";
import { store } from "@/stores/store";

export default async function Edit({
  params: { id },
}: {
  params: { id: string };
}) {
  const products = await ProductService.findById(id);// fetch data
  store.dispatch(setDetaileProduct(products.data)); // pass it to redux to save it in state

  if (!products?.data)
    return <p className="no-result-text">Failed to fetch project info</p>;

  return (
    <>
      <Preloader product={products.data} /> // pass data to component to send it to redux state also cuz data wont pass in first time
      <ProductForm type="edit"  />
    </>
  );
}
