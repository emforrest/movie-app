import {NavLink} from "react-router-dom"

export default function About(){
    return (
        <>
        <NavLink to="/"><button>Back</button></NavLink>
        <h1>About</h1>
        <p>This is a movie app designed for the EXCS React bootcamp</p>
        </>
    )
}