import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

function ApiWhatsapp() {
    return (
        <>
            <ReactWhatsappButton
                countryCode="91"
                phoneNumber="6388249438"
                animated
                callback={function noRefCheck() { }}
                style={{
                    marginBottom: "70px",
                    size: "500px"
                }}
            />
        </>
    )
}

export default ApiWhatsapp;