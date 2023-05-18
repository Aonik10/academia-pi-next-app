"use client";

import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "@/app/components/spinner/Spinner";
import dynamic from "next/dynamic";
import "./style.css";
import styles from "./signin.module.scss";

export default function SignIn({ onSwitch }) {
    const router = useRouter();
    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            // hacer logica de login
            let response = await fetch(
                "http://localhost:3000/api/routes/signin",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );
            if (response.status === 200) {
                console.log(response);
                router.push("/");
            }
        } catch (error) {
            console.log(error);
            setError("Invalid username or password");
        }
        setLoading(false);
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
                    {loading ? <Spinner /> : "Iniciar sesión"}
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
