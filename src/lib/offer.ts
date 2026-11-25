export const offer = {
  originalPrice: 19.9,
  price: 9.9,
  installmentsText: "3x de R$ 3,53",
  checkoutUrl: "https://pay.hotmart.com/P108316406G?off=oj3ee7ip&checkoutMode=10",
  marketValues: [397, 147, 97, 67],
};

export const masterclass = {
  date: "14/12",
  time: "19:30",
  whatsappUrl: "https://chat.whatsapp.com/GxM7OgqYGidJGI9YutkFBF?s=cl&p=a&iam=2",
  groupLabel: "Entrar no Grupo Viver sem Ansiedade",
};

export const marketTotal = offer.marketValues.reduce((total, value) => total + value, 0);

export const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
