import Button from "../button";
import { useContext } from "react";
import { CatalogueContext } from "../../providers/catalogue";
import "./styles.css";
const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const cart = JSON.parse(localStorage.getItem("@Cart:kenzie")) || [];

  return (
    <>
      <div className="conteiner">
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <span key={index} className="conteiner-line">
              {item.name} <Button type={type} item={item} />
            </span>
          ))}

        {type === "cart" &&
          cart.map((item, index) => (
            <span key={index} className="conteiner-line">
              {item.name} <Button type={type} item={item} />
            </span>
          ))}
      </div>
    </>
  );
};
export default ProductList;
