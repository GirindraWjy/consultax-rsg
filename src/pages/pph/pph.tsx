import type { Component } from "solid-js";
import { Input, InputGroup, InputRightElement } from "@hope-ui/solid";
import "./pph.css";
import PageWrapper from "../wrapper/wrapper";
import { Icon } from "@hope-ui/solid";
import { AiFillCaretLeft } from "solid-icons/ai";
import send from "../../assets/png/send-icon.png"
import kiri from "../../assets/png/gambar kiri.png"
import kanan from "../../assets/png/gambar kanan.png"

const PPH: Component = () => {
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
            <img src={send} class="w-10 h-10" alt="" />
          </div>
          <div class="relative z-10">
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-6">
                <p class="text-sm h-[2.5vh] flex items-end">Name*</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">NPWP*</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Number of Dependents*</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Marital Status*</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Jobs*</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Salary permonths/wages perdays*</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you receive allowances?</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you run a bussiness?</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you have profesional income?</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you earn rental income?</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you receive dividen?</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you have income from abroad?</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Did you sell any assets?</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Did you received prize?</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you receive donation?</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh]">
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you pay pension social security contribution?</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you have job-related expenses(for employes)</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you make mandatory contribution to official organitation?</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Has any income tax been withheld by other parties?</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-6 pt-[3vh] justify-center">
              <div class="col-span-3 col-start-4">
                <p class="text-sm h-[2.5vh] flex items-end">Do you pay pension social security contribution?</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
              </div>
              <div class="col-span-3">
                <p class="text-sm h-[2.5vh] flex items-end">Do you have job-related expenses(for employes)</p>
                <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
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
