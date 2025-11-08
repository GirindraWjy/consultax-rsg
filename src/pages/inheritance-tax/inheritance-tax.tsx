import type { Component } from "solid-js";
import { ChevronLeftIcon, ChevronRightIcon } from "@hope-ui/solid";
import { Input, InputGroup, InputRightElement } from "@hope-ui/solid";
import { Icon } from "@hope-ui/solid";
import { AiFillCaretLeft } from "solid-icons/ai";
import "./inheritance-tax.css";
import send from "../../assets/png/send-icon.png"
import kiri from "../../assets/png/gambar kiri.png"
import kanan from "../../assets/png/gambar kanan.png"
import balik from "../../assets/png/arrow.png"
import PageWrapper from "../wrapper/wrapper";
import { _additionalNotesINHERITANCE, _assetSoldINHERITANCE, _assetValue, _businessIncome, _cashReported, _cryptoOrSecurities, _foreignAssets, _nameOfDeceased, _nameOfHeirs, _npwpOfDeceased, _npwpOfHeirs, _reportedInSPT, _setAdditionalNotesINHERITANCE, _setAssetSoldINHERITANCE, _setAssetValue, _setBusinessIncome, _setCashReported, _setCryptoOrSecurities, _setForeignAssets, _setNameOfDeceased, _setNameOfHeirs, _setNpwpOfDeceased, _setNpwpOfHeirs, _setReportedInSPT, _setTestamentaryGift, _setTitleTransferred, _setTypeOfInheritance, _setUnpaidTaxes, _testamentaryGift, _titleTransferred, _typeOfInheritance, _unpaidTaxes, getDataINHERITANCE } from "../../store/store";
import { notificationService } from "@hope-ui/solid";
import { useNavigate } from "@solidjs/router";

const InheritanceTable: Component = () => {
  const navigate = useNavigate();

  const formatNumber = (value: string) => {
    const num = value.replace(/\D/g, "");
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleSubmit = () => {
    if (
      !_nameOfDeceased().trim() ||
      !_npwpOfDeceased().trim() ||
      !_nameOfHeirs().trim() ||
      !_npwpOfHeirs().trim() ||
      !_typeOfInheritance().trim() ||
      !_reportedInSPT().trim() ||
      !_testamentaryGift().trim() ||
      !_assetValue().trim() ||
      !_additionalNotesINHERITANCE().trim()
    ) {
      notificationService.show({
        status: "warning",
        title: "Peringatan",
        description: 'Kolom dengan tanda "*" wajib diisi',
        duration: 3000,
      });
      return false;
    }

    return true;
  };
  return (
    <PageWrapper>
      <div class="font-[Plus_Jakarta_Sans] flex justify-center items-center h-full">
        <div class="container-inheritance hidden md:block">
          <div class="w-full flex justify-between">
            <a href="/home">
              <div class="flex items-center gap-3">
                {/* <Icon as={AiFillCaretLeft} color="$neutral10" /> */}
                <img src={balik} class="w-4 h-4" alt="" />
                <div class="font-semibold">Tabel of Inheritance</div>
              </div>
            </a>
            <img
              src={send}
              alt=""
              class="w-10 h-10 cursor-pointer"
              onClick={() => {
                if (handleSubmit()) {
                  navigate("/message");
                  getDataINHERITANCE();
                }
              }}
            />
          </div>
          <div class="relative z-10">
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-6">
                <p class="text-sm h-[4vh] flex items-end">Name of deceased*</p>
                <Input value={_nameOfDeceased()} onInput={(e: any) => _setNameOfDeceased(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[4vh] flex items-end">Have NPWP of the deceased*</p>
                <Input value={_npwpOfDeceased()} onInput={(e: any) => _setNpwpOfDeceased(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[4vh] flex items-end">Did the deceased leave any unpaid taxes?</p>
                <Input inputMode="numeric" value={formatNumber(_unpaidTaxes())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setUnpaidTaxes(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-3">
                <p class="text-sm h-[4vh] flex items-end">Name Of Heirs*</p>
                <Input value={_nameOfHeirs()} onInput={(e: any) => _setNameOfHeirs(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[4vh] flex items-end">Have NPWP of each heirs*</p>
                <Input value={_npwpOfHeirs()} onInput={(e: any) => _setNpwpOfHeirs(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[4vh] flex items-end">Type of Inheritance*</p>
                <Input value={_typeOfInheritance()} onInput={(e: any) => _setTypeOfInheritance(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[4vh] flex items-end">If inheritance is land /building Has the title been transferred?</p>
                <Input inputMode="numeric" value={formatNumber(_titleTransferred())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setTitleTransferred(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-3">
                <p class="text-sm h-[4vh] flex items-end">If inheritance is cash/deposit was it reported?</p>
                <Input value={_cashReported()} onInput={(e: any) => _setCashReported(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[4vh] flex items-end">If inheritance is Business Does it generate income after transfer?</p>
                <Input value={_businessIncome()} onInput={(e: any) => _setBusinessIncome(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[4vh] flex items-end">Has any assets been sold by the heirs?</p>
                <Input value={_assetSoldINHERITANCE()} onInput={(e: any) => _setAssetSoldINHERITANCE(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[4vh] flex items-end">Were foreign assets inherited?</p>
                <Input value={_foreignAssets()} onInput={(e: any) => _setForeignAssets(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-3">
                <p class="text-sm h-[4vh] flex items-end">Have all heirs reported inherited assets in their SPT?*</p>
                <Input value={_reportedInSPT()} onInput={(e: any) => _setReportedInSPT(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[4vh] flex items-end">Is There a testamentary gift*</p>
                <Input value={_testamentaryGift()} onInput={(e: any) => _setTestamentaryGift(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[4vh] flex items-end">Are there any inherited assets in the form of foreign securities/crypto?</p>
                <Input value={_cryptoOrSecurities()} onInput={(e: any) => _setCryptoOrSecurities(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Asset Value*</p>
                <Input inputMode="numeric" value={formatNumber(_assetValue())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setAssetValue(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-4 col-start-5">
                <div class="flex flex-col items-center">
                  <p class="text-sm h-[4vh] flex items-end">Additional notes*</p>
                  <Input value={_additionalNotesINHERITANCE()} onInput={(e: any) => _setAdditionalNotesINHERITANCE(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
                </div>
              </div>
            </div>
          </div>

          <div class="absolute bottom-0 left-0 w-full flex justify-between z-0 pointer-events-none">
            <img src={kiri} alt="kiri" class="h-48 object-contain" />
            <img src={kanan} alt="kanan" class="h-48 object-contain" />
          </div>
        </div>

        {/* mobile */}
        <div class="container-inheritance-mobile block md:hidden">
          <div class="w-full flex justify-between">
            <a href="/home">
              <div class="flex items-center gap-3">
                {/* <Icon as={AiFillCaretLeft} color="$neutral10" /> */}
                <img src={balik} class="w-4 h-4" alt="" />
                <div class="font-semibold">Tabel of Inheritance</div>
              </div>
            </a>
            <img
              src={send}
              alt=""
              class="w-10 h-10 cursor-pointer"
              onClick={() => {
                if (handleSubmit()) {
                  navigate("/message");
                  getDataINHERITANCE();
                }
              }}
            />
          </div>
          <div class="relative z-10">
            <div class="flex flex-col overflow-scroll h-[80vh]">
              <div>
                <p class="text-xs h-[4vh] flex items-end">Name of deceased*</p>
                <Input value={_nameOfDeceased()} onInput={(e: any) => _setNameOfDeceased(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">Have NPWP of the deceased*</p>
                <Input value={_npwpOfDeceased()} onInput={(e: any) => _setNpwpOfDeceased(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">Did the deceased leave any unpaid taxes?</p>
                <Input inputMode="numeric" value={formatNumber(_unpaidTaxes())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setUnpaidTaxes(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">Name Of Heirs*</p>
                <Input value={_nameOfHeirs()} onInput={(e: any) => _setNameOfHeirs(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">Have NPWP of each heirs*</p>
                <Input value={_npwpOfHeirs()} onInput={(e: any) => _setNpwpOfHeirs(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">Type of Inheritance*</p>
                <Input value={_typeOfInheritance()} onInput={(e: any) => _setTypeOfInheritance(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">If inheritance is land /building Has the title been transferred?</p>
                <Input inputMode="numeric" value={formatNumber(_titleTransferred())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setTitleTransferred(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">If inheritance is cash/deposit was it reported?</p>
                <Input value={_cashReported()} onInput={(e: any) => _setCashReported(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">If inheritance is Business Does it generate income after transfer?</p>
                <Input value={_businessIncome()} onInput={(e: any) => _setBusinessIncome(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">Has any assets been sold by the heirs?</p>
                <Input value={_assetSoldINHERITANCE()} onInput={(e: any) => _setAssetSoldINHERITANCE(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">Were foreign assets inherited?</p>
                <Input value={_foreignAssets()} onInput={(e: any) => _setForeignAssets(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">Have all heirs reported inherited assets in their SPT?*</p>
                <Input value={_reportedInSPT()} onInput={(e: any) => _setReportedInSPT(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">Is There a testamentary gift*</p>
                <Input value={_testamentaryGift()} onInput={(e: any) => _setTestamentaryGift(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">Are there any inherited assets in the form of foreign securities/crypto?</p>
                <Input value={_cryptoOrSecurities()} onInput={(e: any) => _setCryptoOrSecurities(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">Additional notes*</p>
                <Input value={_additionalNotesINHERITANCE()} onInput={(e: any) => _setAdditionalNotesINHERITANCE(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[4vh] flex items-end">Asset Value*</p>
                <Input inputMode="numeric" value={formatNumber(_assetValue())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setAssetValue(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default InheritanceTable;
