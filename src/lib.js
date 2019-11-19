import React from "react";
import Panel from "./components/Panel";
import Button from "./components/Button";
import Label from "./components/Label";

function UniversalComponent({ type, props, content }) {
  switch (type) {
    case "panel":
      if (content) {
        props.content = renderArrayOfObjectRecursive(content);
      }
      return <Panel {...props} />;
    case "button":
      return <Button {...props} />;
    case "label":
      return <Label {...props} />;
    default:
      return <></>;
  }
}

export function renderArrayOfObjectRecursive(dom) {
  if (Array.isArray(dom)) {
    return dom.map(r => UniversalComponent(r));
  } else {
    return UniversalComponent(dom);
  }
}
