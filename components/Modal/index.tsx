import ReactPortal from '../ReactPortal';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';
import React from 'react';
import Button from '../Button';

type ModalProps = {
  visible: boolean,
  isLoading: boolean,
  title: string,
  children: React.ReactNode,
  onCancel: Function,
}

export default function Modal({
  visible,
  isLoading = false,
  title,
  children,
  onCancel,
}: ModalProps) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible);

  if (!shouldRender) return null;
  
  return (
    <ReactPortal containerId="modal-root">
      <div className={`bg-[rgba(0,0,0,0.6)] backdrop-opacity-10 fixed w-full h-full p-10 left-0 top-0 flex items-start justify-center ${visible ? "animate-fade-in" : "animate-fade-out"}`} ref={animatedElementRef}>
        <div className={`w-full h-full absolute z-[-10] top-0`} onClick={onCancel} role="button"></div>
        <div  className={`flex flex-col items-start justify-between gap-6 w-[600px] bg-white rounded ${visible ? "animate-slide-down" : "animate-slide-up"}`}>
          <div className={`flex items-center justify-between w-full bg-[#f8f8f8] p-6 rounded ${visible ? "animate-slide-down" : "animate-slide-up"}`}>
            <h1 className='text-4xl text-[#3E4450] font-sans font-semibold'>{title}</h1>
            <Button onClick={onCancel}>
              X
            </Button>
          </div>

          <div className={`${visible ? "animate-slide-down" : "animate-slide-up"} px-6 py-2 max-h-[700px]`}>{children}</div>
        </div>
      </div>
    </ReactPortal>
  );
}
