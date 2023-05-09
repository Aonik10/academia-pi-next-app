"use client";

import { Inscription } from "./components/buttons/buttons";
import styles from "./page.module.scss";
import { Carousel } from "antd";

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.header}>
                <h1>ACELERA TU CARRERA</h1>
                <h2>CON NUESTROS CURSOS</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    magni excepturi consequuntur molestias, quas minima enim
                    molestiae rerum deserunt qui.
                </p>
                <Inscription />
            </div>
            <div className={styles.carousel}>
                <Carousel
                    effect="fade"
                    autoplay
                    autoplaySpeed={6000}
                    className={styles.carousel}
                >
                    <div
                        className={`${styles.carousel_content} ${styles.first_slide}`}
                    ></div>
                    <div
                        className={`${styles.carousel_content} ${styles.second_slide}`}
                    ></div>
                    <div
                        className={`${styles.carousel_content} ${styles.third_slide}`}
                    ></div>
                </Carousel>
            </div>
        </div>
    );
}
