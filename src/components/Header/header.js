import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { Container, Navbar, Logo_figure, Search, Grid_menu } from "./styles";
import { MdShoppingCart } from "react-icons/md";

export default function Header() {
  return (
    <Container>
      <Grid_menu>
        <Logo_figure>
          <Link to="/">
            <img src={logo} alt="Donna Florida" />
          </Link>
        </Logo_figure>

        <Search>
          <input placeholder="Digite o produto"></input>
          <button>Pesquise</button>
          {/* <input type="text" placeholder="Digite a cidade">
            <button><img src="/assets/search.svg" alt="Buscar"></button>
          </input> */}
        </Search>

        <Navbar>
          <ul>
            <li>
              <Link to="/">Quem somos </Link>
            </li>
            <li>
              <Link to="/">Produtos </Link>
            </li>
            <li>
              <Link to="/cart">
                <div>
                  {/* <span>Meu carrinho</span> */}
                  <MdShoppingCart size={25} />
                </div>
              </Link>
            </li>
          </ul>
        </Navbar>
      </Grid_menu>
    </Container>
  );
}
