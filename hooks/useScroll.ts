import { useEffect, useState } from "react";

export const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);
    const isWindow = typeof window ? "object" : undefined;

    const handleScrollY = () => {
        let currentScrollY = isWindow ? window.scrollY : 0;
        setScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollY, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScrollY);
        };
    }, []);
    return scrollY;
};
