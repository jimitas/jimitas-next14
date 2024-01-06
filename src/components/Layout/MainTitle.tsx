import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const MainTitle: React.FC = () => {
  return (
    <div>
      <div className="mt-5 flex justify-center items-center">
        <div className="w-8 sm:w-10 md:w-12 lg:w-14">
          <FontAwesomeIcon className="text-lg sm:text-2xl md:text-3xl lg:text-4xl me-2" icon={faCat} />
        </div>
        <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">
          <div className="font-bold">
            <ruby>
              地味
              <rt>じみ</rt>
            </ruby>
            に
            <ruby>
              助<rt>たす</rt>
            </ruby>
            かる
            <ruby>
              学習
              <rt>がくしゅう</rt>
            </ruby>
            コンテンツ
          </div>
          <div className="text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl">
            Jimitas
            <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl">(ジミタス)</span>
          </div>
        </div>
        <div className="w-8 sm:w-10 md:w-12 lg:w-14">
          <FontAwesomeIcon className="text-lg sm:text-2xl md:text-3xl lg:text-4xl ms-2" icon={faCat} />
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
