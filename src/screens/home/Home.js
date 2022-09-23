import "./index.scss";
import Header from "../../components/header";
import SideNav from "../../components/sideNav";
import Category from "../../components/categories";
import Order from "../../components/order";
import axios from "axios";
import url from "../../config/url";
import Cart from "../../components/cartModal";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
function Home() {
  const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.login.user);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [currentProduct, setCurrentProduct] = useState({});
  const [currentCategory, setCurrentCategory] = useState({});

  useEffect(() => {
    getAllProducts();
    getAllCategories();
    console.log("reduxToken", token, user);
  }, [token, user]);

  useEffect(() => {
    if (currentCategory?.id) {
      getAllProductsByCategory();
    } else {
      getAllProducts();
    }
  }, [currentCategory]);

  const getAllProducts = async () => {
    await axios
      .get(url + `/api/products/organization/${user?.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("products====", res.data);
        setProducts(res.data);
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
    await axios
      .get(url + `/api/categories/organization/${user?.id}`)
      .then((res) => {
        console.log("cat", res.data);
        setCategories(res.data);
      });
  };

  return (
    <>
      <div className="Home">
        <Header
          Name={user?.username}
          setProducts={setProducts}
          getAllProducts={getAllProducts}
        />
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
      <ToastContainer />
    </>
  );
}

export default Home;
