import type { Component } from "solid-js";
import { ChevronLeftIcon, ChevronRightIcon } from "@hope-ui/solid";
import { Input, InputGroup, InputRightElement } from "@hope-ui/solid";
import { Icon } from "@hope-ui/solid";
import { AiFillCaretLeft } from "solid-icons/ai";
import "./inheritance-tax.css";
import send from "../../assets/png/send-icon.png"
import kiri from "../../assets/png/gambar kiri.png"
import kanan from "../../assets/png/gambar kanan.png"

const InheritanceTable: Component = () => {
  return (
    <div class="font-[Plus_Jakarta_Sans] flex justify-center items-center h-full p-10">
      <div class="container-inheritance">
        <div class="w-full flex justify-between">
          <div class="flex items-center gap-3">
            <a href="/home">
              <Icon as={AiFillCaretLeft} color="$neutral10" />
            </a>
            <div class="font-semibold">Tabel of Inheritance</div>
          </div>
          <img src={send} class="w-10 h-10" alt="" />
        </div>
        <div class="relative z-10">
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-6">
              <p class="text-sm h-[2.5vh] flex items-end">Name of deceased*</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">NPWP of deceased*</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">Date of Death*</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
          </div>
          <div class="grid grid-cols-12 gap-6 pt-[3vh]">
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">Did the deceased leave any unpaid taxes?</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">Name Of Heirs*</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">NPWP of each heirs*</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">Type of Inheritance*</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
          </div>
          <div class="grid grid-cols-12 gap-6 pt-[3vh]">
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">If inheritance is land /building Has the title been transferred?</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">If inheritance is cash/deposit was it reported?If inheritance is cash/deposit was it reported?</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">If inheritance is Business Does it generate income after transfer?</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">Has any assets been sold by the heirs?</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
          </div>
          <div class="grid grid-cols-12 gap-6 pt-[3vh]">
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">Were foreign assets inherited?</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">Have all heirs reported inherited assets in their SPT?*</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">Is There a testamentary gift*</p>
              <Input style={{ background: "#F8F7FE", "border-radius": "1vh", "box-shadow": "0 2px 3.5px rgba(93, 93, 93, 0.4)", "border-color": "#F8F7FE" }} _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} />
            </div>
            <div class="col-span-3">
              <p class="text-sm h-[2.5vh] flex items-end">Are there any inherited assets in the form of foreign securities/crypto?</p>
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
  );
};

export default InheritanceTable;
