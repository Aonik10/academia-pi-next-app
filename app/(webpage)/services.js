import styles from "./page.module.scss";
import Image from "next/image";
import teacher from "../assets/images/undraw/undraw_online_learning_re_qw08.svg";
import educator from "../assets/images/undraw/undraw_educator_re_ju47.svg";
import teaching from "../assets/images/undraw/undraw_teaching_re_g7e3.svg";

export function Services() {
    return (
        <section className={styles.services}>
            <div className={styles.service}>
                <Image width="300" height="300" src={teacher} alt="teacher" />
                <h1>Lorem ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus tenetur cum aliquid consectetur labore ullam omnis
                    accusantium sequi expedita eaque?
                </p>
            </div>
            <div className={styles.service}>
                <Image width="300" height="300" src={educator} alt="teacher" />
                <h1>Lorem ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus tenetur cum aliquid consectetur labore ullam omnis
                    accusantium sequi expedita eaque?
                </p>
            </div>
            <div className={styles.service}>
                <Image width="300" height="300" src={teaching} alt="teacher" />
                <h1>Lorem ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus tenetur cum aliquid consectetur labore ullam omnis
                    accusantium sequi expedita eaque?
                </p>
            </div>
        </section>
    );
}
