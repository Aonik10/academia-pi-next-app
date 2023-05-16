import styles from "./page.module.scss";

export function WhyUs() {
    return (
        <div className={styles.why_us}>
            <div className={styles.girl_img}></div>
            <div className={styles.info_container}>
                <h1>¿Por qué Academia π?</h1>
                <p>
                    Nuestra cultura nos hace <span>diferentes</span>
                </p>
                <div className={styles.grid_container}>
                    <div className={styles.grid_item}>
                        <h1>Ventaja 1</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Eum iste assumenda quos, suscipit cupiditate
                            ipsa.
                        </p>
                    </div>
                    <div className={styles.grid_item}>
                        <h1>Ventaja 2</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Eum iste assumenda quos, suscipit cupiditate
                            ipsa.
                        </p>
                    </div>
                    <div className={styles.grid_item}>
                        <h1>Ventaja 3</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Eum iste assumenda quos, suscipit cupiditate
                            ipsa.
                        </p>
                    </div>
                    <div className={styles.grid_item}>
                        <h1>Ventaja 4</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Eum iste assumenda quos, suscipit cupiditate
                            ipsa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
