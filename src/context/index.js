import React, { useState } from "react";
 
export const encrypt = (text, flag) => {
    return text;
};
export const decrypt = (data, flag) => {
    return data;
};
 
export const StoreContext = React.createContext();
export let Data = {};
export const setData = (key, value) => {
    if (key && value) {
        Data[key] = value;
    }
    if (key && !value) {
        return Data[key];
    }
};


export const StoreProvider =  ({ Children }) => {
    const [selected, setSelected] = React.useState(0);
    const [open, setOpen] = useState(false);
    const [first, setFirst] = useState(1);
    const [step, setStep] = useState(20);
    const [last, setLast] = useState(first+step);
    const [dataLength, setDataLength] = useState(0);
    const [gnomeData, setGnomeData] = useState();
    const global = {
        open: { open, setOpen },
        step: { step, setStep },
        first: { first, setFirst },
        dataLength:{dataLength, setDataLength},
        last:{last, setLast},
        selected:{selected, setSelected},
        gnomeData:{gnomeData, setGnomeData}
    };
  
    return (
        <StoreContext.Provider value={{ ...global }}>
            {Children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;