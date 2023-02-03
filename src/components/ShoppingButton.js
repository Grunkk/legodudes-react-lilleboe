export default function ShoppingButton(){

    const handleShopping = () =>{
        console.log("Du har shoppet!")
    }

    return <button className="shopping-btn" onClick={handleShopping}>Legg til i handlekurv</button>
}