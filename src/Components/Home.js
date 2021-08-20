import {CartState} from "../Context/Context";
import SingleProduct from "./SingleProduct";
import Filters  from "./Filters";
import "./Styles.css";
const Home = () => {
    const {
        state : {products},productState:{byStock,byFastDelivery,sort,byRating,searchQuery},productDispatch}=CartState();

    const transformProducts =()=>
    {
        let sortedProducts=products;
 //Ascending and Descending       
        if(sort)
        {
            sortedProducts=sortedProducts.sort((a,b)=>
                sort==='lowToHigh' ? a.price-b.price : b.price-a.price
            )
            
        }
//Out of Stock
        if(!byStock)
        {
            sortedProducts =sortedProducts.filter((prod)=> prod.inStock);
        }
//Delivery Date 
        if(byFastDelivery)
        {
            sortedProducts =sortedProducts.filter((prod)=> prod.fastDelivery);
        }

 //Rating

 if(byRating)
        {
            sortedProducts =sortedProducts.filter((prod)=> prod.ratings >= byRating);
        }
//SearchQuery
        if(searchQuery)
        {
            sortedProducts =sortedProducts.filter((prod)=> prod.name.toLowerCase().includes(searchQuery));
        }
        return sortedProducts;       
        
    }
    return (
<div class="home">
    <Filters />
<div class="productContainer">
{transformProducts().map((prod)=>
{
return <SingleProduct prod={prod} key={prod.id}/>
})}
</div>
</div>)
}

export default Home;
