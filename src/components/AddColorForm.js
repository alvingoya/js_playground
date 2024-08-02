import React, {useContext, useRef, useState} from "react";
import ColorProvider, {useColors} from "./ColorProvider";


export default function AddColorForm() {
    const useInput = initialValue => {
        const [value, setValue] = useState(initialValue);
        return [
            {value, onChange: e => setValue(e.target.value)},
            () => setValue(initialValue)
        ];
    }
    const [title, setTitle] = useInput("");
    const [color, setColor] = useInput("#000000");
    const {addColor} = useColors();

    const submit = e => {
        e.preventDefault();
        addColor(title.value, color.value);
        setTitle();
        setColor();
    }

    return (
        <form onSubmit={submit}>
            <input
                {...title}
                type="text"
                placeholder="color title..."
                required
            />
            <input
                {...color}
                type="color"
                required
            />
            <button>ADD</button>
        </form>
    );
}