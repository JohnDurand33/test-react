import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from './Post'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

const SinglePost = ({ user }) => {  // {user} is the way to deconstruct the magic keyword - "props" that occurs whenver you pass props to a functional component

    const { postId } = useParams()
    const [post, setPost] = useState({})

    const getPost = async () => {
        let res
        if (user.token) {
            res = await fetch(BACKEND_URL + `/api/posts/${postId}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        } else {
            res = await fetch(BACKEND_URL + `/api/posts/${postId}`)
        }

        const data = await res.json()
        if (data.status === 'ok') {
            setPost(data.post)
            console.log(post)
        }
    };

    useEffect(() => {
        getPost(postId);
    }, [postId])


    return (
        <div>
            <Post user={user} post={post} />
        </div>
    )
}

export default SinglePost