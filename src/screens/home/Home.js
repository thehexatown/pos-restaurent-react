import "./index.scss";
import Header from "../../components/header";
import SideNav from "../../components/sideNav";
import Category from "../../components/categories";
import Order from "../../components/order";
import axios from "axios";
import url from "../../config/url";
import Cart from "../../components/cartModal";
import { useEffect, useState } from "react";
function Home() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [currentProduct, setCurrentProduct] = useState({});
  const [currentCategory, setCurrentCategory] = useState({});

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  useEffect(() => {
    if (currentCategory?.id) {
      getAllProductsByCategory();
    } else {
      getAllProducts();
    }
  }, [currentCategory]);

  const getAllProducts = async () => {
    await axios.get(url + "/api/products?populate=*").then((res) => {
      setProducts(res.data.data);
    });
  };
  const getAllProductsByCategory = async () => {
    await axios
      .get(url + `/api/products/category/${currentCategory?.id}`)
      .then((res) => {
        setProducts(res.data.products);
      });
  };
  const getAllCategories = async () => {
    await axios.get(url + "/api/categoties").then((res) => {
      setCategories(res.data.data);
    });
  };

  return (
    <>
      <div className="Home">
        <Header setProducts={setProducts} />
        <div className="HomeBody">
          <SideNav
            currentCategory={currentCategory}
            categories={categories}
            setCurrentCategory={setCurrentCategory}
          />
          <Category
            setCurrentProduct={setCurrentProduct}
            openModal={setModalVisibility}
            currentCategory={currentCategory}
            categories={categories}
            products={products}
            setCurrentCategory={setCurrentCategory}
          />
          <Order />
        </div>
        {modalVisibility && (
          <div className="CartModal">
            <Cart
              product={currentProduct}
              modalVisibility={setModalVisibility}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
