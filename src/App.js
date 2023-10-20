import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";

//Database
import products from './db/data';
import Card from "./components/Card";


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  
  //-------Input Filter------ 
  const handleInputChange = event =>{
    setQuery(event.target.value);
  }
  
  const filtereditems = products.filter(
    (product) => 
     product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==
     -1
  );

  //-------Radio Filter------
  const handleChange = event => {
    setSelectedCategory(event.target.value);
  };

  //-------Buttons Filter------
  const handleClick = event => {
    setSelectedCategory(event.target.value);
  };

  //main function for doing filtering
  function filteredData(products,selected,query){
    let filteredProducts = products

    //Filtering Input Items
    if (query){
      filteredProducts = filtereditems
    }
    
    //Selected Filter
    if (selected){
        filteredProducts = filteredProducts.filter(
        ({category,color,company,newPrice,title}) => 
        category === selected ||
        color===selected ||
        company===selected||
        newPrice===selected||
        title===selected);
    }

    return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice}) =>(
      <Card
         key= {Math.random()}
         img = {img}
         title = {title}
         star = {star}
         reviews = {reviews}
         newPrice = {newPrice}
         prevPrice = {prevPrice}
      />
    ));
  }

  const result = filteredData(products,selectedCategory,query)

  return ( <>
    <Sidebar handleChange={handleChange}/>
    <Navigation query={query}handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
    </>
  );
}

export default App;

