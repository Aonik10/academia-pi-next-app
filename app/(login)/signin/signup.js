"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./signup.module.scss";
import { Button, Cascader, Form, Input } from "antd";
import Spinner from "@/app/components/spinner/Spinner";

export default function SignUp({ onSwitch, universities, careers }) {
    const router = useRouter();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            let state = await fetch("http://localhost:3001/api/routes/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });
            if (state.status === "Success") {
                router.push("/signin");
            }
        } catch (error) {
            console.log(error);
            alert("Ocurrio un error, contacte al administrador");
        }
        setLoading(false);
    };

    return (
        <div className={styles.signup}>
            <Form
                className={styles.signup_form}
                layout="vertical"
                onFinish={handleSubmit}
            >
                <div className={styles.names}>
                    <Form.Item
                        className={styles.form_item}
                        label="Nombre"
                        name="name"
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
                        name="lastname"
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
                    name="university"
                >
                    <Cascader
                        size="large"
                        className={styles.cascader}
                        options={universities.map((univ) => ({
                            value: univ.id,
                            label: univ.title,
                        }))}
                    />
                </Form.Item>
                <Form.Item
                    className={styles.form_item}
                    label="Carrera"
                    name="carrer"
                >
                    <Cascader
                        size="large"
                        className={styles.cascader}
                        options={careers.map((career) => ({
                            value: career.id,
                            label: career.title,
                        }))}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.create_account_btn}
                    >
                        {loading ? <Spinner /> : "Crear cuenta"}
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
