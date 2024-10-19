import { Icon } from '@iconify/react';

const Three = () => {
  return (
    <div className="relative flex justify-between w-full h-full gap-8 overflow-hidden">
      <img src="/three2.png" alt="" className="absolute right-0 h-full" />
      <div className="h-full ml-6">
        <img src="/three1.png" alt="" className="h-full w-[80px]" />
      </div>
      <div className="flex flex-col w-full">
        <h1 className="font-bold font-gilda text-[40px] lg:text-[64px] text-inv-gray50 text-right text-nowrap">DETAIL ACARA</h1>
        <div className="flex flex-col items-center w-full text-[24px] gap-4">
          <Icon icon="ph:calendar" className="w-[40px] h-[40px] text-inv-gray50" />
          <div className="flex flex-col items-center text-center">
            <p className="px-8 text-center font-crimson text-inv-gray">Minggu, 08 Desember 2024</p>
            <p className="flex gap-2 px-8 text-center font-crimson text-inv-gray text-[18px]">
              <span className="font-bold text-inv-gray50">Akad</span> 08.00 - 10.00
            </p>
            <p className="flex gap-2 px-8 text-center font-crimson text-inv-gray text-[18px]">
              <span className="font-bold text-inv-gray50">Resepsi</span> 10.00 - 14.00
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-xl text-white rounded-lg font-crimson bg-inv-gray">
            <Icon icon="ph:calendar" /> Simpan di Kalender
          </button>
        </div>
        <div className="flex flex-col items-center w-full text-[24px] gap-4 mt-10">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.0923 19.5632L27.0743 19.6136C27.0799 19.5984 27.0844 19.5828 27.0901 19.5676L27.0923 19.5632Z" fill="#39382C" fillOpacity="0.2" />
            <path
              d="M20.0008 0C13.8215 0 8.75003 5.392 8.75003 11.9688C8.75003 14.5176 9.51503 16.8928 10.805 18.8384L10.7589 18.7616L17.9612 32.0408L17.9975 32.0916C18.2878 32.4956 18.575 32.8212 18.9227 33.0664C19.2703 33.3116 19.7154 33.4664 20.1527 33.4196C21.0264 33.326 21.5342 32.682 22.0033 32.0036L22.0325 31.9616L29.9728 17.548L29.9792 17.536C30.1693 17.17 30.3069 16.8008 30.4247 16.4432C30.9692 15.0229 31.2495 13.5032 31.25 11.9688C31.25 5.392 26.18 0 20.0008 0ZM20.0008 2C25.1585 2 29.375 6.4872 29.375 11.9688C29.3754 13.2491 29.141 14.5172 28.685 15.7016L28.6757 15.7264L28.6674 15.7524C28.5688 16.0552 28.4615 16.33 28.3378 16.5684L20.4782 30.8348C20.1305 31.3232 19.8875 31.4388 19.9655 31.43C20.0057 31.426 20.0428 31.4596 19.9569 31.3988C19.8748 31.3408 19.7072 31.1708 19.5084 30.9004L12.3613 17.72L12.3362 17.6828C11.2588 16.0588 10.625 14.092 10.625 11.9688C10.625 6.4876 14.843 2 20.0008 2ZM20.0008 5.14C16.4525 5.14 13.5827 8.19039 13.5827 11.9688C13.5827 15.7472 16.4529 18.7976 20.0008 18.7976C23.5487 18.7976 26.4174 15.7468 26.4174 11.9688C26.4174 8.19039 23.5487 5.14 20.0008 5.14ZM20.0008 7.14C22.5572 7.14 24.5424 9.25399 24.5424 11.9688C24.5424 14.6836 22.5575 16.7976 20.0008 16.7976C17.444 16.7976 15.4577 14.6832 15.4577 11.9688C15.4577 9.25399 17.4444 7.14 20.0008 7.14Z"
              fill="#39382C"
              fillOpacity="0.2"
            />
            <path
              d="M14.0023 27.6228C8.705 28.4212 5 30.3312 5 33.1428C5 36.93 11.1905 40 20 40C28.8095 40 35 36.93 35 33.1428C35 30.3312 31.2954 28.4212 25.9985 27.6228L25.2646 28.9556C29.2569 29.5464 32 30.788 32 32.2288C32 34.2488 26.6274 35.886 20 35.886C13.3726 35.886 8 34.2488 8 32.2288C7.99963 30.7928 10.7248 29.5524 14.7294 28.9592C14.4875 28.5136 14.2445 28.0688 14.0023 27.6228Z"
              fill="#39382C"
              fillOpacity="0.2"
            />
          </svg>

          <div className="flex flex-col items-center text-center">
            <p className="px-8 mb-2 text-center font-crimson text-inv-gray">Joglo Asri Sari Kuring Indah</p>
            <p className="flex gap-2 px-8 text-[18px] font-light text-center font-crimson text-inv-gray">
              Jl. Raya Cilegon Jkt Blok No A A, RW.2,
              <br /> Sukmajaya, Kec. Jombang, Kota Cilegon
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-xl text-white rounded-lg font-crimson bg-inv-gray">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8369 8.82529L11.8297 8.84545C11.832 8.83937 11.8338 8.83313 11.836 8.82705L11.8369 8.82529Z" fill="#FAF9EE" />
              <path
                d="M9.00031 1C6.52861 1 4.50001 3.1568 4.50001 5.78752C4.50001 6.80704 4.80601 7.75712 5.32201 8.53535L5.30356 8.50463L8.18446 13.8163L8.19901 13.8366C8.31511 13.9982 8.43001 14.1285 8.56906 14.2266C8.70811 14.3246 8.88616 14.3866 9.06106 14.3678C9.41056 14.3304 9.61366 14.0728 9.80131 13.8014L9.81301 13.7846L12.9891 8.0192L12.9917 8.0144C13.0677 7.868 13.1228 7.72032 13.1699 7.57728C13.3877 7.00917 13.4998 6.40129 13.5 5.78752C13.5 3.1568 11.472 1 9.00031 1ZM9.00031 1.8C11.0634 1.8 12.75 3.59488 12.75 5.78752C12.7501 6.29966 12.6564 6.80688 12.474 7.28064L12.4703 7.29056L12.467 7.30096C12.4275 7.42208 12.3846 7.532 12.3351 7.62736L9.19126 13.3339C9.05221 13.5293 8.95501 13.5755 8.98621 13.572C9.00226 13.5704 9.01711 13.5838 8.98276 13.5595C8.94991 13.5363 8.88286 13.4683 8.80336 13.3602L5.94451 8.088L5.93446 8.07312C5.50351 7.42352 5.25001 6.6368 5.25001 5.78752C5.25001 3.59504 6.93721 1.8 9.00031 1.8ZM9.00031 3.056C7.58101 3.056 6.43306 4.27616 6.43306 5.78752C6.43306 7.29888 7.58116 8.51903 9.00031 8.51903C10.4195 8.51903 11.567 7.29872 11.567 5.78752C11.567 4.27616 10.4195 3.056 9.00031 3.056ZM9.00031 3.856C10.0229 3.856 10.817 4.7016 10.817 5.78752C10.817 6.87344 10.023 7.71904 9.00031 7.71904C7.97761 7.71904 7.18306 6.87328 7.18306 5.78752C7.18306 4.7016 7.97776 3.856 9.00031 3.856Z"
                fill="#FAF9EE"
              />
              <path
                d="M6.6009 12.0491C4.482 12.3685 3 13.1325 3 14.2571C3 15.772 5.4762 17 9 17C12.5238 17 15 15.772 15 14.2571C15 13.1325 13.5182 12.3685 11.3994 12.0491L11.1059 12.5822C12.7028 12.8186 13.8 13.3152 13.8 13.8915C13.8 14.6995 11.651 15.3544 9 15.3544C6.34905 15.3544 4.2 14.6995 4.2 13.8915C4.19985 13.3171 5.2899 12.821 6.89175 12.5837C6.795 12.4054 6.6978 12.2275 6.6009 12.0491Z"
                fill="#FAF9EE"
              />
            </svg>
            Lihat Lokasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Three;
