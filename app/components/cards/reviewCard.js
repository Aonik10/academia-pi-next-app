"use client";

import styles from "./cards.module.scss";
import Image from "next/image";

export function ReviewCard({ photo, name, title, testimony }) {
    return (
        <div className={styles.reviewCard}>
            <div className={styles.text}>
                <p>{testimony}</p>
            </div>
            <div className={styles.student}>
                <Image width="120" height="120" src={photo} alt={name} />
                <div className={styles.student_info}>
                    <h1>{name}</h1>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}
