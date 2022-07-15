import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
// import "./Card.css"
// import luxury from "./luxury.png";
import "./card.css"
import Card2 from "./card2";

export default function Card1() {

    return (
        <>
            <Navbar/>
            <div className="CardContainer" id="home">
                <div class="h1">
                    <h1>Top Deals</h1>
                </div>
                <div class="main">
                    <div class="container">
                        <a href="#!" >
                            <img className=" w-52" src="https://images-eu.ssl-images-amazon.com/images/I/71VQXjN6R7S._AC_UL160_SR160,160_.jpg" alt="" />
                        </a>

                        <div className="p-6 w-52">
                            <h2 class="text"><b>Best phones </b></h2>
                            <p className="pb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <button type="button" className="  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>

                    <div class="container">
                        <a href="#!" >
                            <img className=" w-52" src="https://m.media-amazon.com/images/I/41Cmy4v1ExL._AC_UF226,226_FMjpg_.jpg" alt="" />
                        </a>
                        <div className="p-6 w-52">
                            <h2 class="text"><b>Gaming</b></h2>
                            <p className="pb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <button type="button" className="  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>

                    <div class="container">
                        <a href="#!" >
                            <img className=" w-52" src="https://m.media-amazon.com/images/I/41KupVQ5l6L._AC_SY200_.jpg" alt="" />
                        </a>
                        <div className="p-6 w-52">
                            <h2 class="text"><b>Laptops</b></h2>
                            <p className="pb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <button type="button" className="  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>

                    <div class="container">
                        <a href="#!" >
                            <img className=" w-52" src="https://images-na.ssl-images-amazon.com/images/G/31/img21/shoes/XCM/mEN/Brandtile/Brand-tiles_II_01._SY530_QL85_.jpg" alt="" />
                        </a>
                        <div className="p-6 w-52">
                            <h2 class="text"><b>Shoes </b></h2>
                            <p className="pb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <button type="button" className="  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>

                    <div class="container">
                        <a href="#!" >
                            <img className=" w-52 " src="https://images-eu.ssl-images-amazon.com/images/I/71vp8Lec9JL._AC._SR360,460.jpg" alt="" />
                        </a>
                        <div className="p-6 w-52">
                            <h2 class="text"><b>T-shirts</b></h2>
                            <p className="pb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <button type="button" className="  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                    <div class="container">
                        <a href="#!" >
                            <img className=" w-52 " src="https://images-eu.ssl-images-amazon.com/images/I/41dC9Rr1DkL._AC._SR360,460.jpg" alt="" />
                        </a>
                        <div className="p-6 w-52">
                            <h2 class="text"><b>Jackets</b></h2>
                            <p className="pb-4">
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </p>
                            <button type="button" className="  inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                </div>
            </div>
            <Card2/>

            <Footer/>


        </>
    );
}