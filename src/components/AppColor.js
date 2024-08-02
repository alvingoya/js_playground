import React from "react";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";

export default function AppColor() {
    return (
        <>
            <AddColorForm />
            <ColorList/>
        </>
    );
}