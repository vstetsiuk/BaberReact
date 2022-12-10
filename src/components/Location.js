import { useState } from "react";

export default function Location() {
    const [location, setLocation] = useState(localStorage.getItem('location'));
    function changeHandler(e) {
        const location = e.target.value;
        setLocation(location);
        localStorage.setItem('location', location);
    }
    return (
        <select onChange={changeHandler} value={location}>
            <option value="first">First Location</option>
            <option value="second">Second Location</option>
            <option value="third">Third Location</option>
        </select>
    );
}