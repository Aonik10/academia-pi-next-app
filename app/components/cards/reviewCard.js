import styles from "./cards.module.scss";
import Image from "next/image";
import example from "../../assets/images/resources/review-example.png";

export function ReviewCard() {
    return (
        <div className={styles.reviewCard}>
            <div className={styles.text}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum et eum odit error earum quasi, officiis aliquam
                    nesciunt tempore numquam repellat cumque voluptates
                    asperiores similique reprehenderit rerum repellendus alias
                    fugiat ut culpa. Nam sed deleniti dolores, ducimus inventore
                    earum saepe?
                </p>
            </div>
            <div className={styles.student}>
                <Image width="120" height="120" src={example} alt="example" />
                <div className={styles.student_info}>
                    <h1>Maria la del Barrio</h1>
                    <p>Estudiante de 3er año FCE UNaM</p>
                </div>
            </div>
        </div>
    );
}
