export function convertToUsdString(value: number){
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: value % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 2
    }).format(value)
}

export function convertToPositivityString(value: number){
    return value > 0 ? "positive" 
        : value < 0 ? "negative"
        : "neutral"
}