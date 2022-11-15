import {useEffect, useState} from "react"
function Drinks() {

    const [drinks, setDrinks] = useState([])

    // useEffect(() => {
    //     fetch("https://the-cocktail-db.p.rapidapi.com/popular.php", {
    //         methods: "GET",
    //         headers: {
    //             'X-RapidAPI-Key' : process.env.REACT_APP_API_KEY,
    //             'X-RapidAPI-Host' : 'the-cocktail-db.p.rapidapi.com'
    //         }

    //     }).then(response => response.json()).then(data =>
    //     setDrinks(data.drinks))
    // })

    /*
    return (
    <div>
    {
        drinks.map(drink => <p>{drink.strDrink}</p>)
    }
    </div>
    )*/
     
    return(
        <div>
        <p>drinks should be here</p>
        </div>
    )
}
export default Drinks
