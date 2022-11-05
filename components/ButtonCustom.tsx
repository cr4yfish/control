import { FaHome } from "react-icons/fa";
import type { NextPage } from "next";

import ButtonStyles from "../styles/Buttons.module.css";

const ButtonCustom : NextPage = ({ icon, active=false, children }) => {
    return (
        <button style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: active ? "#ccc" : "#D9D9D932",
            outline: "none",
            border: "none",
            borderRadius: "9px",
            padding: ".75rem 1.25rem",
            width: "13rem",
            height: "5rem",
            cursor: "pointer"
        }} className={ButtonStyles.button}>
            <span style={{ fontSize: "16pt",  flexWrap: "wrap", height: "100%",
            color: active ? "black" : "white", 
            display: "flex", "alignItems": "center", 
            justifyContent: "flex-start", width: "100%", gap: "1.25rem" }}>{children}</span>
        </button>
    );
}

export default ButtonCustom;