import { FunctionComponent, DialogHTMLAttributes, useState } from 'react';

interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  toggleTypeInput: Function;
  checked: string;
}

export const Modal: FunctionComponent<DialogProps> = (props) => {
  const { ...otherProps } = props;

  const handleToggleTypeInput = (value: string) => {
    props.toggleTypeInput(value);
  };

  return (
    <dialog
      {...otherProps}
      className="absolute h-40 w-36 bg-primary top-28 left-[-300px] lg:top-20 lg:left-[-400px] py-2 shadow-[0px_3px_12px_3px_rgba(0,0,0,0.2)] rounded-xl"
    >
      <h3 className=" w-full py-4 text-white font-bold">Sort by:</h3>

      <div className="bg-white px-5 py-4 flex flex-col items-baseline justify-center gap-4 shadow-[inset_0px_1px_3px_1px_rgba(0,0,0,0.25)] rounded-xl">
        <label
          htmlFor="number"
          onClick={() => {
            handleToggleTypeInput('number');
          }}
          className="flex items-center gap-2 text-[10px] leading-4 "
        >
          <input
            type="checkbox"
            name="number"
            id="number"
            checked={props.checked === 'text' ? false : true}
            className="appearance-none h-[16px] w-[16px] border-2 p-1 rounded-[50%] border-primary checked:bg-icon-input-checkouted checked:bg-center checked:bg-no-repeat checked:bg-[length_16px]"
          />
          number
        </label>

        <label
          htmlFor="text"
          onClick={() => {
            handleToggleTypeInput('text');
          }}
          className="flex items-center gap-2 text-[10px] leading-4"
        >
          <input
            type="checkbox"
            name="text"
            id="text"
            checked={props.checked === 'text' ? true : false}
            className="appearance-none h-[16px] w-[16px] border-2 p-1 rounded-[50%] border-primary checked:bg-icon-input-checkouted checked:bg-center checked:bg-no-repeat checked:bg-[length_16px]"
          />
          text
        </label>
      </div>
    </dialog>
  );
};
