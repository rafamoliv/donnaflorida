import React, { useState, Profiler } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { Colors } from "../../themes";
/* import * as Styles from "./styles";*/
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BannerInitial, BodyPrincipal } from "./styles";
import banner from "../../assets/banners/banner-min.png";
import * as Styles from "./styles";
import { MdAddShoppingCart } from "react-icons/md";

export default function Landing() {
  const [products, setProducts] = useState([
    { id: 1, name: "Porta Oculos", image: { banner }, price: "150", amount: 2 },
    {
      id: 2,
      name: "Estojo",
      image:
        "url:(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FChuva-Silicone-Impermeavel-Sapato-Motoqueiro%2Fdp%2FB07VKPXB6G&psig=AOvVaw2wpIUsLPqtA_nbctYL8XSz&ust=1598920187944000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjdtYCYxOsCFQAAAAAdAAAAABAD)",
      price: "150",
      amount: 2,
    },
    { id: 3, name: "Estojo Novo", image: "../../../../assets/banners/banner-min.png", price: "150", amount: 2 },
    { id: 4, name: "Estojo Velho", image: "../../assets/banners/banner-min.png", price: "150", amount: 2 },
  ]);

  return (
    <>
      <Header />
      <BannerInitial>
        <img src={banner} alt="Donna Florida" />
      </BannerInitial>
      <BodyPrincipal>
        <h1>Conheça nossos produtos</h1>

        <Styles.ProductList>
          {products.map((product) => (
            <li key={product.id}>
              <figure>
                <img src={product.image} alt={product.name} />
              </figure>
              <strong>{product.name}</strong>

              <div>
                <span>{product.price}</span>

                <button>
                  <div>
                    <MdAddShoppingCart size={16} color="#FFF" />
                  </div>
                  <span>Adicionar ao carrinho</span>
                </button>

                {/* <button type="button" onClick={() => handleAddProduct(product.id)}>
                  {product.loading ? (
                    <Loader type="Oval" color="#FFF" height={16} width={24} />
                  ) : (
                    <div>
                      <MdAddShoppingCart size={16} color="#FFF" />
                      {amount[product.id] || 0}
                    </div>
                  )}

                  <span>ADD TO CART</span>
                </button> */}
              </div>
            </li>
          ))}
        </Styles.ProductList>
      </BodyPrincipal>
      {/* <Footer /> */}
    </>
  );
}

{
  /* <Styles.Title>Landing cor primaria: {Colors.primary}</Styles.Title> */
}
