function format3(n, currency) {
  return new Intl.NumberFormat("es-PY", {
    style: "currency",
    currency: currency
  }).format(n);
}

const normalizePhone = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, "");

  if (onlyNums.length <= 20) {
    return format3(onlyNums, "PYG");
  }
};

const CoverteNum = value => {
  const str = value || "";
  const convertido = str.toString().replace(/[^\d]/g, "");

  return convertido;
};
// const CoverteMoeda = value => {
//   if (!value) {
//     return value;
//   }
//   const onlyNums = value.replace(/[^\d]/g, "");

//   if (onlyNums.length <= 20) {
//     return format3(onlyNums, "PYG");
//   }
// };

export { CoverteNum };
export default normalizePhone;
