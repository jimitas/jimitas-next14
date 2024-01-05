import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

const MainTitle: React.FC = () => {
  return (
    <div>
      <div className="mt-5 flex justify-center items-center">
        <div>
          <FontAwesomeIcon className="text-lg sm:text-2xl md:text-3xl lg:text-4xl" icon={faCat} />　
        </div>
        <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">
          <div>
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
        <div>
          <FontAwesomeIcon className="text-lg sm:text-2xl md:text-3xl lg:text-4xl" icon={faCat} />
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
