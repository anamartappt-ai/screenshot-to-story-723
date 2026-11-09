export const offer = {
  price: 39.9,
  checkoutUrl: "https://pay.hotmart.com/P108316406G",
  marketValues: [397, 147, 97, 197],
  giftPriceToday: 0,
  giftIncludes: { liveMasterclass: true, whatsappGroup: true },
};

export const marketTotal = offer.marketValues.reduce((total, value) => total + value, 0);
export const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);