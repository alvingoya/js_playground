import React from "react";
import {Recipe} from "./Recipe";
import {StarRating} from "../state/StarRating";

export default function Menu({recipes}) {
    return (
        <article>
            <header>
                <h1>Recipes</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => (
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
        </article>
    );
}
