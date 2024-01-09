import * as se from "@/components/se";
import { PutSelect } from "@/components/PutSelect";
import { useCallback, useEffect, useState, useRef } from "react";
import { Kenban } from "@/components/Kenban";
import Title from "@/components/Layout/Title";

const ITEM = ["けんばんハーモニカ", "リコーダー", "もっきん", "てっきん"];

export default function Home() {
  const el_select = useRef<HTMLSelectElement>(null);
  const [gakkiName, setGakkiName] = useState<string>("けんばんハーモニカ");

  const changeGakki = (e: any) => {
    se.reset.play();
    setGakkiName(e.target.value);
  };

  return (
    <div>
      <Title title="けんばんハーモニカ"/>
      <p className="text-xs text-center">
        スマートフォン等で上手く表示されない場合、ブラウザのメニューから「PC版で開く」を選んで表示してください。
      </p>

      <div className="flex m-3 justify-center items-center">
        <PutSelect ITEM={ITEM} handleEvent={changeGakki}></PutSelect>
      </div>

      <Kenban gakki={gakkiName} />
    </div>
  );
}
