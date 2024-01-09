import { Howl } from "howler";
import * as sound from "@/components/se";

const ITEMS_WH_INDEX = [1, 3, 5, 7, 8, 10, 12, 13, 15, 17, 19, 20, 22, 24, 25, 27, 29, 31, 32, 34];
const ITEMS_BK_NOTE = [
  "#ﾌｧ/♭ソ",
  "#ソ/♭ラ",
  "#ラ/♭シ",
  "",
  "#ド/♭レ",
  "#レ/♭ミ",
  "",
  "#ﾌｧ/♭ソ",
  "#ソ/♭ラ",
  "#ラ/♭シ",
  "",
  "#ド/♭レ",
  "#レ/♭ミ",
  "",
  "#ﾌｧ/♭ソ",
  "#ソ/♭ラ",
  "#ラ/♭シ",
  "",
  "#ド/♭レ",
];
const ITEMS_WH_NOTE = [
  "ﾌｧ",
  "ソ",
  "ラ",
  "シ",
  "ド",
  "レ",
  "ミ",
  "ﾌｧ",
  "ソ",
  "ラ",
  "シ",
  "ド",
  "レ",
  "ミ",
  "ﾌｧ",
  "ソ",
  "ラ",
  "シ",
  "ド",
  "レ",
];
const ITEMS_BK_LABEL = ["X", "V", "N", , "W", "E", , "T", "Y", "U", , "O", "P", , "[", "6", "8", , "-"];
const ITEMS_WH_LABEL = [
  "Z",
  "C",
  "B",
  "M",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";",
  ":",
  "]",
  "7",
  "9",
  "0",
  "^",
];
const ITEMS_BK_INDEX = [2, 4, 6, 91, 9, 11, 92, 14, 16, 18, 93, 21, 23, 94, 26, 28, 30, 95, 33];
const ITEMS_BK_CLASS = [
  "BK",
  "BK",
  "BK",
  "None",
  "BK",
  "BK",
  "None",
  "BK",
  "BK",
  "BK",
  "None",
  "BK",
  "BK",
  "None",
  "BK",
  "BK",
  "BK",
  "None",
  "BK",
];
const KEY_CODE = [
  "",
  "KeyZ",
  "KeyX",
  "KeyC",
  "KeyV",
  "KeyB",
  "KeyN",
  "KeyM",
  "KeyA",
  "KeyW",
  "KeyS",
  "KeyE",
  "KeyD",
  "KeyF",
  "KeyT",
  "KeyG",
  "KeyY",
  "KeyH",
  "KeyU",
  "KeyJ",
  "KeyK",
  "KeyO",
  "KeyL",
  "KeyP",
  "Semicolon",
  "Quote",
  "BracketRight",
  "Backslash",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0",
  "Minus",
  "Equal",
];

const W_KEY = [];
//後で分割代入が使えるかどうか
for (let i = 0; i < ITEMS_WH_INDEX.length; i++) {
  W_KEY[i] = {
    index: ITEMS_WH_INDEX[i],
    note: ITEMS_WH_NOTE[i],
    label: ITEMS_WH_LABEL[i],
    class: "WH",
  };
}

const B_KEY = [];
for (let i = 0; i < ITEMS_BK_INDEX.length; i++) {
  B_KEY[i] = {
    index: ITEMS_BK_INDEX[i],
    note: ITEMS_BK_NOTE[i],
    label: ITEMS_BK_LABEL[i],
    class: ITEMS_BK_CLASS[i],
  };
}

var se = [""];
var keyDownResult;
var Key_flag = [];

export function Kenban(props) {
  var gakki = "ke-";

  switch (props.gakki) {
    case "けんばんハーモニカ":
      gakki = "ke-";
      break;
    case "リコーダー":
      gakki = "re_";
      break;
    case "もっきん":
      gakki = "mo_";
      break;
    case "てっきん":
      gakki = "te_";
      break;
  }

  // インスタンスを生成
  for (let i = 1; i <= 34; i++) {
    se[i] = new Howl({
      src: [`Sounds/${gakki}${i}.mp3`],
      //読み込む音声ファイル
      // 設定 (以下はデフォルト値です)
      preload: true, // 事前ロード
      volume: 1.0, // 音量(0.0〜1.0の範囲で指定)
      loop: false, // ループ再生するか
      autoplay: false, // 自動再生するか
    });
    Key_flag[i] = false;
  }

  //何のキーが押されたかを判定してコードを返す
  const check_code = (e) => {
    return (keyDownResult = KEY_CODE.indexOf(e.code));
  };

  const Play_BK = (e) => {
    const index = ITEMS_BK_INDEX.indexOf(Number(e.target.id));
    se[ITEMS_BK_INDEX[index]].play();
  };

  const Pause_BK = (e) => {
    const index = ITEMS_BK_INDEX.indexOf(Number(e.target.id));
    se[ITEMS_BK_INDEX[index]].pause();
    se[ITEMS_BK_INDEX[index]].seek(0);
  };

  const Play_WH = (e) => {
    const index = ITEMS_WH_INDEX.indexOf(Number(e.target.id));
    se[ITEMS_WH_INDEX[index]].play();
  };

  const Pause_WH = (e) => {
    const index = ITEMS_WH_INDEX.indexOf(Number(e.target.id));
    se[ITEMS_WH_INDEX[index]].pause();
    se[ITEMS_WH_INDEX[index]].seek(0);
  };

  const KeyDown = (e) => {
    check_code(e);
    if (Key_flag[keyDownResult] === false) {
      Key_flag[keyDownResult] = true;
      se[keyDownResult].play();
      document.getElementById(keyDownResult).style.backgroundColor = "rgba(252, 165, 165)";
    }
  };

  const KeyUp = (e) => {
    check_code(e);
    if (Key_flag[keyDownResult] === true) {
      Key_flag[keyDownResult] = false;
      se[keyDownResult].pause();
      se[keyDownResult].seek(0);
      //直接DOMを触らずにできる方法があれば尚いいのだが。
      // エレメントrefを配列化できるといいのかも…
      if (document.getElementById(keyDownResult).className == "WH") {
        document.getElementById(keyDownResult).style.backgroundColor = "";
      } else {
        document.getElementById(keyDownResult).style.backgroundColor = "";
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <button
          type="text"
          className="font-bold m-2 p-2 
        w-32 md:w-40 text-sm md:text-base
        border-red-300 bg-white border-2 text-red-400  hover:bg-red-500 hover:text-white active:translate-y-1 rounded-lg shadow-lg"
          onClick={() => {
            sound.set.play();
          }}
          onKeyDown={KeyDown}
          onKeyUp={KeyUp}
        >
          キーボード入力ON
        </button>
      </div>
      <div className="flex justify-center">
        <div className="relative">
          <div className="relative top-8 left-2.5 md:left-5 flex justify-center">
            {B_KEY.map((B_KEY) => {
              return (
                <div
                  key={B_KEY.index}
                  id={B_KEY.index}
                  className={
                    B_KEY.class === "BK"
                      ? "select-none text-xs text-center hover:bg-red-300 w-5 sm:w-9 h-24 sm:h-48 text-white bg-black flex items-center px-1 mx-0.5 pb-8 border border-gray-600 rounded cursor-pointer z-20"
                      : "select-none w-5 sm:w-9 sm:h-48 text-white bg-none flex items-center px-1 mx-0.5 pb-8 z-0"
                  }
                  onMouseDown={Play_BK}
                  onTouchStart={Play_BK}
                  onMouseUp={Pause_BK}
                  onTouchEnd={Pause_BK}
                >
                  {B_KEY.note}
                  <br />
                  {B_KEY.label}
                </div>
              );
            })}
          </div>
          <div className="absolute top-8 flex justify-center">
            {W_KEY.map((W_KEY) => {
              return (
                <div
                  key={W_KEY.index}
                  id={W_KEY.index}
                  className="select-none text-xs text-center md:text-base hover:bg-red-300 w-6 sm:w-10 h-40 sm:h-80 text-black bg-white flex items-end px-2 pb-8 border border-gray-600 rounded cursor-pointer z-10"
                  onMouseDown={Play_WH}
                  onTouchStart={Play_WH}
                  onMouseUp={Pause_WH}
                  onTouchEnd={Pause_WH}
                >
                  {W_KEY.note}
                  <br />
                  {W_KEY.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
