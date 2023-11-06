export const getLinerGradientColor = (
    price: number,
    direction: 'right' | 'left' = 'left',
) => {
    const red = Math.floor((price / 100) * 255);
    const green = Math.floor(((100 - price) / 100) * 255);
    const yellow = Math.floor((price / 100) * 255);

    return `linear-gradient(to ${direction}, rgb(0, ${green}, 0), rgb(${yellow}, ${yellow}, 0), rgb(${red}, 0, 0))`;
};

export const getBlackAndWightColor = (price: number) => {
    const red = Math.floor(255 - (price / 100) * 255);

    return `rgb(${red}, ${red}, ${red})`;
};
