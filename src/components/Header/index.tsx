"use client";

import Link from "next/link";
import React from "react";
import { faUndo, faHome, faPalette, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import router from "next/router";
// import * as se from "src/components/se";
// import MainTitle from "../MainTitle";
// import { PopupMenu } from "../Popupmenu/page";

const Header = () => {
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
    // se.set.play();
  };

  const reload = () => {
    // se.set.play();
    const result = window.confirm("もういちど　ページを　よみこみますか？");
    if (result === false) return;
    location.reload();
  };

  return (
    <header className="flex justify-start w-screen ms-2 h-8 md:h-10 lg:h-12 border-b items-center select-none absolute top-0 z-50">
      <Link href="./" className="w-12 text-center">
        <FontAwesomeIcon
          icon={faHome}
          className="text-2xl text-green-500 cursor-pointer hover:opacity-80 hover:transition duration-300"
        />
      </Link>

      <div className="w-12 text-center">
        <form action="#">
          <label className={styles.switch}>
            <input type="checkbox" onChange={handleToggle}></input>
            <span className={styles.slider}></span>
          </label>
        </form>
      </div>

      <div className="w-12 text-center" onClick={reload}>
        <FontAwesomeIcon
          icon={faUndo}
          className="text-2xl text-blue-600 font-bold cursor-pointer hover:opacity-80 hover:transition duration-300"
        />
      </div>

      {/* <PopupMenu /> */}
    </header>
  );
};

export default Header;
