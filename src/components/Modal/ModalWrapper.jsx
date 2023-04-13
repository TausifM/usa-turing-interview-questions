import React, { useMemo, useState } from 'react'
import Modal from './Modal';
import { ModalContext } from './ModalContext';

const uid = (() => {
    let i = 0;
    return() => `${i++}`;
})();
const ModalWrapper = () => {
    const [modals, setModals] = useState([]);
    const actions = useMemo(() => ({ push(node, trigger){
        const key = uid();
        const close = () => {
            // restore the focus for the trigger
            trigger.focus();
            setModals((modals) => {
              return modals.filter((modal) => modal.key !== key);
            });
          };
  
          const modal = (
            <Modal key={key} close={close}>
              {node}
            </Modal>
          );
          setModals((modals) => [...modals, modal]);
    }}), [])
  return (
    <ModalContext.Provider value={actions}>
        <div className="App">
        <Screen />
        {modals}
        </div>
    </ModalContext.Provider>
  )
}

export default ModalWrapper