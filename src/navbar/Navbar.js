import React from "react";
// import "./Card.css"
// import sedan from "./sedan.png";
import "./navbar.css"

export default function Navbar() {
    return (
        <>
            <nav class="navbar ">
                <div class="logo">
                    <div class="we">
                        <img src="https://see.fontimg.com/api/renderfont4/3z8d8/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RnJpZGF5/rooster-personal-use.png" alt="" />
                    </div>
                </div>
                <input type="text" placeholder="Type something to search" name="search"></input>
                <form class="oo" action="/action_page.php">
                    <button class="search" type="submit">Search</button>
                </form>

                <ul class="navlist">

                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <div class="lk">
                    <li><a href="/Login" target={"_main"}>LOGIN</a></li>
                    </div>
                </ul>

            </nav>

        </>
    );
}