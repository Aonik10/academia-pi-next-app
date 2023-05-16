"use client";

import styles from "./signup.module.scss";
import { Button, Cascader, Form, Input } from "antd";

export default function SignUp({ onSwitch }) {
    return (
        <div className={styles.signup}>
            <Form className={styles.signup_form} layout="vertical">
                <div className={styles.names}>
                    <Form.Item
                        className={styles.form_item}
                        label="Nombre"
                        name="nombre"
                        rules={[
                            {
                                required: true,
                                message: "Ingresa tu nombre",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        className={styles.form_item}
                        label="Apellido"
                        name="apellido"
                        rules={[
                            {
                                required: true,
                                message: "Ingresa tu apellido",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div className={styles.passwords}>
                    <Form.Item
                        className={styles.form_item}
                        label="Contraseña"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Por favor, ingresa una contraseña",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        className={styles.form_item}
                        label="Repetir Contraseña"
                        name="repeat-password"
                        rules={[
                            {
                                required: true,
                                message: "Las contraseñas deben coincidir",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </div>
                <div className={styles.names}>
                    <Form.Item
                        className={styles.form_item}
                        label="Correo electrónico"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Por favor, ingresa un email valido",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        className={styles.form_item}
                        label="Telefono"
                        name="phoneNumber"
                        rules={[
                            {
                                required: true,
                                message:
                                    "Por favor, ingresa un número de telefono",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <Form.Item
                    className={styles.form_item}
                    label="Universidad"
                    name="universidad"
                >
                    <Cascader
                        size="large"
                        className={styles.cascader}
                        options={[
                            {
                                value: "UNAM - FCE",
                                label: "UNAM - FCE",
                            },
                            {
                                value: "UNAM - EXACTAS",
                                label: "UNAM - EXACTAS",
                            },
                            {
                                value: "UNAM - SOCIALES",
                                label: "UNAM - SOCIALES",
                            },
                            {
                                value: "MONTOYA",
                                label: "MONTOYA",
                            },
                            {
                                value: "OTRA",
                                label: "OTRA",
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item
                    className={styles.form_item}
                    label="Carrera"
                    name="carrera"
                >
                    <Cascader
                        size="large"
                        className={styles.cascader}
                        options={[
                            {
                                value: "Licenciatura en Economia",
                                label: "Licenciatura en Economia",
                            },
                            {
                                value: "Licenciatura en Adm. de Empresas",
                                label: "Licenciatura en Adm. de Empresas",
                            },
                            {
                                value: "Contador Público",
                                label: "Contador Público",
                            },

                            {
                                value: "Técnico Administrativo Contable",
                                label: "Técnico Administrativo Contable",
                            },
                            {
                                value: "Secretariado Administrativo",
                                label: "Secretariado Administrativo",
                            },
                            {
                                value: "Otro",
                                label: "Otro",
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.create_account_btn}
                    >
                        Crear cuenta
                    </Button>
                    {"¿Ya tienes cuenta? "}
                    <a className={styles.sign_in} onClick={onSwitch}>
                        Iniciar sesión
                    </a>
                </Form.Item>
            </Form>
        </div>
    );
}
