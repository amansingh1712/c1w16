import React from "react"
import data from '../data.json'
import GroceryItem from "../components/GroceryItem";
import Styles from "../grocerydetails.module.css"


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
            <div className={Styles.Container}>
                
                {/* map through the data and display the cards */
                    data.map((item) => {
                        return <GroceryItem{...item}/>
                })}

        </div>
        </>
    )
}
export default GroceryDetails