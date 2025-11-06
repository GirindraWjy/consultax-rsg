import type { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";
import PageWrapper from "../wrapper/wrapper";
import { Input, InputGroup, InputRightElement } from "@hope-ui/solid";
import "./home.css";
import wallet from "../../assets/png/wallet-minus.png"
import abacus from "../../assets/png/abacus.png"
import sendIcon from "../../assets/png/send-icon.png"

const Home: Component = () => {
  const navigate = useNavigate();


  return (
    <PageWrapper>
      {/* DESKTOP VERSION */}
      <div class="pl-[10vw] pt-[10vh] font-[Plus_Jakarta_Sans] hidden md:block">
        <div class="home-title text-6xl inline-block bg-[linear-gradient(135deg,#000000_0%,#FFCF27_45%,#4C3CE3_100%)] bg-clip-text text-transparent">
          Hi There, What <br /> do you want to know about taxes?
        </div>
        <div class="sub-header text-xl text-black/80 pt-[3vh]">
          An AI tax assistant that helps you understand income tax rules, calculates liabilities, <br />
          and provides practical guidance based on the latest regulations.
        </div>

        <div class="flex gap-10">
          <a href="/pph">
            <div class="card-menu">
              <div class="text-md px-4 pt-2 font-medium font-[Plus_Jakarta_Sans]">
                Display the PPh tax calculation table
                <img src={wallet} alt="" class="img-card h-12 w-12 relative top-10" />
                <div class="img-card-shadow">
                </div>
              </div>
            </div>
          </a>
          <a href="/grant-tax">
            <div class="card-menu">
              <div class="text-md px-4 pt-2 font-medium font-[Plus_Jakarta_Sans]">
                Display the Grants tax calculation table
                <img src={abacus} alt="" class="img-card h-12 w-12 relative top-10" />
              </div>
            </div>
          </a>
          <a href="/inheritance-tax">
            <div class="card-menu">
              <div class="text-md px-4 pt-2 font-medium font-[Plus_Jakarta_Sans]">
                Display the Inheritances tax calculation table
                <div>
                  <img src={abacus} alt="" class="img-card h-12 w-12 relative top-10" />
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-[60vw] pt-[10vh]">
          <InputGroup>
            <Input
              style={{
                background: "white",
                "border-radius": "2vh",
                "box-shadow": "0 4px 6px rgba(76, 60, 227, 0.4)",
                "padding-left": "1rem",
              }}
              height="13vh"
              _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none" }}
              placeholder="      tell your problem now..."
            />
            <InputRightElement
              class="send-msg"
              style={{ top: "50%", transform: "translateY(-50%)", right: "2%" }}
              onClick={() => navigate("/message")}
            >
              <img src={sendIcon} alt="" />
            </InputRightElement>
          </InputGroup>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div class="p-4 pt-30 font-[Plus_Jakarta_Sans] block md:hidden">
        <div class="home-title text-2xl inline-block bg-[linear-gradient(135deg,#000000_0%,#FFCF27_45%,#4C3CE3_100%)] bg-clip-text text-transparent">
          Hi There, What <br /> do you want to know about taxes?
        </div>
        <div class="text-[12px] text-black/80 pt-[1vh]">
          An AI tax assistant that helps you understand income tax rules, calculates liabilities, <br />
          and provides practical guidance based on the latest regulations.
        </div>

        <div class="flex gap-3 pt-4 flex-col w-full">
          <a href="/pph">
            <div class="card-menu-mobile">
              <div class="text-[12px] px-4 pt-2 font-medium font-[Plus_Jakarta_Sans]">
                Display the PPh tax calculation table
                <img src={wallet} alt="" class="img-card-mobile h-8 w-8" />
              </div>
            </div>
          </a>
          <a href="/grant-tax">
            <div class="card-menu-mobile">
              <div class="text-[12px] px-4 pt-2 font-medium font-[Plus_Jakarta_Sans]">
                Display the Grants tax calculation table
                <img src={abacus} alt="" class="img-card-mobile h-8 w-8" />
              </div>
            </div>
          </a>
          <a href="/inheritance-tax">
            <div class="card-menu-mobile">
              <div class="text-[12px] px-4 pt-2 font-medium font-[Plus_Jakarta_Sans]">
                Display the Inheritances tax calculation table
                <img src={abacus} alt="" class="img-card-mobile h-8 w-8" />
              </div>
            </div>
          </a>
        </div>

        <div
          class="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] z-50"
        >
          <InputGroup>
            <Input
              style={{
                background: "white",
                "border-radius": "1.5vh",
                "box-shadow": "0 4px 6px rgba(76, 60, 227, 0.4)",
              }}
              height="6vh"
              _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none" }}
              placeholder="tell your problem now..."
            />
            <InputRightElement class="send-msg" style={{ top: "50%", transform: "translateY(-50%)", right: "2%", }} onClick={() => navigate("/message")}
            >
              <img src={sendIcon} alt="" />
            </InputRightElement>
          </InputGroup>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
