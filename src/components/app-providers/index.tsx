import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

const theme = {
    button: {
        defaultProps: {
            color: "0f172a",
        },
    },
};

export const AppProviders = ({ children }) => {
    return <ThemeProvider value={theme}>{children}</ThemeProvider>;
};