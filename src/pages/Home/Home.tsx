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
      <div class="pl-[10vw] pt-[10vh] font-[Plus_Jakarta_Sans]">
        <div class="home-title text-6xl inline-block bg-[linear-gradient(135deg,#000000_0%,#FFCF27_45%,#4C3CE3_100%)] bg-clip-text text-transparent">
          Hi There, What <br /> do you want to know about taxes?
        </div>
        <div class="text-xl text-black/80 pt-[3vh]">
          An AI tax assistant that helps you understand income tax rules, calculates liabilities, <br />
          and provides practical guidance based on the latest regulations.
        </div>

        <div class="flex gap-10">
          <a href="/pph">
            <div class="card-menu">
              <div class="text-sm px-4 pt-2 font-medium font-[Plus_Jakarta_Sans]">
                Display the PPh tax calculation table
                <div class="img-card-container relative top-16">
                  <img src={wallet} alt="" class="img-card h-8 w-8" />
                  <div class="img-card-shadow"></div>
                </div>
              </div>
            </div>
          </a>
          <a href="/grant-tax">
            <div class="card-menu">
              <div class="text-sm px-4 pt-2 font-medium font-[Plus_Jakarta_Sans]">
                Display the  Grants tax calculation table
                <img src={abacus} alt="" class="img-card h-8 w-8 relative top-16" />
              </div>
            </div>
          </a>
          <a href="/inheritance-tax">
            <div class="card-menu">
              <div class="text-sm px-4 pt-2 font-medium font-[Plus_Jakarta_Sans]">
                Display the  Inheritances tax calculation table
                <div>
                  <img src={abacus} alt="" class="img-card h-8 w-8 relative top-16" />
                </div>
              </div>
            </div>
          </a>
        </div>

        <div class="w-[60vw] pt-[10vh]">
          <InputGroup>
            <Input style={{ background: "white", "border-radius": "2vh", "box-shadow": "0 4px 6px rgba(76, 60, 227, 0.4)", }} height="13vh" _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none", }} placeholder="tell your problem now..." />
            <InputRightElement
              class="send-msg"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                right: "2%",
              }}
              onClick={() => navigate("/message")}
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
