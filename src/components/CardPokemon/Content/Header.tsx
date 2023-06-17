import Image from 'next/image';
import Link from 'next/link';
import { formatId } from '../../utils';

import IconBack from '../../../assets/icons/icon-back.png';
interface Props {
  name: string;
  number: string;
}
export function Header({ name, number }: Props) {
  return (
    <div className="flex items-center justify-between py-5 w-full max-w-[300px]">
      <Link href={'/'} className="flex items-center">
        <Image
          src={IconBack}
          width={20.93}
          height={20.93}
          alt="icon voltar"
          className="mt-[3px]"
        />

        <h1 className=" text-2xl ml-2 font-bold">{name}</h1>
      </Link>
      <span className="text-xs font-bold mt-[7px]">
        {formatId(Number(number))}
      </span>
    </div>
  );
}
