import React, {useEffect, useReducer} from "react";

export default function Checkbox() {
    const [checked, setChecked] = useReducer(checked => !checked, false);

    useEffect(() => {
        console.log(checked);
    });

    return (
        <>
            <input
                type="checkbox"
                value={checked}
                onChange={setChecked}/>
            {checked ? "checked" : "unchecked"}
        </>
    );
}
