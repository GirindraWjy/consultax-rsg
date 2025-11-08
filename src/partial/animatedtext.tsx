import { createSignal, onMount, onCleanup } from "solid-js";

interface AnimatedTextProps {
  text: string;
}

export function AnimatedText(props: AnimatedTextProps) {
  const [displayed, setDisplayed] = createSignal("");
  let i = 0;
  let intervalId: number | undefined;

  onMount(() => {
    i = 0;
    intervalId = setInterval(() => {
      if (i < props.text.length) {
        setDisplayed(props.text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 8);
  });

  onCleanup(() => clearInterval(intervalId));

  return (
    <div
      innerHTML={displayed()}
      style={{
        "white-space": "normal",
        "word-wrap": "break-word",
        "line-height": "1.6",
      }}
    />
  );
}
