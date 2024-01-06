import React from "react";
import Link from "next/link";

const ITEMS = [
  {
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
    title: "６年生",
    links: [
      { href: "601bunsu_kake", title: "分数のかけ算" },
      { href: "602bunsu_wari", title: "分数のわり算" },
    ],
  },
  {
    title: "どうぐばこ",
    links: [
      { href: "701keisanbou", title: "けいさんぼう" },
      { href: "702okane", title: "おかね" },
    ],
  },
];

const LinksPopup: React.FC = () => {
  return (
    <div>
      {ITEMS.map((itemGroup) => (
        <div key={itemGroup.title}>
          <hr />
          <div
            className="flex p-2 text-2xl md:text-3xl lg:text-4xl text-center md:text-start text-bold text-white bg-green-600"
          >
            {itemGroup.title}
          </div>

          <div className="m-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
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
    </div>
  );
};

export default LinksPopup;
