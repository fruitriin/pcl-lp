<template src="./assets/layout.html" />
<script>
  // import buttonJoin from "/Atoms/ButtonJoin";
  import EventCard from "./Atoms/EventCard";
  import ChannelCard from "./Atoms/ChannelCard";

  export default {
    name: 'App',
    components: {EventCard,ChannelCard},
    data() {
      return {
        descriptions : [
          "デザイナー、エンジニア、ディレクターといった人たちが、\n" +
          "イベントを企画して遊んだり、雑談したり、情報交換したりしているSlack（チャットスペース）\nProduct Creator's Link です。",

          "あなたも一緒に遊びませんか？"
        ],
        concept: "クリエイター同士で交流したい。\nだから、都内で集まろう！",
        channels:
          [
            {
              title: "雑談",
              body: "自分だけの\"分報\"チャンネルを作って自由につぶやけます。\n意外とリアクションもらえるかも。"
            },
            {
              title: "イベント",
              body: "オフライン活動を企画・運営します。\nメンバー企画のイベントのPRも自由です。"
            },
            {
              title: "進捗",
              body: "できたって報告するとGJちゃんに褒めてもらえます！（笑"
            },
            {
              title: "へるぷみー",
              body: "困ったときは助け合い！\nきっと誰かが答えてくれるはず。"
            },
          ],
        events: [
          {
            title: "第一回PCL",
            date: "5/25(土)",
            body: [
              "休みの日にワイワイしよう",
              "「部屋」でやりたい！",
              "ボードゲーム会、[mdubr]まったり懇親、突発LT"
            ]
          },
          {
            title: "天下一LP武道会",
            date: "5/31(入稿〆)",
            body: [
              "Landing Pageを[spbr]作ってみませんか？",
              "テーマは「入部届！」"
            ]
          },
          {
            title: "PCL分室（平日夜）",
            date: "6/15(木)",
            body: [
              "仕事終わった！遊ぼう！",
              "会議室貸し切り",
              "ゲーム会？[spbr]ボードゲーム会？LT会？",
              "参加受付中！"
            ]
          },
          {
            title: "第二回PCL",
            date: "6月中",
            body: ["またやろう！", "企画中……"]
          }
        ],
        requirements: [
          "Web・アプリ制作に携わる[spbr]クリエイターであること",
          "仲間を互いに尊重し合えること",
          "円滑な運営にご協力頂けること"
        ]
      }

    }
  }
</script>


<style lang="scss" src="./assets/style.scss"></style>
