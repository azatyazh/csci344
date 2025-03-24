import React from "react";
import { Welcome } from "./Welcome.jsx";
import "./App.css";

export default function App() {
    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <Welcome 
                name="Alex" 
                imgUrl="https://picsum.photos/200/200?a=1"/>

                <Welcome 
                name="Me" 
                imgUrl="https://picsum.photos/200/200?a=3"/>

                <Welcome 
                name="Karina" 
                imgUrl="https://picsum.photos/200/200?a=6"/>

                <Welcome 
                name="Polina" 
                imgUrl="https://picsum.photos/200/200?a=5"/>
            </main>
        </>
    );
}