import Link from "next/link";
import React from "react";
import { faUndo, faHome, faPalette, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import router from "next/router";
import * as se from "../se";
// import MainTitle from "../MainTitle";
// import { PopupMenu } from "../Popupmenu/page";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    se.set.play();
  };

  const reload = () => {
    // se.set.play();
    const result = window.confirm("もういちど　ページを　よみこみますか？");
    if (result === false) return;
    location.reload();
  };

  return (
    <header className="flex flex-start w-screen ps-2 h-8 md:h-10 lg:h-12 border-b items-center absolute top-0 z-50">
      <Link href="./">
        <FontAwesomeIcon
          icon={faHome}
          className="w-14 h-6 md:h-7 lg:h-8 text-green-500 cursor-pointer hover:opacity-80 hover:transition duration-300"
        />
      </Link>

      <form action="#" className="w-12 text-center">
        <label className={styles.switch}>
          <input type="checkbox" onChange={handleToggle}></input>
          <span className={styles.slider}></span>
        </label>
      </form>

      <FontAwesomeIcon
        onClick={reload}
        icon={faUndo}
        className="w-12 h-6 md:h-7 lg:h-8 text-blue-500 cursor-pointer hover:opacity-80 hover:transition duration-300"
      />

      {/* <PopupMenu /> */}
    </header>
  );
}
