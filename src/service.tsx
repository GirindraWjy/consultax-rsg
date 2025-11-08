import { ai_chat } from "./dummy-service";
const urlToBE =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_DEV
    : import.meta.env.VITE_API_PROD;

console.log("Current API URL:", urlToBE);


export const consultaxService = {
  getAIMsg: async (
    userMessage: any,
  ) => {
    const url = `${urlToBE}/chat`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userMessage,
        }),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      return ai_chat;
    }
  },

  getAIMsgPPH: async (
    name: any,
    npwp: any,
    numberOfDependents: any,
    maritalStatus: any,
    jobs: any,
    salaryPerMonthOrDay: any,
    allowances: any,
    runBusiness: any,
    professionalIncome: any,
    rentalIncome: any,
    dividend: any,
    foreignIncome: any,
    assetSold: any,
    prize: any,
    donation: any,
    pensionContribution: any,
    jobExpenses: any,
    officialContribution: any,
    withheldTax: any,
    installmentPayments: any,
    royalties: any,
    additionalNotes: any,

  ) => {
    const url = `${urlToBE}/pphchat`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          npwp,
          numberOfDependents,
          maritalStatus,
          jobs,
          salaryPerMonthOrDay,
          allowances,
          runBusiness,
          professionalIncome,
          rentalIncome,
          dividend,
          foreignIncome,
          assetSold,
          prize,
          donation,
          pensionContribution,
          jobExpenses,
          officialContribution,
          withheldTax,
          installmentPayments,
          royalties,
          additionalNotes
        }),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      return ai_chat;
    }
  },

  getAIMsgGRANTS: async (
    name: any,
    npwpStatus: any,
    NoD: any,
    maritalStatus: any,
    jobs: any,
    typeOfIncome: any,
    sourceOfIncome: any,
    relationWithGrantor: any,
    assetType: any,
    assetValue: any,
    dataReceived: any,
    addNotes: any,
  ) => {
    const url = `${urlToBE}/grantschat`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          npwpStatus,
          NoD,
          maritalStatus,
          jobs,
          typeOfIncome,
          sourceOfIncome,
          relationWithGrantor,
          assetType,
          assetValue,
          dataReceived,
          addNotes
        }),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      return ai_chat;
    }
  },

  getAIMsgInheritance: async (
    nameOfDeceased: any,
    npwpOfDeceased: any,
    unpaidTaxes: any,
    nameOfHeirs: any,
    npwpOfHeirs: any,
    typeOfInheritance: any,
    titleTransferred: any,
    cashReported: any,
    businessIncome: any,
    assetSold: any,
    foreignAssets: any,
    reportedInSPT: any,
    testamentaryGift: any,
    cryptoOrSecurities: any,
    assetValue: any,
    additionalNotes: any,
  ) => {
    const url = `${urlToBE}/inheritanceschat`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nameOfDeceased,
          npwpOfDeceased,
          unpaidTaxes,
          nameOfHeirs,
          npwpOfHeirs,
          typeOfInheritance,
          titleTransferred,
          cashReported,
          businessIncome,
          assetSold,
          foreignAssets,
          reportedInSPT,
          testamentaryGift,
          cryptoOrSecurities,
          assetValue,
          additionalNotes
        }),
      });
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      return ai_chat;
    }
  },
};