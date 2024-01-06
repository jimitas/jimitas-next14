import React from "react";
import Link from "next/link";
import styles from "src/components/Links/Links.module.scss";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ITEMS = [
  {
    id: "grade-1",
    title: "１ねんせい",
    links: [
      { href: "101block", title: "ぶろっく" },
      { href: "102kazoeyou", title: "かぞえよう" },
      { href: "103nanbanme", title: "なんばんめ" },
      { href: "104ikutu", title: "いくつといくつ" },
      { href: "105tashizan_1", title: "たしざんのしかた" },
      { href: "106hikizan_1", title: "ひきざんのしかた" },
      { href: "107tasu_renshu", title: "たしざんのれんしゅう" },
      { href: "108hiku_renshu", title: "ひきざんのれんしゅう" },
      { href: "109kenban", title: "けんばんハーモニカ" },
      { href: "110hiragana", title: "ひらがなのれんしゅう" },
      { href: "111katakana", title: "カタカナのれんしゅう" },
    ],
  },
  {
    id: "grade-2",
    title: "２年生",
    links: [
      { href: "201tokei", title: "とけい" },
      { href: "202tasu_hissan", title: "たし算のひっ算" },
      { href: "203hiku_hissan", title: "ひき算のひっ算" },
      { href: "204kazu_1000", title: "1000までの数" },
      { href: "205kuku", title: "九九のれんしゅう" },
      { href: "206kake_array", title: "かけ算アレイ図" },
    ],
  },
  {
    id: "grade-3",
    title: "３年生",
    links: [
      { href: "301warizan", title: "わり算" },
      { href: "302tasu_hissan", title: "たし算のひっ算" },
      { href: "303hiku_hissan", title: "ひき算のひっ算" },
      { href: "304kazu_10000", title: "10000より大きな数" },
      { href: "305kake_hissan1", title: "かけ算のひっ算1" },
      { href: "306kake_hissan2", title: "かけ算のひっ算2" },
      { href: "307shousu", title: "小数" },
      { href: "308bunsu", title: "分数" },
      { href: "309romaji", title: "ローマ字" },
      { href: "310rikoda_1", title: "リコーダー1" },
      { href: "311rikoda_2", title: "リコーダー2" },
    ],
  },
  {
    id: "grade-4",
    title: "４年生",
    links: [
      { href: "401kazu_oku", title: "１億より大きな数" },
      { href: "402wari_hissan1", title: "わり算のひっ算1" },
      { href: "403wari_hissan2", title: "わり算のひっ算2" },
      { href: "404shousu_kakewari", title: "小数のかけ算とわり算" },
      { href: "405bunsu", title: "分数" },
      { href: "406todofuken", title: "都道府県を覚えよう" },
    ],
  },
  {
    id: "grade-5",
    title: "５年生",
    links: [
      { href: "501shousu_kake", title: "小数のかけ算" },
      { href: "502shousu_wari", title: "小数のわり算" },
      { href: "503bunsu_tasu", title: "分数のたし算" },
      { href: "504bunsu_hiku", title: "分数のひき算" },
      { href: "505waon", title: "和音を出そう" },
    ],
  },
  {
    id: "grade-6",
    title: "６年生",
    links: [
      { href: "601bunsu_kake", title: "分数のかけ算" },
      { href: "602bunsu_wari", title: "分数のわり算" },
    ],
  },
  {
    id: "dougu-bako",
    title: "どうぐばこ",
    links: [
      { href: "701keisanbou", title: "けいさんぼう" },
      { href: "702okane", title: "おかね" },
    ],
  },
];

const Links: React.FC = () => {
  return (
    <div>
      <div className="flex ps-3 pb-2 text-blue-700 space-x-3">
        <Link className="hover:bg-blue-500 hover:text-white" href="#grade-1">
          １ねん
        </Link>
        <Link className="hover:bg-blue-500 hover:text-white" href="#grade-2">
          ２年
        </Link>
        <Link className="hover:bg-blue-500 hover:text-white" href="#grade-3">
          ３年
        </Link>
        <Link className="hover:bg-blue-500 hover:text-white" href="#grade-4">
          ４年
        </Link>
        <Link className="hover:bg-blue-500 hover:text-white" href="#grade-5">
          ５年
        </Link>
        <Link className="hover:bg-blue-500 hover:text-white" href="#grade-6">
          ６年
        </Link>
        <Link className="hover:bg-blue-500 hover:text-white" href="#dougu-bako">
          どうぐばこ
        </Link>
      </div>
      {ITEMS.map((itemGroup) => (
        <div key={itemGroup.title}>
          <hr />
          <div
            id={itemGroup.id}
            className="flex p-2 text-2xl md:text-3xl lg:text-4xl text-center md:text-start text-bold text-white bg-green-600"
          >
            {itemGroup.title}
            <Link href="#">
              <FontAwesomeIcon
                icon={faCircleChevronUp}
                className="w-12 h-6 md:h-7 lg:h-8 text-white cursor-pointer hover:opacity-80 hover:transition duration-300"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 m-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {itemGroup.links.map((item) => (
              <div key={item.href} className="flex justify-center">
                <Link href={item.href}>
                  <button
                    type="button"
                    className="w-40 md:w-48 lg:w-56 my-2 mx-2 text-sm md:text-base lg:text-lg bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded "
                  >
                    {item.title}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div style={{ height: "90vh" }}></div>
    </div>
  );
};

export default Links;
