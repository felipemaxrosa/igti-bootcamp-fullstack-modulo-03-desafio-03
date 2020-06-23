const formatter = Intl.NumberFormat("pt-BR");

function formatNumber(value) {
  return formatter.format(value);
}

function formatPercentage(value) {
  const valueFormated = value.toFixed(2);

  return valueFormated.replace(".", ",") + "%";
}

export { formatNumber, formatPercentage };
