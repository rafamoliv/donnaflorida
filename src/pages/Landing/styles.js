import styled from "styled-components";
import { Colors } from "../../themes";

export const BannerInitial = styled.div`
  img {
    max-width: 100vw;
    max-height: 100vh;
  }
`;

export const BodyPrincipal = styled.div`
  max-width: 1200px;
  margin: auto;

  h1 {
    font-size: 1.75rem;
    color: ${Colors.primary};
    margin: 15px auto;
    position: relative;
    text-align: center;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style-type: none;
  margin: 0 15px;

  @media (max-width: 945px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
    padding: 25px;

    &:hover figure img {
      opacity: 0.9;
    }

    figure {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      max-height: 250px;
      padding-top: 91%;
      text-align: center;

      @media (max-width: 490px) {
        padding-top: 60%;
      }

      img,
      span {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        max-height: 100%;
        margin: auto;
        transition: opacity 150ms ease-in-out;
      }
    }

    > strong {
      color: ${Colors.primary};
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
      + div {
        display: flex;
        flex-direction: column;
        margin-top: auto;
        > span {
          color: ${Colors.primary};
          font-size: 21px;
          font-weight: bold;
          margin: 5px 0 20px;
        }

        button {
          background: ${Colors.primary};
          display: flex;
          color: #fff;
          border: 0;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          align-items: center;
          transition: 180ms ease-in-out;
          &:hover {
            background: ${Colors.five};
          }

          > div:first-child {
            display: flex;
            align-items: center;
            padding: 12px;
            background: rgba(0, 0, 0, 0.1);
            position: absolute;

            @media (max-width: 680px) {
              position: initial;
            }

            @media (max-width: 490px) {
              position: absolute;
            }

            @media (max-width: 360px) {
              position: initial;
            }

            svg {
              margin: 0 5px;
            }
          }

          > span:nth-child(2) {
            padding: 12px;
            flex: 1;
            text-align: center;
            font-weight: bold;
          }
        }
      }
    }
  }
`;

/* export const Title = styled.h1`
  font-size: 2rem;
  color: ${Colors.primary};
`;
 */
