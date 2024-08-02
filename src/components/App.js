import React, {useEffect, useLayoutEffect, useState} from "react";
import colorData from '../data/color-data.json';
import ColorList from "./ColorList";

export default function() {
    // console.log(useMousePosition());
    // requestToGitHub("eyji");
    return (
        <>
            <GitHubUser login="eyji"/>
            <GitHubUser login="moonhighway"/>
        </>
    );
}

const loadJSON = key => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, item) => localStorage.setItem(key, JSON.stringify(item));

function GitHubUser({login}) {
    const [data, setData] = useState(loadJSON(`user:${login}`));

    useEffect(() => {
        if(!data) return;
        if(data && data.login === login) return;
        const {name, avatar_url, location} = data;

        saveJSON(`user:${login}`, {login, name, avatar_url, location});
    }, [data]);

    useEffect(() => {
            if (!login) return;
            if(data && data.login === login) return;
            console.log(`fetching user`);
            fetch(`https://api.github.com/users/${login}`)
                .then(resp => resp.json())
                .then(setData)
                .catch(console.error);
        }
        , [login]);

    if(data)
        return <pre>{JSON.stringify(data, null, 3)}</pre>;
    return null;
}

async function requestToGitHub(user) {
    try {
        const resp = await fetch(`https://api.github.com/users/${user}`);
        const userData = await resp.json();
        console.log(userData);
    } catch (error) {
        console.error(error);
    }
}


///////////////////////////////////////////////


function useWindowSize() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const resize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    useLayoutEffect(() => {
        window.addEventListener("resize", resize);
        resize();
        return () => window.removeEventListener("resize", resize);
    }, []);
    return [width, height];
}


function useMousePosition() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const setPosition = ({x, y}) => {
        setX(x);
        setY(y);
    };
    useLayoutEffect(() => {
        window.addEventListener("mousemove", setPosition);
        return () => window.removeEventListener("mousemove", setPosition);
    }, []);
    return [x, y];
}
