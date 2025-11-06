import { ai_chat } from "./dummy-service";
const apiUrlNew =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_DEV
    : import.meta.env.VITE_API_PROD;

console.log("Current API URL:", apiUrlNew);


export const consultaxService = {
  getAIMsg: async (
    ask: any,
  ) => {
    const url = `${apiUrlNew}/ai_res`;
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ask,
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