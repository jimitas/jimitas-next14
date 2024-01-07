import * as se from "@/components/se";
import styles from "./Popupmenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, FC } from "react";
import LinksForPopup from "@/components/Links/LinksForPopup";

//コンテンツの外をクリックしたら、isShow=falseになって、ポップアップが消えるようにしたい。できればでよいが…。
export const PopupMenu: FC = () => {
  const [isShown, setIsShown] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleToggleButtonClick = () => {
    se.set.play();
    setIsShown(true);
  };

  const handleCloseButtonClick = () => {
    se.set.play();
    setIsShown(false);
  };

  return (
    <div className="w-12" onClick={isShown ? handleCloseButtonClick : handleToggleButtonClick}>
      <FontAwesomeIcon
        className="relative w-12 h-6 md:h-7 lg:h-8 text-orange-500 cursor-pointer hover:opacity-80 hover:transition duration-300"
        icon={faList}
      />

      <div className={isShown ? styles.popupMenuShown : styles.popupMenu} ref={popupRef}>
        <FontAwesomeIcon
          className="w-12 h-6 md:h-7 lg:h-8 text-orange-500 cursor-pointer hover:opacity-80 hover:transition duration-300"
          icon={faWindowClose}
          onClick={handleCloseButtonClick}
        />
        <LinksForPopup />
      </div>
    </div>
  );
};
