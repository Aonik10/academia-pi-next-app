"use client";

import { useEffect, useRef, useState } from "react";

export function useScroll() {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        });
        observer.observe(ref.current);
    }, []);
    return isVisible;
}
