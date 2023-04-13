import { useModals } from './ModalContext';

const Screen = () => {
    const {push} = useModals();
    const showModal3 = (e) => {
        push(
          <div>
            modal 3<button tabIndex={0}> close all</button>
          </div>,
          e.currentTarget
        );
      };
    
      const showModal2 = (e) => {
        push(
          <div>
            modal 2
            <button onClick={showModal3} tabIndex={0}>
              {" "}
              show modal 3
            </button>
          </div>,
          e.currentTarget
        );
      };
    
      const showModal1 = (e) => {
        const target = e.currentTarget;
        push(
          <div>
            modal 1<br />
            modal 1<br />
            modal 1<br />
            modal 1<br />
            modal 1
            <button onClick={showModal2} tabIndex={0}>
              show modal 2
            </button>
          </div>,
          target
        );
      };
    
  return (
    <div>
        Screen<button onClick={showModal1}>push a modal</button>
    </div>
  )
}

export default Screen