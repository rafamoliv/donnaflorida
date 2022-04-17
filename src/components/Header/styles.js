import styled from "styled-components";
import Colors from "../../themes/colors";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 6.5rem;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(0.8rem);
  z-index: 1;
`;

export const Grid_menu = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Logo_figure = styled.a`
  grid-column: span 3 / span 3;

  img {
    width: 166.8px;
    height: 121.2px;
    margin: 0 10px;
  }
`;

export const Search = styled.div`
  grid-column: span 3 / span 3;

  input,
  button {
    float: right;
  }
`;

export const Navbar = styled.nav`
  grid-column: span 6 / span 6;

  ul {
    float: right;
  }

  ul li {
    float: left;
    margin: 0 10px;
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
  }

  ul li a {
    color: ${Colors.primary};
  }

  ul li a:hover {
    color: ${Colors.five};
  }

  /*  ul li a:hover::after {
    content: "";
    display: inline-block;
    border-top: solid 1px ${Colors.primary};
    height: 1px;
  } */
`;
