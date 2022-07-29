export const getCartTotals = (cart, currencySymbol) => {
    return cart?.reduce((totals, current) => {
        totals.totalQuantity = totals.totalQuantity + current.quantity
        totals.totalCost += current.prices?.find((price) => price.currency.symbol === currencySymbol)?.amount * current.quantity
        return totals;
    }, { totalCost: 0, totalQuantity: 0 });
}

export const getAttributes = (attributes) => {
    const firstAttribute = attributes?.find(attribute => attribute.name === 'Size' || attribute.name === 'Capacity')
    const colorAttribute = attributes?.find(attribute => attribute.name === 'Color')
    return [firstAttribute, colorAttribute]
}