import { createContext, useContext } from "react";


export const ModalContext = createContext({
    push(node, trigger) {}
});

export const useModals = () => {
    const actions = useContext(ModalContext);
    return actions;
}