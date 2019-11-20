import React from "react";
import Panel from "./components/Panel";
import Button from "./components/Button";
import Label from "./components/Label";

export function UniversalComponent({type, props, content}) {
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

export function recurseSetValueByPath(target, path, value) {
    let key = path.shift();
    if (path.length === 0) {
        if (Array.isArray(target)) {
            return [...target.slice(0, key), value, ...target.slice(key + 1)]
        } else {
            return {...target, [key]: value}
        }
    } else {
        if (Array.isArray(target)) {
            return [...target.slice(0, key),
                recurseSetValueByPath(target[key] === undefined ? {} : target[key],
                    path,
                    value),
                ...target.slice(key + 1)]
        } else {
            return {
                ...target,
                [key]: recurseSetValueByPath(target[key] === undefined ? (typeof path[0] === 'number' ? [] : {}) : target[key], path, value)
            }
        }
    }
}
