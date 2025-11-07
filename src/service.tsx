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
  

};

// {
//     "name": "Andika Pratama",
//     "npwp": "Terdaftar",
//     "numberOfDependents": 2,
//     "maritalStatus": "Menikah",
//     "jobs": "Karyawan Swasta",
//     "salaryPerMonthOrDay": 12000000,
//     "allowances": 2500000,
//     "runBusiness": false,
//     "professionalIncome": 0,
//     "rentalIncome": 15000000,
//     "dividend": 5000000,
//     "foreignIncome": 0,
//     "assetSold": 0,
//     "prize": 2000000,
//     "donation": 1000000,
//     "pensionContribution": 600000,
//     "jobExpenses": 5,
//     "officialContribution": 200000,
//     "withheldTax": 18000000,
//     "installmentPayments": 0,
//     "royalties": 3000000,
//     "additionalNotes": "Penghasilan dari sewa properti rumah pribadi selama 6 bulan dan menerima dividen dari saham perusahaan lokal. Tidak memiliki penghasilan luar negeri."
// }
