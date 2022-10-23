import Recipe from "../../components/recipe/recipe";
import productIcon from "../../recipesimages/products.svg";

export default function Breakfast() {
    return (
      <section className="page">

        <div className="titleandicon">
          <p>Breakfast</p>
          <div className="image">
            <img src={productIcon} alt="producticon" />
          </div>
        </div>
  
        <Recipe />
       
  
      </section>
    );
  }
  