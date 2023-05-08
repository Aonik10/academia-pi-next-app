"use client";

import { Inscription } from "./components/buttons/buttons";
import styles from "./page.module.scss";
import { Carousel } from "antd";

export default function Home() {
    return (
        <div className={styles.home}>
            <h1 className={styles.header}>
                ACELERA TU CARRERA
                <h2 className={styles.subtitle}>CON NUESTROS CURSOS</h2>
                <Inscription />
            </h1>

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
            <div className={styles.algo}></div>
            <div className={styles.algo2}></div>
            <div className={styles.algo3}></div>
            <div className={styles.algo4}></div>
        </div>
    );
}
