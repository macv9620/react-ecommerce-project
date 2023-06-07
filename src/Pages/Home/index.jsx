import { useEffect } from "react";
import { Card } from "../../Components/Card/index.jsx";
import { Layout } from "../../Components/Layout/index.jsx";
import NoMatches from "../../Components/NoMatches/NoMatches.jsx";
import { ProductDetail } from "../../Components/ProductDetail/index.jsx";
import { useAppContext } from "../../Context/ContextAppProvider.jsx";
import { useParams } from "react-router-dom";
import { ErrorPage } from "../../Components/ErrorPage/ErrorPage.jsx";

function Home() {
  const {
    products,
    showDetail,
    searchInput,
    setSearchInput,
    renderErrorPage,
  } = useAppContext();

  const { category, searchText } = useParams();

  useEffect(() => {
    if (searchText) {
      setSearchInput(searchText);
    }
  }, [searchText]);

  const filterProducts = () => {
    if (!category) {
      const productsFilteredBySearch = products?.filter((product) =>
        product.product_name.toLowerCase().includes(searchInput.toLowerCase())
      );
      return productsFilteredBySearch;
    } else {
      const productsFilteredBySearch = products?.filter((product) =>
        product.product_name.toLowerCase().includes(searchInput.toLowerCase())
      );

      let productsFilteredBySearchByCategory;

      if (category !== "Others") {
        productsFilteredBySearchByCategory = productsFilteredBySearch.filter(
          (product) =>
            product.category.toLowerCase() === category.toLocaleLowerCase()
        );
      } else if (category === "Others") {
        const mainCategories = [
          "Computers",
          "Electronics",
          "Grocery",
          "Toys",
          "Shoes",
        ];

        productsFilteredBySearchByCategory = productsFilteredBySearch.filter(
          (product) => {
            const isInMainCategories = mainCategories.find(
              (category) => product.category === category
            );
            if (!isInMainCategories) {
              return true;
            } else {
              return false;
            }
          }
        );
      }

      return productsFilteredBySearchByCategory;
    }
  };

  const filteredProducts = filterProducts();
  const searchTag = `Results for search: '${searchText}'`;

  const homePageTitle = () => {
    if (!category) {
      if (searchText) {
        return searchTag;
      }
      return "All Products";
    } else {
      return category;
    }
  };

  const isThereMatch = () => {
    if (filteredProducts?.length === 0) {
      return false;
    }
    if (filteredProducts?.length !== 0) {
      return true;
    }
  };

  return (
    <Layout>
      {renderErrorPage && <ErrorPage />}
      {!renderErrorPage && (
        <>
        <div className="flex items-center justify-center relative w-80 h-10">
        <h1 className="font-medium text-xl">{homePageTitle()}</h1>
      </div>
      {!isThereMatch() && (
        <NoMatches message={"There is not Matches for your Search"} />
      )}
      <div className="text-3xl font-bold grid grid-cols-4 gap-6 w-full max-w-screen-lg">
        {filteredProducts?.map((product) => {
          const { category, product_name, price, image, id } = product;
          return (
            <Card
              product={product}
              category={category}
              product_name={product_name}
              price={price}
              image={image}
              key={id}
              id={id}
            />
          );
        })}
      </div>
      {showDetail && <ProductDetail />}
      </>
      )}
      
    </Layout>
  );
}

export { Home };
