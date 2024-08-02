import React, {useEffect, useMemo, useState} from "react";
import postsJson from "../data/posts.json";

export const useJazzyNews = () => {
    const [_posts, setPosts] = useState(postsJson);
    const addPost = post => setPosts(allPosts => [post, ...allPosts]);
    const posts = useMemo(() => _posts, [_posts]);
    useEffect(() => {
        console.log("new post!");
    }, [posts]);

    useEffect(() => {
        console.log("subscribe");
        return () => console.log("unsubscribed");
    }, []);

    useEffect(() => {
        console.log("cue song");
        return () => console.log("un-cue song");
    }, []);

    return {posts, addPost};
};