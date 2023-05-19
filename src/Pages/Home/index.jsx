import { Card } from "../../Components/Card/index.jsx";
import { Layout } from "../../Components/Layout/index.jsx";
import { ProductDetail } from "../../Components/ProductDetail/index.jsx";
import { useAppContext } from "../../Context/ContextAppProvider.jsx";

function Home() {
  const {products, showDetail} = useAppContext()
  console.log(products);
  return (
    <Layout>
      <div className="text-3xl font-bold grid grid-cols-4 gap-6 w-full max-w-screen-lg" >
      {products?.map((product) => {
        const { category, title, price, images } = product;
        return (
            <Card
              category={category.name}
              title={title}
              price={price}
              image={images[0]}
              key={product.id}
            />
        );
      })}
      </div>
      {showDetail && <ProductDetail />}
    </Layout>
  );
}

export { Home };
