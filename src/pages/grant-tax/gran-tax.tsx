import type { Component } from "solid-js";
import { Input, InputGroup, InputRightElement } from "@hope-ui/solid";
import "./grant-tax.css";
import PageWrapper from "../wrapper/wrapper";
import { Icon } from "@hope-ui/solid";
import { AiFillCaretLeft } from "solid-icons/ai";
import send from "../../assets/png/send-icon.png"
import kiri from "../../assets/png/gambar kiri.png"
import kanan from "../../assets/png/gambar kanan.png"
import { notificationService } from "@hope-ui/solid";
import { _addNotesGRANTS, _assetTypeGRANTS, _assetValueGRANTS, _dataReceivedGRANTS, _jobGRANTS, _maritalGRANTS, _nameGRANTS, _nodGRANTS, _npwpGRANTS, _setAddNoteGRANTS, _setAssetTypeGRANTS, _setAssetValueGRANTS, _setDataReceivedGRANTS, _setJobGRANTS, _setMaritalGRANTS, _setNameGRANTS, _setNODGRANTS, _setNPWPGRANTS, _setSourceIncomeGRANTS, _setTypeIncomeGRANTS, _sourceIncomeGRANTS, _typeIncomeGRANTS, getDataGRANTS } from "../../store/store";
import { useNavigate } from "@solidjs/router";

const GrantTax: Component = () => {
  const navigate = useNavigate();

  const formatNumber = (value: string) => {
    const num = value.replace(/\D/g, "");
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleSubmit = () => {
    if (
      !_nameGRANTS().trim() ||
      !_npwpGRANTS().trim() ||
      !_maritalGRANTS().trim() ||
      !_jobGRANTS().trim() ||
      !_sourceIncomeGRANTS().trim() ||
      !_assetTypeGRANTS().trim() ||
      !_assetValueGRANTS().trim() ||
      !_assetValueGRANTS().trim() ||
      !_dataReceivedGRANTS().trim() ||
      !_addNotesGRANTS().trim() ||
      !_typeIncomeGRANTS().trim()
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
        <div class="container-grant hidden md:block">
          <div class="w-full flex justify-between">
            <a href="/home">
              <div class="flex items-center gap-3">
                <Icon as={AiFillCaretLeft} color="$neutral10" />
                <div class="font-semibold">Tabel of Grants</div>
              </div>
            </a>
            <img
              src={send}
              alt=""
              class="w-10 h-10 cursor-pointer"
              onClick={() => {
                if (handleSubmit()) {
                  navigate("/message");
                  getDataGRANTS();
                }
              }}
            />
          </div>
          <div class="relative z-10">
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-6">
                <p class="text-sm h-[2.5vh] flex items-end">Name*</p>
                <Input value={_nameGRANTS()} onInput={(e: any) => _setNameGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">NPWP*</p>
                <Input value={_npwpGRANTS()} onInput={(e: any) => _setNPWPGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Number of Dependents*</p>
                <Input inputMode="numeric" value={formatNumber(_nodGRANTS())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setNODGRANTS(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Marital Status*</p>
                <Input value={_maritalGRANTS()} onInput={(e: any) => _setMaritalGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Jobs*</p>
                <Input value={_jobGRANTS()} onInput={(e: any) => _setJobGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Type of Income*</p>
                <Input value={_typeIncomeGRANTS()} onInput={(e: any) => _setTypeIncomeGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Source of Income*</p>
                <Input value={_sourceIncomeGRANTS()} onInput={(e: any) => _setSourceIncomeGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Asset Type*</p>
                <Input value={_assetTypeGRANTS()} onInput={(e: any) => _setAssetTypeGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Asset Value*</p>
                <Input inputMode="numeric" value={formatNumber(_assetValueGRANTS())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setAssetValueGRANTS(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Date Received*</p>
                <Input value={_dataReceivedGRANTS()} onInput={(e: any) => _setDataReceivedGRANTS(e.currentTarget.value)} type="date" style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Additional Notes*</p>
                <Input value={_addNotesGRANTS()} onInput={(e: any) => _setAddNoteGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
          </div>

          <div class="absolute bottom-0 left-0 w-full flex justify-between z-0 pointer-events-none">
            <img src={kiri} alt="kiri" class="h-48 object-contain" />
            <img src={kanan} alt="kanan" class="h-48 object-contain" />
          </div>
        </div>

        {/* mobile */}
        <div class="container-grant-mobile block md:hidden">
          <div class="w-full flex justify-between">
            <a href="/home">
              <div class="flex items-center gap-3">
                <Icon as={AiFillCaretLeft} color="$neutral10" />
                <div class="font-semibold">Tabel of Grants</div>
              </div>
            </a>
            <img
              src={send}
              alt=""
              class="w-10 h-10 cursor-pointer"
              onClick={() => {
                if (handleSubmit()) {
                  navigate("/message");
                  getDataGRANTS();
                }
              }}
            />
          </div>
          <div class="relative z-10">
            <div class="flex flex-col gap-2 overflow-scroll h-[80vh]">
              <div>
                <p class="text-xs h-[2.5vh] flex items-end">Name*</p>
                <Input value={_nameGRANTS()} onInput={(e: any) => _setNameGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE", "font-size": "0.75rem", }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[2.5vh] flex items-end">NPWP*</p>
                <Input value={_npwpGRANTS()} onInput={(e: any) => _setNPWPGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE", "font-size": "0.75rem", }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[2.5vh] flex items-end">Number of Dependents*</p>
                <Input inputMode="numeric" value={formatNumber(_nodGRANTS())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setNODGRANTS(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE", "font-size": "0.75rem", }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[2.5vh] flex items-end">Marital Status*</p>
                <Input value={_maritalGRANTS()} onInput={(e: any) => _setMaritalGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE", "font-size": "0.75rem", }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[2.5vh] flex items-end">Jobs*</p>
                <Input value={_jobGRANTS()} onInput={(e: any) => _setJobGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE", "font-size": "0.75rem", }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[2.5vh] flex items-end">Type of Income*</p>
                <Input value={_typeIncomeGRANTS()} onInput={(e: any) => _setTypeIncomeGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE", "font-size": "0.75rem", }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[2.5vh] flex items-end">Source of Income*</p>
                <Input value={_sourceIncomeGRANTS()} onInput={(e: any) => _setSourceIncomeGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE", "font-size": "0.75rem", }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[2.5vh] flex items-end">Asset Type*</p>
                <Input value={_assetTypeGRANTS()} onInput={(e: any) => _setAssetTypeGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE", "font-size": "0.75rem", }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[2.5vh] flex items-end">Asset Value*</p>
                <Input inputMode="numeric" value={formatNumber(_assetValueGRANTS())} type="text" onInput={(e: any) => { const raw = e.currentTarget.value.replace(/\./g, ""); _setAssetValueGRANTS(raw); }} onKeyPress={(e: KeyboardEvent) => { if (!/[0-9]/.test(e.key)) { e.preventDefault(); } }} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE", "font-size": "0.75rem",  }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[2.5vh] flex items-end">Date Received*</p>
                <Input value={_dataReceivedGRANTS()} onInput={(e: any) => _setDataReceivedGRANTS(e.currentTarget.value)} type="date" style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE", "font-size": "0.75rem", }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div>
                <p class="text-xs h-[2.5vh] flex items-end">Additional Notes*</p>
                <Input value={_addNotesGRANTS()} onInput={(e: any) => _setAddNoteGRANTS(e.currentTarget.value)} style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE", "font-size": "0.75rem", }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default GrantTax;
