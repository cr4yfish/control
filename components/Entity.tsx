import { FaHome } from "react-icons/fa";
import type { NextPage } from "next";
import React from "react";
import { Backdrop, Text, Switch } from "@nextui-org/react";

// import nouislider
import 'nouislider/dist/nouislider.css';

const calcColor = (color) => {
    // get color => [r,g,b]
    const rgbColor = color;
    return rgbColor ? `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})` : "rgb(255,255,255)";
}

const Entity : NextPage = ({ light, callService, connection }) => {
    const [current, setCurrent] = React.useState([]);
    const [isOn, setIsOn] = React.useState(light.state == "on" ? true : false);
    const [currentColor, setCurrentColor] = React.useState(calcColor(light.attributes.rgb_color));

    const foreground = "#cc24";

    const handleToggle = () => {
        setIsOn(!isOn);
        callService(connection, "homeassistant", "toggle", {
            entity_id: light.entity_id,
          })
    }

    // make slider
    React.useEffect(() => {
        console.log(current);
        if(typeof window !== "undefined") {
            (async () => {
                const noUiSlider = (await import("nouislider")).default;
                const slider = document.getElementById(light.entity_id);

                // fix "Slider was already initialized" error
                if (slider.noUiSlider) {
                    slider.noUiSlider.destroy();
                }

                noUiSlider.create(slider, {
                    start: [light.attributes.brightness],
                    range: {
                        'min': [0],
                        'max': [255]
                    },
                    connect: [true, false],
                    behaviour: "drag"
                })

                slider.noUiSlider.on("change", (values, handle) => {
                    setCurrent(values[handle]);
                    callService(connection, "homeassistant", "turn_on", {
                        entity_id: light.entity_id,
                        brightness: parseInt(values[handle])
                    })
                })
            })()
        }
    }, []);

    return (
    <div style={{
        width: "100%",
        position: "relative"
    }}>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            zIndex: 300,
            width: "100%",
            height: "100%",
            padding: "1rem",
            pointerEvents: "none"
        }}>
            <Text h3 style={{
                margin: 0
            }}>{light.attributes.friendly_name}</Text>
            <Switch checked={isOn} initialChecked={isOn} 
            onChange={() => handleToggle()} style={{
                pointerEvents: "all"
            }} />
        </div>

        <div style={{width: "100%"}} id={light.entity_id}>
        <style global jsx>{`
            .noUi-handle {
                background: transparent !important;
                border: none !important;
                box-shadow: none !important;
                height: 5rem !important;
            }
            .noUi-handle::before, .noUi-handle::after {
                background: transparent !important;
            }
            .noUi-target {
                background-color: ${currentColor} !important;
                height: 5rem !important;
                border: none !important;
                border-radius: 1rem !important;
            }
            .noUi-connect {
                background-color: ${foreground} !important;
            }
        `}</style>
            
        </div>
    </div>
    
    );
}

export default Entity;