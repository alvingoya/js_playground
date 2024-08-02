import {useEffect, useMemo, useState} from "react";
import {useJazzyNews} from "../hooks/useJazzyNews";


const useAnyKeyToRender = () => {
    const [, forceRender] = useState();
    useEffect(() => {
        window.addEventListener("keydown", forceRender);
        return () => window.removeEventListener("keydown", forceRender);
    }, []);
}

function WordCount({ children = "" }) {
    useAnyKeyToRender();
    const {posts, addPost} = useJazzyNews();
    const words = useMemo(() => {
        return children.split(" ");
    }, [children]);

    useEffect(() => {
        console.log("fresh render");
        let evtSource = new EventSource('https://baidu.ac/gold-trading/api/stream/iphone/subscribe?goldToken=ccf8fc58b7e24a06bed8eaceca522d18HvOeh');
        evtSource.onmessage = function(e) {
            console.log(e.data);
        };
        evtSource.onopen = function (e) {
            console.log("connection opened");
            console.log(e.target);
        }
    }, [posts]);

    return ( <>
        <p>{children}</p>
        <p>
            <strong>{words.length} - words</strong>
        </p>
        <p><button onClick={() => addPost("mypost")}>button</button> </p>
    </> );
}

export default function WordCountApp() {
    return <WordCount>You are not going to believe this but...</WordCount>;
}