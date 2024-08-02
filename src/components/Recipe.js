import React from "react";
import {IngredientList} from "./IngredientList";
import Instructions from "./Instructions";
export function Recipe({name, ingredients, steps}) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <Instructions title="Cooking Instructions" steps={steps}/>
            <IngredientList list={ingredients}/>
        </section>
    );
}