declare module "@motionone/solid" {
  import type { JSX } from "solid-js";
  export const Motion: Record<string, (props: JSX.HTMLAttributes<any>) => JSX.Element>;
}
