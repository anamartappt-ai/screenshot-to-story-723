export const offer = {
  price: 39.9,
  checkoutUrl: "https://pay.hotmart.com/P108316406G",
  marketValues: [397, 147, 97, 67],
};

export const masterclass = {
  date: "30/11",
  time: "19:30",
  whatsappUrl: "https://chat.whatsapp.com/GxM7OgqYGidJGI9YutkFBF?s=cl&p=a&iam=2",
  groupLabel: "Entrar no Grupo do WhatsApp para a Masterclass",
};

export const marketTotal = offer.marketValues.reduce((total, value) => total + value, 0);

export const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
