import * as se from "@/components/se";
import { useEffect, useState, useRef, useCallback } from "react";
import { BtnQuestion } from "@/components/PutButton/btnQuestion";
import { useCheckAnswer } from "@/hooks/useCheckAnswer";
import { useClearImage } from "@/hooks/useClearImage";
import { PutSelect } from "@/components/PutSelect";
import { PutImage } from "@/components/PutImage";
import { PutText } from "@/components/PutText";

import { BtnShuffle } from "@/components/PutButton/btnShuffle";
import { BtnCheck } from "@/components/PutButton/btnCheck";
import Title from "@/components/Layout/Title";

// hideを使わずにisshowでできないか
const ANIMALS: string[] = ["dog", "cat", "monkey", "frog", "usagi", "niwatori", "ika", "tako", "iruka", "butterfly"];
const NUM: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const DIR: string[] = ["ひだり", "みぎ"];
var answer: string;
var imgClickflag = false;
var order: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Nanbanme() {
  const { sendRight, sendWrong } = useCheckAnswer();
  const { clearImage } = useClearImage();

  // setFlagでもきちんとtrue,flaseを制御できていない問題。R6.1.8
  const [flag, setFlag] = useState<boolean>(true);

  const el_flag = useRef<HTMLDivElement>(null);
  const el_text = useRef<HTMLDivElement>(null);
  const el_img = useRef<HTMLImageElement>(null);
  const el_input = useRef<HTMLInputElement>(null);
  const [imgClickable, setImgClickable] = useState(false);
  const [count_1, setCount_1] = useState<number>(0);
  const [count_2, setCount_2] = useState<number>(0);
  const [selectIndex_1, setSelectIndex_1] = useState<string>("ひだり");
  const [selectIndex_2, setSelectIndex_2] = useState<number>(0);

  useEffect(() => {
    shuffleOrder();
    el_flag.current!.innerHTML = String(flag);
  }, []);

  // useEffectの順番によって、問題１、問題２のはじめにどちらが表示されるかが決まる。
  // useEffectで扱わないで、ボタンを押すまで表示させないようにしてもよい。
  useEffect(() => {
    const dir = Math.floor(Math.random() * 2 + 1);
    const num = Math.floor(Math.random() * 9 + 1);
    answer = ANIMALS[order[num - 1]];
    el_input.current!.hidden = true;
    el_text.current!.innerHTML = "";
    el_text.current!.innerHTML = `${dir === 1 ? "ひだり" : "みぎ"}から　${
      dir == 1 ? num : 11 - num
    } ばんめのどうぶつは?`;
  }, [count_1]);

  useEffect(() => {
    const num = Math.floor(Math.random() * 9 + 1);
    el_input.current!.hidden = false;
    const img = document.createElement("img");
    answer = ANIMALS[order[num]];
    img.setAttribute("src", `images/${answer}.png`);
    el_text.current!.innerHTML = "";
    el_text.current!.appendChild(img);
    el_text.current!.innerHTML = el_text.current!.innerHTML + "　は　なんばんめ?";
  }, [count_2]);

  const el_setFlagTrue = () => {
    el_flag.current!.innerText = "true";
  };
  const el_setFlagFalse = () => {
    el_flag.current!.innerText = "false";
  };

  const giveQuestion_1 = () => {
    se.set.play();
    imgClickflag = true;
    setCount_1((count_1) => count_1 + 1);
    el_setFlagTrue();
  };

  const giveQuestion_2 = () => {
    se.set.play();
    imgClickflag = false;
    setCount_2((count_2) => count_2 + 1);
    setFlag(true);
    el_setFlagTrue();
  };

  // とりあえずイベントをanyで受け取り、ターゲットIDはストリングで型をつける。
  // おそらく10このonClickがあるため、flagの状態化がうまくいっていないのでは？
  const checkAnswer_1 = (e: any) => {
    if (el_flag.current!.innerText === "false") return;
    if (!imgClickflag) return;
    el_setFlagFalse();
    const myAnswer: string = e.target.id;
    answer == myAnswer ? sendRight(el_text) : sendWrong(el_text);
    if (answer != myAnswer)
      setTimeout(() => {
        el_setFlagTrue();
      }, 1000);
  };

  const checkAnswer_2 = () => {
    if (!flag) return;
    setFlag(false);
    const myAnswer = selectIndex_1 == "ひだり" ? ANIMALS[order[selectIndex_2 - 1]] : ANIMALS[order[10 - selectIndex_2]];
    answer == myAnswer ? sendRight(el_text) : sendWrong(el_text);
    if (answer != myAnswer)
      setTimeout(() => {
        setFlag(true);
      }, 1000);
  };

  const shuffle = () => {
    se.seikai1.play();
    shuffleOrder();
    setFlag(false);
    el_text.current!.innerHTML = "もんだいを　おしてね。";
  };

  const shuffleOrder = () => {
    order = [];
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 10; i++) {
      order.push(...num.splice(Math.floor(Math.random() * num.length - 1), 1));
    }
    clearImage(el_img); // 画像のクリア
    putImage();
  };

  const putImage = () => {
    for (let i = 0; i < 10; i++) {
      const img = document.createElement("img");
      img.setAttribute("src", `images/${ANIMALS[order[i]]}.png`);
      img.style.cursor = "pointer";
      img.setAttribute("id", ANIMALS[order[i]]);
      img.addEventListener("click", checkAnswer_1, false);
      el_img.current!.appendChild(img);
    }
  };

  const changeSelect_1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectIndex_1(e.target.value);
    se.set.play();
  };

  const changeSelect_2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectIndex_2(Number(e.target.value));
    se.set.play();
  };

  return (
    <div>
      <Title title="なんばんめ" />

      {/* el_flagの中に、flagの値を擬似的に格納。checkAnswer_1でのflagをここから取得*/}
      <div hidden={true} ref={el_flag} className="text-center text-3xl"></div>

      <div className="flex justify-center items-center">
        <BtnQuestion btnText={"もんだい１"} handleEvent={giveQuestion_1}></BtnQuestion>
        <BtnQuestion btnText={"もんだい２"} handleEvent={giveQuestion_2}></BtnQuestion>
        <BtnShuffle handleEvent={shuffle}></BtnShuffle>
      </div>

      <PutText el_text={el_text}></PutText>
      <PutImage el_img={el_img}></PutImage>

      <div ref={el_input} hidden={true}>
        <div className="flex justify-center flex-wrap items-center">
          <PutSelect ITEM={DIR} handleEvent={changeSelect_1}></PutSelect>
          <div className="text-xl">から</div>
          <PutSelect ITEM={NUM} handleEvent={changeSelect_2}></PutSelect>
          <div className="text-xl">ばんめ</div>
          <BtnCheck handleEvent={checkAnswer_2}></BtnCheck>
        </div>
      </div>
    </div>
  );
}
