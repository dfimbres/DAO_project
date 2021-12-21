import sdk from "./1-initialize-sdk.js";

const currencyModule = sdk.getCurrencyModule(
  "0x571Ff3EF84cfE41f452c40aAab6805F1DdE1D39b",
);

(async () => {
  try {
    const currency = await currencyModule.get();

    console.log(
      "currency",
      currency
    );


  } catch (error) {
    console.error("Failed to get currency", error);
  }
})();