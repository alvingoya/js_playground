import React from "react";
import Ingredient from "./Ingredient";

export function IngredientList({list}) {
    return (
        <ul className="ingredients">
            {list.map((ingredient, i) => (
                <Ingredient key={i} {...ingredient}/>
            ))}
        </ul>
    );
}
