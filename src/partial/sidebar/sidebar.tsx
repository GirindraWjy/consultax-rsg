import { createEffect, createSignal, onCleanup, onMount, Show, type Component } from "solid-js";
import { Transition } from "solid-transition-group";
import logo from "../../assets/png/logo-sidebar.png";
import user from "../../assets/svg/User.svg";
import message from "../../assets/svg/message-plus.svg";
import "./sidebar.css";
import PageWrapper from "../../pages/wrapper/wrapper";

const Sidebar: Component = () => {
  const [active, setActive] = createSignal<"home" | "chat-with-expert">(location.pathname === "/chat-with-expert" ? "chat-with-expert" : "home");
  const [open, setOpen] = createSignal(false);

  const syncActiveFromPath = () => {
    const p = window.location.pathname;
    if (p === "/chat-with-expert") setActive("chat-with-expert");
    else setActive("home");
  };

  onMount(() => {
    if (!(window as any).__historyPatched) {
      const _pushState = history.pushState;
      const _replaceState = history.replaceState;

      history.pushState = function (...args: Parameters<typeof history.pushState>) {
        const ret = _pushState.apply(this, args);
        window.dispatchEvent(new Event("locationchange"));
        return ret;
      };

      history.replaceState = function (...args: Parameters<typeof history.replaceState>) {
        const ret = _replaceState.apply(this, args);
        window.dispatchEvent(new Event("locationchange"));
        return ret;
      };

      (window as any).__historyPatched = true;
    }

    const onLocationChange = () => syncActiveFromPath();
    window.addEventListener("popstate", onLocationChange);
    window.addEventListener("locationchange", onLocationChange);

    onCleanup(() => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("locationchange", onLocationChange);
    });
  });

  const handleClick = () => {
    const next = active() === "home" ? "chat-with-expert" : "home";
    setActive(next);
    history.pushState({}, "", `/${next}`);
  };


  return (
    <div>
      {/* DESKTOP SIDEBAR */}
      <div class="hidden md:flex container-sidebar h-full flex-col items-center pt-6 gap-6 px-4">
        <a href="/home">
          <img src={logo} alt="logo" class="logo-img w-9 h-9" />
        </a>

        <div class="relative cursor-pointer" onClick={handleClick}>
          <a href={active() === "home" ? "/home" : "/chat-with-expert"}>
            <Transition
              mode="outin"
              enterClass="fade-enter"
              enterActiveClass="fade-enter-active"
              exitClass="fade-exit"
              exitActiveClass="fade-exit-active"
            >
              <img
                src={active() === "home" ? user : message}
                alt="switch icon"
                class="img-switch w-10 h-10 p-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </Transition>
          </a>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div class="flex md:hidden container-sidebar-mobile top-2 py-4 w-6 absolute flex-col items-center gap-2">
        <div class="" onClick={() => setOpen(true)}> > </div>
        <Show when={open()}>
          <div
            class={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${open() ? "opacity-100" : "opacity-0"
              }`}
            onClick={() => setOpen(false)}
          />
        </Show>

        <Transition
          enterActiveClass="transition-all duration-300"
          exitActiveClass="transition-all duration-300"
          enterClass="-translate-x-full"
          enterToClass="translate-x-0"
          exitClass="translate-x-0"
          exitToClass="-translate-x-full"
        >
          <Show when={open()}>
            <div class="fixed top-0 pt-20 left-0 flex flex-col gap-2 w-60 h-full bg-white shadow-lg z-50 p-2">
              <a href="/home">
                <div class="menu-sidebar" onClick={() => setOpen(false)}>
                  <img
                    src={logo}
                    alt="switch icon"
                    class="img-switch w-10 h-10 p-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <div class="font-semibold font-[Plus_Jakarta_Sans]">
                    Consultax
                  </div>
                </div>
              </a>
              <div class="cursor-pointer" onClick={handleClick}>
                <a href={active() === "home" ? "/chat-with-expert" : "/home"}>
                  <div onClick={() => setOpen(false)} class="menu-sidebar">
                    <img
                      src={active() === "home" ? user : message}
                      alt="switch icon"
                      class="img-switch w-10 h-10 p-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                    <div class="font-semibold font-[Plus_Jakarta_Sans]">
                      {active() === "home" ? "Chat with Experties" : "Message with AI"}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Show>
        </Transition>
      </div>
    </div>
  );
};

export default Sidebar;
