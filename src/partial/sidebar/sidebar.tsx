import type { Component } from "solid-js";
import logo from "../../assets/png/logo-sidebar.png";
import user from "../../assets/svg/User.svg"

const Sidebar: Component = () => {
  return (
    <div class="h-full flex-col items-center flex shadow-[4px_0_8px_0_rgba(76,60,227,0.4)] gap-10 px-3">
      <img src={logo} alt="logo" class="w-10 h-10" style="margin-top: 5vh;" />
      <img src={user} alt="" class="bg-[#4C3CE3] p-2 rounded-sm shadow-[0px_0_8px_0_rgba(76,60,227,0.4)]" />
    </div>
  );
};

export default Sidebar;
