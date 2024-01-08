import * as se from "@/components/se";
import { Block } from "@/components/Block";
import { useState, useRef } from "react";
import { PutSelect } from "@/components/PutSelect";
import { BtnNum } from "@/components/PutButton/btnNum";
import { BtnQuestion } from "@/components/PutButton/btnQuestion";
import { useCheckAnswer } from "@/hooks/useCheckAnswer";
import { PutText } from "@/components/PutText";
import Title from "@/components/Layout/Title";

const NUM = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ITEM = [5, 6, 7, 8, 9, 10];

export default function Ikutu() {
  const { sendRight, sendWrong } = useCheckAnswer();
  const el_text = useRef<HTMLDivElement>(null);
  const [flag, setFlag] = useState<boolean>(true);
  const [answer, setAnswer] = useState<number>(0);
  const [selectValue, setSelectValue] = useState<number>(5);

  const changeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectValue = parseInt(e.target.value, 10); // セレクト要素のvalueをnumberに変換
    setSelectValue(selectValue);
    se.reset.play();
    el_text.current!.innerHTML = "";
    setFlag(false);
  };

  const giveQuestion = () => {
    se.pi.play();
    setFlag(true);
    const n = selectValue;
    const dir: number = Math.floor(Math.random() * 2 + 1);
    const ans: number = Math.floor(Math.random() * n);
    let left: number | string;
    let right: number | string;
    if (dir === 1) {
      left = "□";
      right = n - ans;
    } else {
      left = n - ans;
      right = "□";
    }
    el_text.current!.innerHTML = `${n} は　${left} と ${right}`;
    setAnswer(ans);
  };

  const checkAnswer = (myAnswer: number) => {
    if (!flag) return;
    setFlag(false);
    answer == myAnswer ? sendRight(el_text) : sendWrong(el_text);
    //間違えたら、1秒後に再入力可能に。
    if (answer != myAnswer)
      setTimeout(() => {
        setFlag(true);
      }, 1000);
  };

  return (
    <div>
      <Title title="いくつといくつ" />
      <div>
        <div className="flex justify-center items-center">
          <PutSelect ITEM={ITEM} handleEvent={changeSelect}></PutSelect>
          <div style={{ fontSize: "max(2vw,20px)" }}>のかず</div>
        </div>
        <PutText el_text={el_text}></PutText>
      </div>

      <Block leftCount={selectValue} rightCount={0} />
      <BtnNum ITEM={NUM} handleEvent={checkAnswer}></BtnNum>

      <BtnQuestion handleEvent={giveQuestion}></BtnQuestion>
    </div>
  );
}
