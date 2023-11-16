import React from 'react'
import '../Nav/Nav.scss'
import { BrowserRouter, Link } from 'react-router-dom'
import useFecth from '../../Hooks/Fetch'
export default function Nav() {
    const { data, loading, iserror } = useFecth('https://jsonplaceholder.typicode.com/posts')
    if (data && data.length > 0) {
        let newData = data.slice(90)
        console.log(newData)
    }

    return (
        <div class="topnav">
            <a><Link to={'/'} activeClassName="active">Home</Link></a>
            <a><Link to={'/blog'}>Blog</Link></a>
        </div>
    )
}
