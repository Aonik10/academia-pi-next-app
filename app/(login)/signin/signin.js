"use client";

import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import "./style.css";
import styles from "./signin.module.scss";

export default function SignIn({ onSwitch }) {
    let [error, setError] = useState(null);

    const handleSubmit = async (values) => {
        try {
            // hacer logica de login
            let state = await login(values);
            if (state.status === "Success") {
                dispatch(sessionLogin({ logged: true, data: state.data }));
                navigate("/");
            }
        } catch (error) {
            setError("Invalid username or password");
        }
    };

    return (
        <FormNoSSR
            name={styles.loginForm}
            className={styles.loginForm}
            initialValues={{
                remember: true,
            }}
            onFinish={handleSubmit}
            layout="vertical"
            requiredMark={false}
        >
            {error && <p>{error}</p>}
            <Form.Item
                className={styles.form_item}
                name="email"
                label="Correo electrónico"
                rules={[
                    {
                        required: true,
                        message: "Por favor, introduzca un email",
                    },
                ]}
            >
                <Input
                    className={styles.input}
                    prefix={
                        <UserOutlined className={styles.siteFormItemIcon} />
                    }
                    placeholder="alumno@academiapi.com"
                />
            </Form.Item>
            <Form.Item
                className={styles.form_item}
                name="password"
                label="Contraseña"
                rules={[
                    {
                        required: true,
                        message: "Please input your Password!",
                    },
                ]}
            >
                <Input.Password
                    className={styles.input}
                    prefix={
                        <LockOutlined className={styles.siteFormItemIcon} />
                    }
                    type="password"
                    placeholder="Contraseña"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Recordarme</Checkbox>
                </Form.Item>

                <Link className={styles.loginFormForgot} href="/about">
                    Olvidé mi contraseña
                </Link>
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.loginFormButton}
                >
                    Iniciar sesión
                </Button>
                {"¿No tienes cuenta? "}
                <a className={styles.create_account} onClick={onSwitch}>
                    crear cuenta
                </a>
            </Form.Item>
        </FormNoSSR>
    );
}

const FormNoSSR = dynamic(async () => Form, {
    ssr: false,
});
