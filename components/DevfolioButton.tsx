"use client";

import { useEffect, forwardRef } from "react";

const DevfolioButton = forwardRef<HTMLDivElement>((_, ref) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://apply.devfolio.co/v2/sdk.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            ref={ref} // Attach the ref here
            className="apply-button"
            data-hackathon-slug="hackmol-6"
            data-button-theme="dark"
            style={{ height: "44px", width: "312px", cursor: "pointer" }} // Ensure it's clickable
        ></div>
    );
});

// Set display name for debugging in React DevTools
DevfolioButton.displayName = "DevfolioButton";

export default DevfolioButton;
