// Avinrecipe.js
import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Avinrecipe({ recipes, loading, error }) {
    if (loading) {
        return <p>Fetching delicious recipes from Spoonacular...</p>;
    }

    if (error) {
        return <p>Oops! Error loading recipes: {error.message}. Please check your API key and try again.</p>;
    }

    if (recipes.length === 0) {
        return <p>No recipes found matching your ingredients. Try adding more or different ones!</p>;
    }

    return (
        <div className="recipes-container">
            <h2>Your Custom Recipes (from Spoonacular):</h2>
            <div className="recipe-cards-grid">
                {recipes.map((recipe) => (
                    // Spoonacular's 'id' is a good unique key
                    <div key={recipe.id} className="recipe-card">
                        <h3>{recipe.title}</h3>
                        {/* Spoonacular usually provides 'image' directly */}
                        {recipe.image && (
                            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                        )}
                        {/* If you included addRecipeInformation=true, you'll have more details */}
                        {/* For ingredients, you might need to loop through extendedIngredients array */}
                        {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 && (
                            <div>
                                <h4>Ingredients:</h4>
                                <ul className="ingredient-list">
                                    {recipe.extendedIngredients.map((ing, index) => (
                                        <li key={index}>{ing.original}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {/* Link to source URL */}
                        {recipe.sourceUrl && (
                            <a
                                href={recipe.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="view-recipe-button"
                            >
                                View Full Recipe
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
