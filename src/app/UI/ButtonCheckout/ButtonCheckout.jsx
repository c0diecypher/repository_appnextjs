import { MainButton } from "@twa-dev/sdk/react"

function ButtonPayment({price, handlePayment}){
    const text = `Купить за ${price}`;
    const textColor = window.Telegram.WebApp.themeParams.button_text_color;
    const color = window.Telegram.WebApp.themeParams.button_color;
    return (
        <>
        <MainButton 
        onClick={handlePayment}
        text={text}
        color={color}
        textColor={textColor}
        />
        </>
    );
};

export default ButtonPayment;