/** @jsxImportSource solid-js */
import { render } from "solid-js/web";
import { Component } from "solid-js";

import "./index.css";
import Home from './Pages/Home'

const App: Component = () => {
    return (
        <>
			<Home></Home>
        </>
    )
};
render(() => <App />, document.getElementById("app")!);
