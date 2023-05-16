"use client";

import styles from "./navBar.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../assets/images/logos/Icono TRANS.png";
import Link from "next/link";

function NavBar() {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        });
        observer.observe(ref.current);
    }, []);

    return (
        <div>
            <span ref={ref}></span>
            <div
                className={`${styles.nav_bar} ${
                    isVisible ? "" : styles.scrolled_nav_bar
                }`}
            >
                <div className={styles.logo}>
                    <Image width="75" height="75" src={logo} alt="logo" />
                </div>
                <div className={styles.nav_bar_titles}>
                    <Link href={"/"} className={styles.nav_bar_title}>
                        Inicio
                    </Link>
                    <div className={styles.nav_bar_title}>Cursos</div>
                    <div className={styles.nav_bar_title}>Profesores</div>
                    <div className={styles.nav_bar_title}>Eventos</div>
                    <div className={styles.nav_bar_title}>Contacto</div>
                    <Link href={"/signin"} className={styles.nav_bar_title}>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
