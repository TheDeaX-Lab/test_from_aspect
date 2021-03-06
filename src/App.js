import React, {useState, useRef, useEffect} from "react";
import {connect} from "react-redux";
import action_functions from "./store/actions_functions";
import {renderArrayOfObjectRecursive} from "./lib";
import {toJson} from "really-relaxed-json";
import Input from "./components/Input";
import "./App.css";

function App({content, SetValueByPath}) {
    let [dom, setDom] = useState(<></>);
    let path_ref = useRef();
    let value_ref = useRef();

    useEffect(() => {
        setDom(renderArrayOfObjectRecursive(content));
    }, [content]);

    let onClick = () => {
        let path = path_ref.current.value
            .replace(/[\[\]]/g, ".")
            .split(".")
            .filter(r => r.length > 0)
            .map(r => (/\d+/.test(r) ? parseInt(r) : r));
        var value = value_ref.current.value;
        try {
            value = JSON.parse(toJson(value));
        } catch {
        }
        SetValueByPath(path, value);
    };

    return (
        <div
            className="main"
            style={{
                backgroundColor: "grey",
                paddingLeft: 20,
                paddingRight: 50,
                paddingBlockEnd: 50,
                paddingTop: 30
            }}
        >
            <div style={{paddingBottom: 20}}>
                <Input label="Путь" getRef={path_ref}/>
                <Input label="Значение" getRef={value_ref}/>
                <input
                    type="submit"
                    value="Применить"
                    onClick={onClick}
                    style={{marginTop: 10}}
                />
            </div>
            <div style={{backgroundColor: "white"}}>{dom}</div>
        </div>
    );
}

export default connect(
    state => ({
        content: state.content
    }),
    dispatch => ({
        SetValueByPath: action_functions.SetValueByPath(dispatch)
    })
)(App);
