"use client";

import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "../../assets/images/logos/Icono TRANS.png";
import { Inscription } from "../buttons/buttons";
import {
    WhatsAppOutlined,
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
} from "@ant-design/icons";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.logo}>
                    <Image width="120" height="120" src={logo} alt="teacher" />
                    <h1>
                        Academia <span>π</span>
                    </h1>
                    <p>
                        Porque aprender, <span>importa</span>
                    </p>
                    <Inscription />
                </div>
                <div className={styles.common_courses}>
                    <h1>Estudia en Academia π</h1>
                    <ul>
                        <li>Curso de Algebra</li>
                        <li>Curso de Matemática</li>
                        <li>Curso de Artes Oscuras</li>
                        <li>Curso de Macumba II</li>
                        <li>Curso de Histeriqueo avanzado</li>
                    </ul>
                </div>
                <div className={styles.about_us}>
                    <h1>Acerca de nosotros</h1>
                    <ul>
                        <li>Nosotros</li>
                        <li>Eventos</li>
                        <li>Nuestras instalaciones</li>
                        <li>Profesores</li>
                        <li>Comunidad π</li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h1>Contacto</h1>
                    <ul>
                        <li>Av. siempre viva 123</li>
                        <li>
                            <WhatsAppOutlined
                                className={styles.whatsapp_icon}
                            />
                            376 488 0657 / 376 462 824
                        </li>
                        <li className={styles.social_media}>
                            <InstagramOutlined
                                style={{ color: "purple" }}
                                className={styles.social_media_icon}
                            />
                            <FacebookOutlined
                                style={{ color: "#3b5998" }}
                                className={styles.social_media_icon}
                            />
                            <TwitterOutlined
                                style={{ color: "#1DA1F2" }}
                                className={styles.social_media_icon}
                            />
                        </li>
                        <li>Trabaja con Nosotros</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
