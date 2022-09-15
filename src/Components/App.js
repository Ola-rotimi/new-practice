import React from "react";
import cars from "../cars"
import CreateEntry from "./CreateEntry";

function App() {
    return <div className="car">
        <h1>Car Models</h1>
        <div className="card">{cars.map(CreateEntry)}</div>
    </div>
}

export default App;