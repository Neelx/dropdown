"use client"
import {  useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Heading({ children }:{children:any}){
    const level = useContext(LevelContext);
    switch(level){
        case 0:
            throw Error("Heading must be inside.");
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h1>{children}</h1>;
        case 3:
            return <h1>{children}</h1>;
    }
}