'use client';
import IconSearch from '@/assets/icons/icon-search.svg';
import IconToggleNumber from '@/assets/icons/icon-toggle.svg';
import IconToggleText from '@/assets/icons/icon-toggle-text.svg';

import { Modal } from '../Modal';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

export interface TypeProps {
  value: string;
}

export const Search = () => {
  const [typeInput, setTypeInput] = useState<string>('text');
  const [toogleModal, setToggleModal] = useState<boolean>(false);
  const [valueInput, setValueInput] = useState<string>('');

  const router = useRouter();

  const handleToggleModal = () => {
    setToggleModal((prev) => !prev);
  };

  const handleToggleTypeInput = (value: string) => {
    setTypeInput(value);
  };

  const handleValueInput = (value: string) => {
    setValueInput(value);
  };

  const handlerouter = () => {
    if (valueInput !== '' && valueInput !== ' ') {
      router.push(`/pokemon/${valueInput.toLocaleLowerCase()}`);
    }
  };

  return (
    <div className="flex items-center gap-4 relative">
      <div className="flex items-center gap-2 w-[280px] h-8 lg:w-[500px] rounded-2xl bg-white shadow-[inset_0px_1px_3px_1px_rgba(0,0,0,0.25)] px-3 py-2">
        <button
          className="bg-transparent border-none w-4 h-4"
          onClick={handlerouter}
        >
          <Image src={IconSearch} width={16} height={16} alt="icon-search" />
        </button>
        <input
          type={typeInput}
          placeholder="Search"
          className="w-[228px] h-4 lg:w-full outline-none"
          value={valueInput}
          onChange={(e) => handleValueInput(e.target.value)}
        />
      </div>
      <button
        className="bg-white border-none w-8 h-8 rounded-[50%] flex items-center justify-center shadow-[inset_0px_1px_3px_1px_rgba(0,0,0,0.25)]"
        onClick={handleToggleModal}
      >
        <Image
          src={typeInput === 'text' ? IconToggleText : IconToggleNumber}
          width={16}
          height={16}
          alt="icon-toggle"
        />
      </button>

      <Modal
        open={toogleModal}
        toggletypeinput={handleToggleTypeInput}
        checked={typeInput}
      />
    </div>
  );
};
