import { Component, JSX, onMount } from "solid-js";
import { Motion } from "@motionone/solid";

interface PageWrapperProps {
  children: JSX.Element;
}

const PageWrapper: Component<PageWrapperProps> = (props) => {
  return (
    <Motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.4, easing: "ease-in-out" }}
      style={{
        position: "relative",
        minHeight: "100vh",
        height: "100vh",
        width: "100%",
      }}
    >
      {props.children}
    </Motion.div>
  );
};


export default PageWrapper;
