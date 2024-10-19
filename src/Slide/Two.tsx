const Two = () => {
  return (
    <div className="relative flex flex-col w-full h-full gap-8 overflow-hidden">
      <img src="/two1.png" className="absolute top-0 w-full" alt="" />
      <h1 className="font-bold font-gilda text-[40px] lg:text-[64px] text-inv-gray50">TURUT MENGUNDANG</h1>
      <p className="px-8 text-center font-crimson text-inv-gray">
        Melalui surat ini, izinkan kami mengundang
        <br /> Bapak/Ibu/Saudara/I untuk menjadi bagian di hari bahagia kami{' '}
      </p>
      <div className="flex flex-col items-center text-inv-gray">
        <div className="font-yesteryear text-[40px]">Naurotun Nadhifah</div>
        <div className="font-crimson text-[20px]">Putri bapak Suhada dan ibu Neneng</div>
        <div className="font-yesteryear text-[30px]">&</div>
        <div className="font-yesteryear text-[40px]">Wahyu Nur Arizky</div>
        <div className="font-crimson text-[20px]">Putra bapak Suyitno dan ibu Supami</div>
      </div>
      <div className="absolute left-0 w-full overflow-hidden bottom-4">
        <img src="/two.webp" alt="Stamp" className="object-cover h-[100px] w-full opacity-30 bg-inv-white3" />
        <div className="absolute w-full h-[10px] bottom-[20px] bg-inv-white380 backdrop-blur-md"></div>
        <div className="absolute w-full h-[7px] bottom-[8px] bg-inv-white380 backdrop-blur-md"></div>
      </div>
    </div>
  );
};

export default Two;
