"use client";

import "react-multi-carousel/lib/styles.css";
import styles from "./page.module.scss";
import { ProductCard } from "./components/cards/productCard";
import Carousel from "react-multi-carousel";

export function CoursesPreview() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
            slidesToSlide: 1,
        },
        desktop: {
            breakpoint: { max: 1280, min: 600 },
            items: 3,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 960, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1,
        },
    };

    return (
        <div className={styles.courses_preview}>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                containerClass={styles.carousel_container}
            >
                <ProductCard
                    title="Algebra"
                    description={"Curso para newies"}
                />
                <ProductCard
                    title="Matemática Financiera"
                    description={"Curso para newies"}
                />
                <ProductCard
                    title="Contabilidad Basica"
                    description={"Curso para newies"}
                />
                <ProductCard
                    title="Administración I"
                    description={"Curso para newies"}
                />
                <ProductCard
                    title="Microeconomía"
                    description={"Curso para newies"}
                />
                <ProductCard
                    title="Macroeconomía"
                    description={"Curso para newies"}
                />
            </Carousel>
        </div>
    );
}
