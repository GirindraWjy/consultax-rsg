import { createEffect, createSignal, For, Show, type Component } from "solid-js";
import { Input, InputGroup, InputRightElement } from "@hope-ui/solid";
import "./message.css";
import user from "../../assets/png/user-icon.png"
import ai from "../../assets/png/ai-icon.png"
import sendIcon from "../../assets/png/send-icon.png"
import PageWrapper from "../wrapper/wrapper";
import { consultaxService } from "../../service";
import { Spinner } from "@hope-ui/solid";

import {
  _sendMsg as sendMsg,
  _setSendMsg as setSendMsg,
  _chatHistory as chatHistory,
  _setChatHistory as setChatHistory,
  _loading as loading,
  _setLoading as setLoading,
  _answer as answer,
  _setAnswer as setAnswer,
  getData
} from "../../store/store";


const MessagePage: Component = () => {


  createEffect(() => {
    console.log("jawaban ai:", answer());
  });

  return (
    <div class="font-[Plus_Jakarta_Sans]">
      <div class="pl-[10vw] pe-[10vw] pt-10 hidden md:block">
        <PageWrapper>
          <div class="chat-container pb-40">
            <For each={chatHistory()} fallback={<div>Ask Anything with AI</div>}>
              {(chat, idx) => (
                <>
                  {chat.user && (
                    <div class="chat-item flex justify-end items-start gap-3">
                      <div class="chat-user"  style={{ "white-space": "pre-wrap" }}>{chat.user}</div>
                      <img src={user} alt="user" class="w-12 h-12 object-contain rounded-full flex-shrink-0"
                      />
                    </div>
                  )}

                  {chat.ai && (
                    <div class="chat-item flex flex-col justify-start items-start gap-3">
                      <div class="flex gap-2 items-start">
                        <img src={ai} alt="ai" class="w-12 h-12 object-contain rounded-full flex-shrink-0"
                        />
                        <div class="chat-ai flex flex-col items-start gap-2">
                          {chat.ai === "loading" ? (
                            <Spinner size="sm" colorScheme="purple" />
                          ) : (
                            <div>
                              <div>
                                {chat.ai}
                              </div>
                              {chatHistory().filter(c => c.ai).indexOf(chat) > 0 && (
                                <a
                                  href="https://wa.me/62882003076795"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div class="redirect-whatsapp inline-block rounded-lg px-3 py-2 text-white bg-[#4F46E5] hover:bg-[#4338CA] transition">
                                    Chat Whatsapp
                                  </div>
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </For>
          </div>
        </PageWrapper>
        <div class="fixed w-[75%] bottom-20">
          <InputGroup>
            <Input
              value={sendMsg()}
              onInput={(e: any) => setSendMsg(e.currentTarget.value)}
              onKeyDown={(e: any) => {
                if (loading()) return;
                if (e.key === "Enter") {
                  e.preventDefault();
                  getData();
                }
              }}
              style={{
                background: "white",
                "border-radius": "2vh",
                "box-shadow": "0 4px 6px rgba(76, 60, 227, 0.4)",
              }}
              height="8vh"
              _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none" }}
              placeholder="Ask Anything..."
            />
            <InputRightElement
              class="send-msg"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                right: "2%",
                cursor: loading() ? "not-allowed" : "pointer",
                opacity: loading() ? 0.5 : 1,
                pointerEvents: loading() ? "none" : "auto",
              }}
              onClick={getData}
            >
              <img src={sendIcon} alt="send" />
            </InputRightElement>
          </InputGroup>
        </div>
      </div>


      {/* MOBILE */}

      <div class="block md:hidden">
        <PageWrapper>
          <div class="chat-container pt-20 text-sm">
            <For each={chatHistory()} fallback={<div class="flex justify-center items-center w-full">Ask Anything with AI</div>}>
              {(chat, idx) => (
                <>
                  {chat.user && (
                    <div class="chat-item flex justify-end items-start gap-1">
                      <div class="chat-user" style={{ "white-space": "pre-wrap" }}>{chat.user}</div>
                      <img src={user} alt="user" class="w-12 h-12 object-contain rounded-full flex-shrink-0"
                      />
                    </div>
                  )}

                  {chat.ai && (
                    <div class="chat-item flex flex-col justify-start items-start gap-3">
                      <div class="flex gap-2 items-start">
                        <img src={ai} alt="ai" class="w-12 h-12 object-contain rounded-full flex-shrink-0"
                        />
                        <div class="chat-ai flex flex-col items-start gap-1">
                          {chat.ai === "loading" ? (
                            <Spinner size="sm" colorScheme="purple" />
                          ) : (
                            <div>
                              <div>
                                {chat.ai}
                              </div>
                              {chatHistory().filter(c => c.ai).indexOf(chat) > 0 && (
                                <a
                                  href="https://wa.me/62882003076795"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div class="text-sm redirect-whatsapp inline-block rounded-lg px-2 py-2 text-white bg-[#4F46E5] hover:bg-[#4338CA] transition">
                                    Chat Whatsapp
                                  </div>
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </For>
          </div>
        </PageWrapper>
        <div class="fixed w-full px-4 bottom-20">
          <InputGroup>
            <Input
              value={sendMsg()}
              onInput={(e: any) => setSendMsg(e.currentTarget.value)}
              onKeyDown={(e: any) => {
                if (loading()) return;
                if (e.key === "Enter") {
                  e.preventDefault();
                  getData();
                }
              }}
              style={{
                background: "white",
                "border-radius": "1.5 vh",
                "box-shadow": "0 4px 6px rgba(76, 60, 227, 0.4)",
              }}
              height="6vh"
              _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none" }}
              placeholder="Ask Anything..."
            />
            <InputRightElement
              class="send-msg"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                right: "2%",
                cursor: loading() ? "not-allowed" : "pointer",
                opacity: loading() ? 0.5 : 1,
                pointerEvents: loading() ? "none" : "auto",
              }}
              onClick={getData}
            >
              <img src={sendIcon} alt="send" />
            </InputRightElement>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
