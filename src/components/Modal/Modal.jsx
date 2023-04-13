import {useCallback, useEffect, useRef} from 'react'

function Modal({children, close}) {
    const refOuter =  useRef(null);
    let refFirstElement = useRef(null);
    let refLastElement = useRef(null);
    useEffect(()=> {
        const focusAbleElement =  Array.from(refOuter.current?.querySelectorAll(["tabindex"]) ?? []);
        refFirstElement.current = focusAbleElement[0];
        refLastElement.current = focusAbleElement[focusAbleElement.length - 1];
        refFirstElement.current.focus();
    }, [close]);
    const onKeyDown = useCallback(() => {
    // if tab key is tapped on the last
    // focus on the first
    // Warning! need to check e.current if a child of lastFocusable

    },[]);
  return (
    <div>Modal</div>
  )
}

export default Modal