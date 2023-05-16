"use client";

import SignIn from "./signin";
import SignUp from "./signup";
import styles from "./page.module.scss";
import { useEffect, useRef, useState } from "react";

export default function Login() {
    const [front, setFront] = useState(true);
    const [flipping, setFlipping] = useState(false);

    let flipperRef = useRef();

    const switchFront = () => {
        setFlipping(true);
    };

    useEffect(() => {
        const flipperDiv = flipperRef.current;
        const onTransitionEnd = (event) => {
            if (event.target != flipperDiv) return;
            if (flipping) {
                setFront(!front);
                setFlipping(false);
            }
        };
        flipperDiv.addEventListener("transitionend", onTransitionEnd);
        return () => {
            flipperDiv.removeEventListener("transitionend", onTransitionEnd);
        };
    }, [front, flipping]);

    return (
        <div className={styles.login}>
            <div
                className={`${styles.flipper} ${flipping ? styles.flip : ""}`}
                ref={flipperRef}
            >
                {front ? (
                    <SignIn onSwitch={switchFront} />
                ) : (
                    <SignUp onSwitch={switchFront} />
                )}
            </div>
        </div>
    );
}
