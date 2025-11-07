import { createEffect, type Component } from "solid-js";
import { Input, InputGroup, InputRightElement } from "@hope-ui/solid";
import "./pph.css";
import PageWrapper from "../wrapper/wrapper";
import { Icon } from "@hope-ui/solid";
import { AiFillCaretLeft } from "solid-icons/ai";
import send from "../../assets/png/send-icon.png"
import kiri from "../../assets/png/gambar kiri.png"
import kanan from "../../assets/png/gambar kanan.png"
import { _allowances, _assetSold, _dependents, _dividend, _donation, _foreignIncome, _installmentPayments, _jobExpenses, _jobs, _marital, _name, _npwp, _officialContribution, _pensionContribution, _prize, _proIncome, _rentalIncome, _royalties, _runBusiness, _salary, _setAllowances, _setAssetSold, _setDependents, _setDividend, _setDonation, _setForeignIncome, _setInstallmentPayments, _setJobExpenses, _setJobs, _setMarital, _setName, _setNPWP, _setOfficialContribution, _setPentionContribution, _setPrize, _setProIncome, _setRentalIncome, _setRoyalties, _setRunBusiness, _setSalary, _setWithHeldTax, _withHeldTax, getDataPPH } from "../../store/store";
import { useNavigate } from "@solidjs/router";

const PPH: Component = () => {
  const navigate = useNavigate();

  const formatNumber = (value: string) => {
    const num = value.replace(/\D/g, "");
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };


  return (
    <PageWrapper>
      <div class="font-[Plus_Jakarta_Sans] flex justify-center items-center h-full p-10">
        <div class="container-pph">
          <div class="w-full flex justify-between">
            <div class="flex items-center gap-3">
              <a href="/home">
                <Icon as={AiFillCaretLeft} color="$neutral10" />
              </a>
              <div class="font-semibold">Tabel of PPH</div>
            </div>
            <a href="/message">
              <img src={send} onClick={() => { navigate("/message"); getDataPPH(); }} class="w-10 h-10" alt="" />
            </a>
          </div>
          <div class="relative z-10">
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-6">
                <p class="text-sm h-[2.5vh] flex items-end">Name*</p>
                <Input value={_name()} onInput={(e: any) => _setName(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">NPWP*</p>
                <Input value={_npwp()} onInput={(e: any) => _setNPWP(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Number of Dependents*</p>
                <Input inputMode="numeric" value={formatNumber(_dependents())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setDependents(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Marital Status*</p>
                <Input value={_marital()} onInput={(e: any) => _setMarital(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Jobs*</p>
                <Input value={_jobs()} onInput={(e: any) => _setJobs(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Salary permonths/wages perdays*</p>
                <Input inputMode="numeric" value={formatNumber(_salary())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setSalary(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you receive allowances?</p>
                <Input inputMode="numeric" value={formatNumber(_allowances())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setAllowances(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you run a bussiness?</p>
                <Input value={_runBusiness()} onInput={(e: any) => _setRunBusiness(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you have profesional income?</p>
                <Input inputMode="numeric" value={formatNumber(_proIncome())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setProIncome(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you earn rental income?</p>
                <Input inputMode="numeric" value={formatNumber(_rentalIncome())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setRentalIncome(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you receive dividen?</p>
                <Input inputMode="numeric" value={formatNumber(_dividend())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setDividend(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you have income from abroad?</p>
                <Input inputMode="numeric" value={formatNumber(_foreignIncome())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setForeignIncome(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Did you sell any assets?</p>
                <Input inputMode="numeric" value={formatNumber(_assetSold())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setAssetSold(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Did you received prize?</p>
                <Input inputMode="numeric" value={formatNumber(_prize())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setPrize(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you receive donation?</p>
                <Input inputMode="numeric" value={formatNumber(_donation())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setDonation(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you pay pension social security contribution?</p>
                <Input inputMode="numeric" value={formatNumber(_pensionContribution())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setPentionContribution(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you have job-related expenses(for employes)</p>
                <Input inputMode="numeric" value={formatNumber(_jobExpenses())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setJobExpenses(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you make mandatory contribution to official organitation?</p>
                <Input inputMode="numeric" value={formatNumber(_officialContribution())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setOfficialContribution(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Has any income tax been withheld by other parties?</p>
                <Input inputMode="numeric" value={formatNumber(_withHeldTax())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setWithHeldTax(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh] justify-center">
              <div class="col-span-3 col-start-4">
                <p class="text-sm h-[2.5vh] flex items-end">Have you made any installment payments?</p>
                <Input inputMode="numeric" value={formatNumber(_installmentPayments())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setInstallmentPayments(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you receive royalties?</p>
                <Input inputMode="numeric" value={formatNumber(_royalties())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setRoyalties(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
          </div>

          <div class="absolute bottom-0 left-0 w-full flex justify-between z-0 pointer-events-none">
            <img src={kiri} alt="kiri" class="h-48 object-contain" />
            <img src={kanan} alt="kanan" class="h-48 object-contain" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PPH;
