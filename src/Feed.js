import { useSelector } from "react-redux";
import { postsSelector } from "./features/postReducer";
import React from 'react'


export default function Feed() {
    const posts = useSelector(postsSelector);

    const renderPosts = posts.slice(0).reverse().map(post => (
        <article key={post.id} id="post">
            <label id="postTitle">{post.title}</label><label id="byUser"> by [{post.author}]</label>
            <p>{post.text.substring(0,500)}</p>
        </article>
    ))
    return (
        <div name="feed">
            {renderPosts}
        </div>
    )
}