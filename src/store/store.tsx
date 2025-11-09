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

// GRANTS
export const [_nameGRANTS, _setNameGRANTS] = createSignal("");
export const [_npwpGRANTS, _setNPWPGRANTS] = createSignal("");
export const [_nodGRANTS, _setNODGRANTS] = createSignal("");
export const [_maritalGRANTS, _setMaritalGRANTS] = createSignal("");
export const [_jobGRANTS, _setJobGRANTS] = createSignal("");
export const [_typeIncomeGRANTS, _setTypeIncomeGRANTS] = createSignal("");
export const [_sourceIncomeGRANTS, _setSourceIncomeGRANTS] = createSignal("");
export const [_relationsGRANTS, _setRelationGRANTS] = createSignal("");
export const [_assetTypeGRANTS, _setAssetTypeGRANTS] = createSignal("");
export const [_assetValueGRANTS, _setAssetValueGRANTS] = createSignal("");
export const [_dataReceivedGRANTS, _setDataReceivedGRANTS] = createSignal("");
export const [_addNotesGRANTS, _setAddNoteGRANTS] = createSignal("");


//INHERITANCE
export const [_nameOfDeceased, _setNameOfDeceased] = createSignal("");
export const [_npwpOfDeceased, _setNpwpOfDeceased] = createSignal("");
export const [_unpaidTaxes, _setUnpaidTaxes] = createSignal("");
export const [_nameOfHeirs, _setNameOfHeirs] = createSignal("");
export const [_npwpOfHeirs, _setNpwpOfHeirs] = createSignal("");
export const [_typeOfInheritance, _setTypeOfInheritance] = createSignal("");
export const [_titleTransferred, _setTitleTransferred] = createSignal("");
export const [_cashReported, _setCashReported] = createSignal("");
export const [_businessIncome, _setBusinessIncome] = createSignal("");
export const [_assetSoldINHERITANCE, _setAssetSoldINHERITANCE] = createSignal("");
export const [_foreignAssets, _setForeignAssets] = createSignal("");
export const [_reportedInSPT, _setReportedInSPT] = createSignal("");
export const [_testamentaryGift, _setTestamentaryGift] = createSignal("");
export const [_cryptoOrSecurities, _setCryptoOrSecurities] = createSignal("");
export const [_assetValue, _setAssetValue] = createSignal("");
export const [_additionalNotesINHERITANCE, _setAdditionalNotesINHERITANCE] = createSignal("");


export const getData = () => {
    const userMessage = _sendMsg().trim();
    if (!userMessage) return;

    _setChatHistory(prev => [...prev, { user: userMessage }]);

    let aiIndex = -1;
    _setChatHistory(prev => {
        aiIndex = prev.length;
        return [...prev, { ai: "loading" }];
    });

    const prevChats = _chatHistory();
    const userChats = prevChats.filter((chat) => chat.user);
    const historyChat =
        userChats.length >= 2 ? userChats[userChats.length - 2].user || "" : "";

    _setLoading(true);

    consultaxService.getAIMsg(userMessage, historyChat).then((data: any) => {
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

        Silakan hitung jumlah Pajak Penghasilan (PPh) yang harus dibayar (bulanan dan tahunan) berdasarkan informasi di atas

    `.trim();

    if (!userMessage) return;

    _setChatHistory(prev => [...prev, { user: userMessage }]);

    let aiIndex = -1;
    _setChatHistory(prev => {
        aiIndex = prev.length;
        return [...prev, { ai: "loading" }];
    });
    const prevChats = _chatHistory();
    const userChats = prevChats.filter((chat) => chat.user);
    const historyChat =
        userChats.length >= 2 ? userChats[userChats.length - 2].user || "" : "";

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
            _additialNotes(),
            historyChat,
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

export const getDataGRANTS = () => {
    const userMessage = `
        Name : ${_nameGRANTS() || "-"}
        • NPWP : ${_npwpGRANTS() || "-"}
        • Number of Dependents : Rp ${_nodGRANTS() || "-"}
        • Marital Status : ${_maritalGRANTS() || "-"}
        • Jobs : ${_jobGRANTS() || "-"}
        • Type of Income : ${_typeIncomeGRANTS() || "0"}
        • Source of Income : ${_sourceIncomeGRANTS() || "0"}
        • Relations with Grantor : ${_relationsGRANTS() || "0"}
        • Type of Assets : ${_assetTypeGRANTS() || "-"}
        • Value of Assets : Rp ${_assetValueGRANTS() || "-"}
        • Data Received : ${_dataReceivedGRANTS() || "0"}
        • Additional Notes : ${_addNotesGRANTS() || "-"}

        Silakan hitung pajak hibah dan warisan yang harus dibayar berdasarkan data di atas
    `.trim();

    if (!userMessage) return;

    _setChatHistory(prev => [...prev, { user: userMessage }]);

    let aiIndex = -1;
    _setChatHistory(prev => {
        aiIndex = prev.length;
        return [...prev, { ai: "loading" }];
    });

    const prevChats = _chatHistory();
    const userChats = prevChats.filter((chat) => chat.user);
    const historyChat =
        userChats.length >= 2 ? userChats[userChats.length - 2].user || "" : "";

    _setLoading(true);

    consultaxService
        .getAIMsgGRANTS(
            _nameGRANTS(),
            _npwpGRANTS(),
            _nodGRANTS(),
            _maritalGRANTS(),
            _jobGRANTS(),
            _typeIncomeGRANTS(),
            _sourceIncomeGRANTS(),
            _relationsGRANTS(),
            _assetTypeGRANTS(),
            _assetValueGRANTS(),
            _dataReceivedGRANTS(),
            _addNotesGRANTS(),
            historyChat,
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


export const getDataINHERITANCE = () => {
    const userMessage = `
        Name of Deceased : ${_nameOfDeceased() || "-"}
        • NPWP of Deceased : ${_npwpOfDeceased() || "-"}
        • Unpaid Taxes : Rp ${_unpaidTaxes() || "-"}
        • Name of Heirs : ${_nameOfHeirs() || "-"}
        • NPWP of Heirs : ${_npwpOfHeirs() || "-"}
        • Type of Inheritance : ${_typeOfInheritance() || "-"}
        • Title Transferred : ${_titleTransferred() || "-"}
        • Cash Reported : Rp ${_cashReported() || "-"}
        • Business Income : Rp ${_businessIncome() || "-"}
        • Asset Sold : ${_assetSoldINHERITANCE() || "-"}
        • Foreign Assets : ${_foreignAssets() || "-"}
        • Reported in SPT : ${_reportedInSPT() || "-"}
        • Testamentary Gift : ${_testamentaryGift() || "-"}
        • Crypto or Securities : ${_cryptoOrSecurities() || "-"}
        • Asset Value : Rp ${_assetValue() || "-"}
        • Additional Notes : ${_additionalNotesINHERITANCE() || "-"}

        Silakan analisis kewajiban pajak atas warisan berdasarkan data yang tercantum di atas.
        `.trim();

    if (!userMessage) return;

    _setChatHistory(prev => [...prev, { user: userMessage }]);

    let aiIndex = -1;
    _setChatHistory(prev => {
        aiIndex = prev.length;
        return [...prev, { ai: "loading" }];
    });

    const prevChats = _chatHistory();
    const userChats = prevChats.filter((chat) => chat.user);
    const historyChat =
        userChats.length >= 2 ? userChats[userChats.length - 2].user || "" : "";

    _setLoading(true);

    consultaxService
        .getAIMsgInheritance(
            _nameOfDeceased(),
            _npwpOfDeceased(),
            _unpaidTaxes(),
            _nameOfHeirs(),
            _npwpOfHeirs(),
            _typeOfInheritance(),
            _titleTransferred(),
            _cashReported(),
            _businessIncome(),
            _assetSoldINHERITANCE(),
            _foreignAssets(),
            _reportedInSPT(),
            _testamentaryGift(),
            _cryptoOrSecurities(),
            _assetValue(),
            _additionalNotesINHERITANCE(),
            historyChat,
        ).then((data: any) => {
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
