// store.tsx
import { createSignal } from "solid-js";
import { consultaxService } from "../service";


// GLOBAL
export const [_sendMsg, _setSendMsg] = createSignal("");
export const [_takeMsg, _setTakeMsg] = createSignal("");
export const [_answer, _setAnswer] = createSignal("");
export const [_chatHistory, _setChatHistory] = createSignal<{ user?: string; ai?: string }[]>([]);
export const [_loading, _setLoading] = createSignal(false);

// PPH
export const [_name, _setName] = createSignal("");
export const [_npwp, _setNPWP] = createSignal("");
export const [_dependents, _setDependents] = createSignal("");
export const [_marital, _setMarital] = createSignal("");
export const [_jobs, _setJobs] = createSignal("");
export const [_salary, _setSalary] = createSignal("");
export const [_allowances, _setAllowances] = createSignal("");
export const [_runBusiness, _setRunBusiness] = createSignal("");
export const [_proIncome, _setProIncome] = createSignal("");
export const [_rentalIncome, _setRentalIncome] = createSignal("");
export const [_dividend, _setDividend] = createSignal("");
export const [_foreignIncome, _setForeignIncome] = createSignal("");
export const [_assetSold, _setAssetSold] = createSignal("");
export const [_prize, _setPrize] = createSignal("");
export const [_donation, _setDonation] = createSignal("");
export const [_pensionContribution, _setPentionContribution] = createSignal("");
export const [_jobExpenses, _setJobExpenses] = createSignal("");
export const [_officialContribution, _setOfficialContribution] = createSignal("");
export const [_withHeldTax, _setWithHeldTax] = createSignal("");
export const [_installmentPayments, _setInstallmentPayments] = createSignal("");
export const [_royalties, _setRoyalties] = createSignal("");
export const [_additialNotes, _setAdditionalNotes] = createSignal("");

export const getData = () => {
    const userMessage = _sendMsg().trim();
    if (!userMessage) return;

    _setChatHistory(prev => [...prev, { user: userMessage }]);

    let aiIndex = -1;
    _setChatHistory(prev => {
        aiIndex = prev.length;
        return [...prev, { ai: "loading" }];
    });

    _setLoading(true);

    consultaxService.getAIMsg(userMessage).then((data: any) => {
        const aiMessage = data.reply;

        _setChatHistory(prev => {
            const newHistory = [...prev];
            newHistory[aiIndex] = { ai: aiMessage };
            return newHistory;
        });

        _setLoading(false);
    });

    _setSendMsg("");
};

export const getDataPPH = () => {
    const userMessage = `
        Name : ${_name() || "-"}
        • NPWP : ${_npwp() || "-"}
        • Number of Dependents : ${_dependents() || "-"}
        • Marital Status : ${_marital() || "-"}
        • Jobs : ${_jobs() || "-"}
        • Salary per Month / Wages per Day : Rp ${_salary() || "0"}
        • Allowances : Rp ${_allowances() || "0"}
        • Running a Business : ${_runBusiness() || "-"}
        • Professional Income : Rp ${_proIncome() || "0"}
        • Rental Income : Rp ${_rentalIncome() || "0"}
        • Dividend : Rp ${_dividend() || "0"}
        • Foreign Income : Rp ${_foreignIncome() || "0"}
        • Asset Sold : Rp ${_assetSold() || "0"}
        • Prize : Rp ${_prize() || "0"}
        • Donation : Rp ${_donation() || "0"}
        • Pension Contribution : Rp ${_pensionContribution() || "0"}
        • Job Expenses : Rp ${_jobExpenses() || "0"}
        • Official Contribution : Rp ${_officialContribution() || "0"}
        • Withheld Tax : Rp ${_withHeldTax() || "0"}
        • Installment Payments : Rp ${_installmentPayments() || "0"}
        • Royalties : Rp ${_royalties() || "0"}
        • Additional Notes : ${_additialNotes() || "-"}

        Please calculate the PPh that must be paid (monthly and annually) based on the information above.
    `.trim();

    if (!userMessage) return;

    _setChatHistory(prev => [...prev, { user: userMessage }]);

    let aiIndex = -1;
    _setChatHistory(prev => {
        aiIndex = prev.length;
        return [...prev, { ai: "loading" }];
    });

    _setLoading(true);

    consultaxService
        .getAIMsgPPH(
            _name(),
            _npwp(),
            _dependents(),
            _marital(),
            _jobs(),
            _salary(),
            _allowances(),
            _runBusiness(),
            _proIncome(),
            _rentalIncome(),
            _dividend(),
            _foreignIncome(),
            _assetSold(),
            _prize(),
            _donation(),
            _pensionContribution(),
            _jobExpenses(),
            _officialContribution(),
            _withHeldTax(),
            _installmentPayments(),
            _royalties(),
            _additialNotes()
        )
        .then((data: any) => {
            const aiMessage = data.reply;
            _setChatHistory(prev => {
                const newHistory = [...prev];
                newHistory[aiIndex] = { ai: aiMessage };
                return newHistory;
            });
            _setLoading(false);
        })

    _setSendMsg("");
};
