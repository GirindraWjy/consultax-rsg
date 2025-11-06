import { createEffect, createSignal, type Component } from "solid-js";
import { Transition } from "solid-transition-group";
import logo from "../../assets/png/logo-sidebar.png";
import user from "../../assets/svg/User.svg";
import message from "../../assets/svg/message-plus.svg";
import "./sidebar.css";

const Sidebar: Component = () => {
  const [active, setActive] = createSignal<"home" | "profile">(
    location.pathname === "/profile" ? "profile" : "home"
  );

  createEffect(() => {
    if (location.pathname === "/home") setActive("home");
    else if (location.pathname === "/profile") setActive("profile");
  });

  const handleClick = () => {
    setActive(active() === "home" ? "profile" : "home");
  };

  return (
    <div class="container-sidebar h-full flex-col items-center flex gap-10 px-3">
      <a href="/home">
        <img src={logo} alt="logo" class="logo-img w-12 h-12" />
      </a>

      <div class="relative cursor-pointer" onClick={handleClick}>
        <a href={active() === "home" ? "/home" : "/profile"}>
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
              class="img-switch w-12 h-12 p-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </Transition>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
