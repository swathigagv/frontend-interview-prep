import React, {useState,useEffect} from 'react';
import '../index.css';
import Avinrecipe from './avinrecipe.jsx';
import IngredientsList from './IngredientsList';
export default function form(){

const [ingredients, setIngredients] = React.useState([
    "all the main spices", "pasta", "ground beef", "tomato paste"
])

    const [recipes, setRecipes] = useState([]); // State to store fetched recipes
    const [loading, setLoading] = useState(false); // State for loading status
    const [error, setError] = useState(null);     // State for error handling
    const [recipeshown, setRecipeshown] = useState(false); // Controls recipe display
    const recipeSection = React.useRef(null);

    // --- API Configuration ---
    const SPOONACULAR_API_KEY = 'a6ccb10810a94e488dbd1adee43cc3f9'; // Replace with your Edamam App ID
    
function addIngredients(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients,newIngredient])
}
 useEffect(() => {
        // Only fetch if recipeshown is true and there are ingredients
        if (recipeshown && ingredients.length > 0) {
            const fetchRecipes = async () => {
                setLoading(true);
                setError(null); // Clear previous errors

                // Spoonacular's complex search often takes a comma-separated list for ingredients
                const queryIngredients = ingredients.map(ing => encodeURIComponent(ing)).join(',');

                // Construct the Spoonacular API URL for complex search by ingredients
                // You might need to adjust parameters based on your exact needs.
                // maxFat, number, ranking, etc., can be added.
                const url = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${queryIngredients}&addRecipeInformation=true&number=10&apiKey=${SPOONACULAR_API_KEY}`;


                try {
                    const response = await fetch(url);
                     if (!response.ok) {
                        // Attempt to read error message from response body if available
                        const errorData = await response.json();
                        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
                    }

                    const data = await response.json();
                    // Spoonacular's search results are typically in a 'results' array
                    setRecipes(data.results);
                } catch (err) {
                    console.error("Failed to fetch recipes from Spoonacular:", err);
                    setError(err);
                } finally {
                    setLoading(false);
                }
            };

            fetchRecipes();
        } else if (!recipeshown) {
             // Clear recipes if recipeshown becomes false to reset display
            setRecipes([]);
        }
    }, [recipeshown, ingredients, SPOONACULAR_API_KEY]);

function getRecipe(){
   setRecipeshown(true);
}
React.useEffect(() => {
        if (recipes !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior:"smooth"})
        }
    }, [recipes])
    return(
        <main>
            <form  action={addIngredients} className="add-ingredient-form">
                <input 
                  type="text"
                  placeholder="eg.Garlic"
                  aria-label="Add ingredients"
                  name="ingredient"
                   />
                <button>Add Ingredients</button>
            </form>
            {ingredients.length > 0 && <IngredientsList 
            ref={recipeSection}
            ingredients ={ingredients}
            toggleRecipeShown ={getRecipe}
            />}
            {recipeshown && <Avinrecipe 
                recipes={recipes} // Pass the fetched recipes to Avinrecipe
                loading={loading}
                error={error}
            />}
        </main>
    )
}