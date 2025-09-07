import { formatNumber } from "@/lib/format";
import Image from "next/image";

interface Props {
  name: string;
  quantity: number;
}
export const Resource = ({ name, quantity }: Props) => {
  return (
    <span className="flex gap-0.5 text-sm md:text-base w-1/3 justify-end">
      <Image src={`/images/${name}.png`} alt="Wood" width={18} height={18} />
      {formatNumber(quantity)}
    </span>
  );
};
