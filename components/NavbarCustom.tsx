import type { NextPage } from "next";
import { Navbar, Spacer, Text, User, Button, Checkbox } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { FaHome, FaBars, FaFlushed, FaCog, FaThLarge } from "react-icons/fa";

import NavbarStyles from "../styles/Navbar.module.css";

import ButtonCustom from "./ButtonCustom";
import CurrentUser from "./CurrentUser";

const NavbarCustom: NextPage = ({ persons, user }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("transparent");
    const [height, setHeight] = useState("5rem");

    useEffect(() => {
        setBackgroundColor(isExpanded ? "#e4e4e414" : "transparent");
        setHeight(isExpanded ? "40rem" : "5rem");
        console.log(isExpanded)
    }, [isExpanded]);
    
    return (
        <div style={{display: "flex", flexDirection: "column", overflow: "hidden",
         alignItems: "flex-start", padding: "1rem 3rem", 
         width: "90%", position: "fixed", marginLeft: "5%", marginRight: "auto", marginTop: "5%",
         top: 0, left: 0, backgroundColor: backgroundColor, 
         backdropFilter: "blur(20px)", zIndex: 300, 
         color: "white", height: height, borderRadius: "2rem", transition: "all .5s"}}>
            <div style={{ display: "flex", flexDirection: "row", 
            justifyContent: "space-between", alignItems: "center", width: "100%"}}>
                <Text h1>Control</Text>
                <FaBars onClick={() => setIsExpanded(!isExpanded)}  className={NavbarStyles.icon} />
            </div>
            <div style={{ display: "flex", gap: "1rem", height: "100%", alignContent: "flex-start",
            flexWrap: "wrap", alignItems: "flex-start",
             justifyContent: "space-evenly", width: "100%" }}>
                <ButtonCustom active><FaHome /> Home</ButtonCustom>
                <ButtonCustom><FaFlushed /> Automations</ButtonCustom>
                <ButtonCustom><FaThLarge /> Groups</ButtonCustom>
                <ButtonCustom><FaCog /> Settings</ButtonCustom>
                {persons.map((person) => {
                    return person.attributes.friendly_name === user.name ? (
                        <div key={person.attributes.friendly_name}>
                            <User
                                key={person.entity_id}
                                src={"http://homeassistant.local:8123" + person.attributes.entity_picture}
                                name={person.attributes.friendly_name}
                            />
                        </div>
                    ) : null })
                }
            </div>
         
        </div>
    );
}

export default NavbarCustom;