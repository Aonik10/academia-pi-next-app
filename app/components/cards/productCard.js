"use client";

import { Card } from "antd";
import styles from "./cards.module.scss";
import Image from "next/image";
import example from "../../assets/images/undraw/undraw_teacher_re_sico.svg";

const { Meta } = Card;

export function ProductCard({ title, description }) {
    return (
        <Card
            className={styles.productCard}
            hoverable
            cover={
                <Image width="200" height="200" alt="example" src={example} />
            }
        >
            <Meta title={title} description={description} />
        </Card>
    );
}
