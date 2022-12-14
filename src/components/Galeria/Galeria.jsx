import React from "react"
import img from "../../img/img2.jpg"
import imgTwo from "../../img/umbrella.jpg"
import imgThree from "../../img/img3.jpg"
import imgFour from "../../img/img4.jpg"
import imgFive from "../../img/img5.jpg"
import imgSix from "../../img/img6.jpg"
import styles from "./Galeria.less"
import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"

export default function Galeria() {
    
    useEffect(() => {
        Aos.init({ duration: 600 })
    })

    return (
        <div className={styles.galeria}>
            <div className={styles.text}>
                <center><p>INSTAGRAM</p>
                <h2>#ESPUFI</h2></center>
            </div>
            <div className={styles.imgs} data-aos="fade-down">
                <a href="/" src="#image1">
                    <img src={img} alt="" />
                </a>
                <a href="/" src="#image1">
                    <img src={imgTwo} alt="" />
                </a>
                <a href="/" src="#image1">
                    <img src={imgThree} alt="" />
                </a>
                <a href="/" src="#image1">
                    <img src={imgFour} alt="" />
                </a>
                <a href="/" src="#image1">
                    <img src={imgFive} alt="" />
                </a>
                <a href="/" src="#image1">
                    <img src={imgSix} alt="" />
                </a>
            </div>
        </div>
    )
}