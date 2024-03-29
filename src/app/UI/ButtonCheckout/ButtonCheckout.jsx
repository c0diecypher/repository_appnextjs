
'use client'
import { MainButton } from "@twa-dev/sdk/react"

function ButtonPayment({price, onCheckout}){
    const text = `Купить за ${price}`;
    const textColor = Telegram.WebApp.themeParams.button_text_color;
    const color = Telegram.WebApp.themeParams.button_color;
    return (
        <>
        <MainButton 
        onClick={onCheckout}
        text={text}
        color={color}
        textColor={textColor}
        />
        </>
    );
};

export default ButtonPayment;