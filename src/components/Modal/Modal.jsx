import {useCallback, useEffect, useRef} from 'react'

function Modal({children, close}) {
    const refOuter =  useRef(null);
    let refFirstElement = useRef(null);
    let refLastElement = useRef(null);
    useEffect(()=> {
        const focusAbleElement =  Array.from(refOuter.current?.querySelectorAll(["tabindex"]) ?? []);
        refFirstElement.current = focusAbleElement[0];
        refLastElement.current = focusAbleElement[focusAbleElement.length - 1];
        refFirstElement.current?.focus();
    }, [close]);
    const onKeyDown = useCallback((e) => {
    // if tab key is tapped on the last
    // focus on the first
    // Warning! need to check e.current if a child of lastFocusable
    if (
        document.activeElement === refLastElement.current &&
        e.key === "Tab" &&
        !e.shiftKey
      ) {
        e.preventDefault();
        refFirstElement.current?.focus();
      }
      if (
        document.activeElement === refFirstElement.current &&
        e.key === "Tab" &&
        e.shiftKey
      ) {
        e.preventDefault();
        refLastElement.current?.focus();
      }
  
      if (e.key === "Escape") {
        close();
      }
    }, []);
  return (
    <div
      ref={refOuter}
      onKeyDown={onKeyDown}
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.5)",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "300px"
        }}
      >
        <div>
          <button onClick={close} tabIndex={0}>
            close
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal