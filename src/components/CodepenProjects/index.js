import "./styles.scss";

import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
  stripIndent,
} from "react-codepen-prefill-embed";

export const codepenProjects = () => {
  return (
    <>
      <iframe
        src="https://codepen.io/arakaki-code/embed/dyNMpad?default-tab=result&theme-id=dark"

        style={
          {height: "400px", width:"100%"}
        }
      >
        See the Pen{" "}
        <a href="https://codepen.io/arakaki-code/pen/dyNMpad">AluraFlix</a> by
        Mayuri Arakaki (
        <a href="https://codepen.io/arakaki-code">@arakaki-code</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  );
};

export default codepenProjects;
