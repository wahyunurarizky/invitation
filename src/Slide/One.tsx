import { Icon } from '@iconify/react';

const One = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-8 p-8">
      <div className="flex flex-col items-center justify-center text-xl font-crimson text-inv-gray">
        <div>
          Hai <span className="font-bold">Grup arisan semen tiga roda</span>
        </div>
        <div>kami mengundang acara pernikahan</div>
      </div>
      <div className="flex flex-col justify-center gap-8">
        <div className="relative bg-inv-white3 py-[36px] px-[26px] shadow-md rounded-md flex flex-col justify-center items-center gap-8 rotate-3">
          <img src="/stamp.png" className="absolute -top-10" />
          <img src="/image-cover.webp" alt="Undangan" className="object-cover object-center w-[250px] lg:w-[300px] h-[200px] lg:h-[248px] rounded-md" />
          <div className="text-[40px] lg:text-[56px] text-center flex justify-center w-full gap-2 items-center">
            Nana <span className="text-[38px]">&</span> Wahyu
          </div>
        </div>
        <button className="flex items-center self-end gap-2 px-4 py-2 text-xl text-white rounded-md font-crimson bg-inv-gray">
          <Icon icon="pepicons-pencil:letter-open" /> Buka Undangan
        </button>
      </div>
      {/* <div className="mr-16 text-[80px]">Wahyu</div>
      <div className="text-[40px]">&</div>
      <div className="ml-16 text-[80px]">Nana</div> */}
    </div>
  );
};

export default One;
