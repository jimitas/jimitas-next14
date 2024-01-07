import * as se from "@/components/se";
import { useEffect, useState, useRef, useCallback } from "react";
import { PutSelect } from "@/components/PutSelect";
import { BtnNum } from "@/components/PutButton/btnNum";
import { BtnQuestion } from "@/components/PutButton/btnQuestion";
import { useCheckAnswer } from "@/hooks/useCheckAnswer";
import { useClearImage } from "@/hooks/useClearImage";
import { PutImage } from "@/components/PutImage";
import { PutText } from "@/components/PutText";
import Title from "@/components/Layout/Title";

const ITEM: number[] = [5, 6, 7, 8, 9, 10];
const NUM: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ANIMALS: string[] = ["apple", "banana", "cat", "monkey", "frog", "dog"];

export default function Home() {
  const { sendRight, sendWrong } = useCheckAnswer();
  const { clearImage } = useClearImage();

  const el_text = useRef<HTMLDivElement>(null);
  const el_img = useRef<HTMLImageElement>(null);
  const [flag, setFlag] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(5);
  const [answer, setAnswer] = useState<number>(Math.floor(Math.random() * maxValue + 1));

  // 〇〇までの数のセレクトを変える。
  const changeSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setMaxValue(parseInt(e.target.value));
    giveQuestion();
  }, []);

  useEffect(() => {
    setFlag(true);
    clearImage(el_img); // 画像のクリア
    putImage(answer, maxValue); // 画像の配置
    el_text.current!.innerHTML = `<span style="color:none;">いくつかな?</span>`;
  }, [count]);

  const giveQuestion = () => {
    setCount((count) => count + 1);
    setAnswer(Math.floor(Math.random() * maxValue + 1)); // 答えの決定
    se.set.play();
  };

  // 解答チェック
  const checkAnswer = (num: number) => {
    if (!flag) return;
    setFlag(false);
    const myAnswer = num;
    if (answer == myAnswer) sendRight(el_text);
    else {
      sendWrong(el_text);
      setTimeout(() => {
        setFlag(true);
      }, 1000); //間違えたら、1秒後に再入力可能に。
    }
  };

  // 画像の配置
  const putImage = (answer: number, maxValue: number) => {
    const imgSrc = `images/${ANIMALS[maxValue - 5]}.png`;

    for (let i = 0; i < answer; i++) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.setAttribute("src", imgSrc);
      div.appendChild(img);
      el_img.current!.appendChild(div);
    }
  };

  return (
    <div>
      <Title title="ぶろっく" />
      <div className="flex flex-wrap items-end justify-center">
        <PutSelect ITEM={ITEM} handleEvent={changeSelect}></PutSelect>
        <div style={{ fontSize: "max(2vw,20px)" }}>までのかず</div>
      </div>
      <PutText el_text={el_text}></PutText>
      <PutImage el_img={el_img}></PutImage>
      <BtnNum ITEM={NUM} handleEvent={checkAnswer}></BtnNum>
      <BtnQuestion handleEvent={giveQuestion}></BtnQuestion>
    </div>
  );
}
