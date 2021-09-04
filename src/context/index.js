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
    const [open, setOpen] = useState(false);
    const global = {
        open: { open, setOpen },
    };
  
    return (
        <StoreContext.Provider value={{ ...global }}>
            {Children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;