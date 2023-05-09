"use client";

import styles from "./page.module.scss";
import { Carousel } from "antd";
import { ReviewCard } from "./components/cards/reviewCard";
import example from "./assets/images/resources/review-example.png";
import example2 from "./assets/images/resources/review-example-2.png";
import dynamic from "next/dynamic";

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
                <CarouselNoSSR
                    effect="scrollx"
                    className={styles.reviews_carousel}
                >
                    <ReviewCard
                        photo={example}
                        name="Maria la del Barrio"
                        title="Estudiante de 3er año FCE UNaM"
                        testimony="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum et eum odit error earum quasi, officiis aliquam
                        nesciunt tempore numquam repellat cumque voluptates
                        asperiores similique reprehenderit rerum repellendus alias
                        fugiat ut culpa. Nam sed deleniti dolores, ducimus inventore
                        earum saepe?"
                    />
                    <ReviewCard
                        photo={example2}
                        name="Daniela Polaca"
                        title="Estudiante de 2er año Montoya"
                        testimony="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum et eum odit error earum quasi, officiis aliquam
                        nesciunt tempore numquam repellat cumque voluptates
                        asperiores similique reprehenderit rerum repellendus alias
                        fugiat ut culpa. Nam sed deleniti dolores, ducimus inventore
                        earum saepe?"
                    />
                </CarouselNoSSR>
            </div>
        </div>
    );
}

const CarouselNoSSR = dynamic(async () => Carousel, {
    ssr: false,
});
