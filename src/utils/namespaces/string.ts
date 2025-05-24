export function formatToNaira(amount: number) {
  try {
    const formattedAmount = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
    return formattedAmount;
  } catch (error) {
    console.error("Error formatting to Naira:", error);
    return "Invalid amount";
  }
}

// function abbreviateCurrency(amount: number) {
//   const factor = amount % 1000;
// }
