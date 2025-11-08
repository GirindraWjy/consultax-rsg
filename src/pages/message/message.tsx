import { createEffect, createSignal, For, Show, type Component } from "solid-js";
import { Input, InputGroup, InputRightElement } from "@hope-ui/solid";
import "./message.css";
import user from "../../assets/png/user-icon.png"
import ai from "../../assets/png/ai-icon.png"
import sendIcon from "../../assets/png/send-icon.png"
import PageWrapper from "../wrapper/wrapper";
import { consultaxService } from "../../service";
import { Spinner } from "@hope-ui/solid";
import { SolidMarkdown } from "solid-markdown";
import remarkGfm from "remark-gfm";
import { marked } from "marked";

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
import { AnimatedText } from "../../partial/animatedtext";


const MessagePage: Component = () => {

  function formatText(raw: string) {
    return raw
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n{2,}/g, "<br/><br/>")
      .replace(/\n/g, "<br/>")
      .replace(/### (.*?)(<br\/>|$)/g, "<h3>$1</h3>")
      .replace(/## (.*?)(<br\/>|$)/g, "<h2>$1</h2>")
      .replace(/# (.*?)(<br\/>|$)/g, "<h1>$1</h1>")
      .replace(/\*\*\*(.*?)\*\*\*/g, "<b><i>$1</i></b>")
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
      .replace(/\*(.*?)\*/g, "<i>$1</i>")
      .replace(/```([\s\S]*?)```/g, (_, code) => {
        return `
        <div style="max-width:100%;overflow-x:auto;">
          <pre style="
            background:#1e1e1e;
            color:#f8f8f2;
            padding:10px;
            border-radius:6px;
            white-space:pre-wrap;
            word-break:break-word;
            font-family:monospace;
            line-height:1.4;
          ">
            <code>${code.trim()}</code>
          </pre>
        </div>`;
      })
      .replace(
        /(^|<br\/>)&gt; (.*?)(<br\/>|$)/g,
        '$1<blockquote style="border-left:4px solid #ccc;margin:6px 0;padding-left:10px;color:#555;">$2</blockquote>$3'
      )
      .replace(
        /(?:^|<br\/>)(\d+)\. (.*?)(?=<br\/>|$)/g,
        '<div style="margin-left:1em; line-height:1.6; vertical-align:middle;">$1. $2</div>'
      )
      .replace(
        /(?:^|<br\/>)\- (.*?)(?=<br\/>|$)/g,
        '<div style="margin-left:1em; line-height:1.6; vertical-align:middle;">• $1</div>'
      )
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#4F46E5;">$1</a>'
      )
      .replace(/\|(.+?)\|(<br\/>|$)/g, (_, row) => {
        const cols = row.split("|").map((c: any) => c.trim());
        const cells = cols
          .map(
            (c: any) =>
              `<td style="border:1px solid #ccc;padding:4px 8px;">${c}</td>`
          )
          .join("");
        return `<table style="border-collapse:collapse;margin:6px 0;"><tr>${cells}</tr></table>`;
      })
      .replace(/\\\[([\s\S]*?)\\\]/g, (_, expr) => {
        const cleaned = expr.replace(/\\text\{(.*?)\}/g, "$1");
        return `<div style="font-family:monospace;background:#f9f9f9;padding:6px 10px;border-radius:6px;display:inline-block;">${cleaned}</div>`;
      })
      .replace(/\\n/g, "<br/>");
  }

  createEffect(() => {
    console.log("jawaban ai:", answer());
  });

  return (
    <div class="font-[Plus_Jakarta_Sans]">
      <div class="pl-[8vw] pe-[8vw] hidden md:block">
        <PageWrapper>
          <div class="chat-container pt-10 pb-40">
            <For each={chatHistory()} fallback={<div>Ask Anything with AI</div>}>
              {(chat, idx) => {
                const isLastAI =
                  idx() === chatHistory().length - 1 && chat.ai !== "loading";

                return (
                  <>
                    {chat.user && (
                      <div class="chat-item flex justify-end items-start gap-3">
                        <div class="chat-user" style={{ "white-space": "pre-wrap" }}>
                          {chat.user}
                        </div>
                        <img
                          src={user}
                          alt="user"
                          class="w-12 h-12 object-contain rounded-full flex-shrink-0"
                        />
                      </div>
                    )}

                    {chat.ai && (
                      <div class="chat-item flex flex-col justify-start items-start gap-3">
                        <div class="flex gap-2 items-start">
                          <img
                            src={ai}
                            alt="ai"
                            class="w-12 h-12 object-contain rounded-full flex-shrink-0"
                          />
                          <div class="chat-ai flex flex-col items-start gap-2">
                            {chat.ai === "loading" ? (
                              <Spinner size="sm" colorScheme="purple" />
                            ) : (
                              <div>
                                {isLastAI ? (
                                  <AnimatedText text={formatText(chat.ai)} />
                                ) : (
                                  <div
                                    innerHTML={formatText(chat.ai)}
                                    style={{
                                      "white-space": "normal",
                                      "word-wrap": "break-word",
                                      "line-height": "1.6",
                                    }}
                                  />
                                )}

                                {chatHistory().filter((c) => c.ai).indexOf(chat) > 0 && (
                                  <div class="pt-6">
                                    <div>
                                      Klik tombol Whatsapp dibawah ini untuk bicara langsung
                                      dengan experties
                                    </div>
                                    <a
                                      href="https://wa.me/6282136326124"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <div class="redirect-whatsapp inline-block rounded-lg px-3 py-2 text-white bg-[#4F46E5] hover:bg-[#4338CA] transition">
                                        Chat Whatsapp
                                      </div>
                                    </a>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                );
              }}
            </For>
          </div>
        </PageWrapper>
        <div class="fixed w-[80%] bottom-20">
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
                "padding-right": "10vh",
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
      </div >


      {/* MOBILE */}

      < div class="block md:hidden" >
        <PageWrapper>
          <div class="chat-container pt-20 pb-26 text-sm">
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
                              {/* <div
                                innerHTML={formatText(chat.ai)}
                                style={{
                                  "white-space": "normal",
                                  "word-wrap": "break-word",
                                  "line-height": "1.6",
                                }}
                              /> */}
                              <AnimatedText text={formatText(chat.ai)} />
                              {chatHistory().filter(c => c.ai).indexOf(chat) > 0 && (
                                <div class="pt-6">
                                  <div>
                                    Klik tombol Whatsapp dibawah ini untuk bicara langsung dengan experties
                                  </div>
                                  <a
                                    href="https://wa.me/6282136326124"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <div class="redirect-whatsapp inline-block rounded-lg px-3 py-2 text-white bg-[#4F46E5] hover:bg-[#4338CA] transition">
                                      Chat Whatsapp
                                    </div>
                                  </a>
                                </div>
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
        <div class="fixed w-full px-4 bottom-10">
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
                "padding-right": "6vh",
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
      </div >
    </div >
  );
};

export default MessagePage;
