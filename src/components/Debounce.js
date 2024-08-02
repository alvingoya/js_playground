import React from "react";

const TRAILING = 1, LEADING = 2;

export default function Debounce() {
    return (
        <>
            <p> will not allow repeated clicks in 1s
                <button onClick={leadingDebounce}>LEADING</button>
            </p>
            <p> will process data 1s after clicking
                <button onClick={trailingDebounce}>TRAILING</button>
            </p>
        </>
    );
}

function callMe(data) {
    console.log(`called data: ${data}`);
}

const leadingDebounce = debounce(2, e => callMe(e.target));
const trailingDebounce = debounce(1, e => callMe(e.target));

function debounce(type, fn, timeout = 1000) {
    let timer;
    return (...args) => {
        if (type === LEADING && !timer) {
            fn.apply(this, args);
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
                type === TRAILING ? fn.apply(this, args) : timer = undefined;
            }
            , timeout);
    }
}

