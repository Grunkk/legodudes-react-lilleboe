import ProductCategory from "./ProductCategory";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import ShoppingButton from "./ShoppingButton";

export default function Product({cat, name, price}) {
    return (
        <article className="product-card">
            <ProductCategory cat={cat}/>
            <ProductTitle name={name}/>
            <ProductPrice price={price+",- kr"}/>
            <ShoppingButton/>
        </article>
    )
}