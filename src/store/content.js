export default [
    {
        type: "panel",
        props: {
            width: 500,
            height: 200,
            visible: true
        },
        content: [
            {
                type: "button",
                props: {
                    width: 150,
                    height: 100,
                    visible: true,
                    caption: "Button внутри блока"
                }
            },
            {
                type: "label",
                props: {
                    caption: "Label внутри блока",
                    visible: true
                }
            }
        ]
    },
    {
        type: "label",
        props: {
            caption: "Label вне блока",
            visible: true
        }
    },
    {
        type: "button",
        props: {
            width: 100,
            height: 50,
            visible: true,
            caption: "Button вне блока"
        }
    }
];
