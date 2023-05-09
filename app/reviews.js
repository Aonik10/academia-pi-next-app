"use client";

import styles from "./page.module.scss";
import { Carousel } from "antd";
import { ReviewCard } from "./components/cards/reviewCard";

export function Reviews() {
    return (
        <div className={styles.reviews}>
            <div className={styles.header}>
                <h1>Muchos estudiantes nos eligen</h1>
                <p>
                    El testimonio de nuestros alumnos nos motiva a seguir
                    creciendo para ayudarlos a completar sus metas
                </p>
            </div>
            <div className={styles.testimonies}>
                <Carousel effect="scrollx" className={styles.reviewsCarousel}>
                    <ReviewCard />
                </Carousel>
            </div>
        </div>
    );
}
