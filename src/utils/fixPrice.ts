export function convertToPrice(price: number): string {
    let priceProduct = (price / 100).toLocaleString('PT-BR', {style: 'currency', currency: 'brl'});
    return priceProduct;
}