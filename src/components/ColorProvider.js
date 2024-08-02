import {createContext, useContext, useState} from "react";
import colorData from "../data/color-data.json";
import {v4} from "uuid";

const ColorContext = createContext(colorData);
export const useColors = () => useContext(ColorContext);
export default function ColorProvider({children}) {
    const [colors, setColors] = useState(useColors);
    const addColor = (title, color) => {
        setColors([...colors, {
            id: v4(),
            rating: 0,
            title: title,
            color: color
        }]);
    }
    const rateColor = (id, rating) => {
        setColors(
            colors.map(color => {
                return color.id === id ? {...color, rating} : color
            })
        );
    }

    const removeColor = id => {
        setColors(
            colors.filter(color => color.id !== id)
        );
    }
    return (
        <ColorContext.Provider value={{colors, addColor, rateColor, removeColor}}>
            {children}
        </ColorContext.Provider>
    )
}