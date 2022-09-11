import React from "react";
// import { Carousel } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
// import Card from "./Card"
// import dataSlider from './dataSlider';
// import Dots from "./Dots";

const breakPoints = [
    { width:1, itemsToShow: 1},
    { width:550, itemsToShow: 2},
    { width:768, itemsToShow: 3},
    { width:1200, itemsToShow: 4}
]

export default function Slider(){
    return(
        <>
        <div className="slider">
        <Carousel breakpoints={breakPoints}>
            <Item><div style={{ backgroundImage: "url(/card_img1.jpg)", width:'100%', height: '100%', borderRadius: '50px'}}>
        <div class="card-category mt-5">
        Mabol1970
        </div>
        <div class="card-title mt-2">
        Sarti del Metallo
        </div>
        <div class="card-body ps-5 pe-5 pt-3">
        Procursori della lavorazione del metallo secondi i canoni del design contemporaneo. Mabol1970 realizza opere d'architettura in tutto il mondo.
        </div>
        </div></Item>
        <Item><div style={{ backgroundImage: "url(/card_img1.jpg)", width:'100%', height: '100%', borderRadius: '50px'}}>
        <div class="card-category mt-5">
        Arteba
        </div>
        <div class="card-title mt-2">
        L'alfabeto del metallo
        </div>
        <div class="card-body ps-5 pe-5 pt-3">
        Un nuovo alfabeto progettuale nel mondo dell'arredobagno per una lettura contemporanea di come viviamo e pensiamo lo spazio dedicato a noi stessi.
        </div>
        </div></Item>
        <Item><div style={{ backgroundImage: "url(/card_img1.jpg)", width:'100%', height: '100%', borderRadius: '50px'}}>
        <div class="card-category mt-5">
        Gentilin Design
        </div>
        <div class="card-title mt-2">
        Design Takeaway
        </div>
        <div class="card-body ps-5 pe-5 pt-3">
        Design e grande distribuzione si incontrano in una collezione di prodotti che mixano irriverenza, rigore formale e tecniche produttive.
        </div>
        </div></Item>
        </Carousel>
        </div>
        </>
        );
    }