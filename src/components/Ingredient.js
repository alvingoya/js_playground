import React from "react";

export default function Ingredient({name, amount, measurement}) {
    return (
        <li>
            {amount} {name} {measurement}
        </li>
    );
}