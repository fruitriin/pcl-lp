<template src="./assets/layout.html" />
<script>
  // import buttonJoin from "/Atoms/ButtonJoin";
  import EventCard from "./Atoms/EventCard"

  export default {
    name: 'App',
    components: {EventCard},
    data() {
      return {
        descriptions : [
          "Product Creator's Linkは" +
          "デザイナー、エンジニア、ディレクターといった人たちが、\n" +
          "イベントを企画して遊んだり、雑談したり、情報交換したりしているSlackです。",

          "あなたも一緒に遊びませんか？"
        ],
        concept: "クリエイター同士で交流したい。だから、都内で集まろう！",
        channels:
          [
            {
              title: "雑談チャンネル",
              body: "誰かに聞いてほしい雑談チャンネルの他に、自分だけの\"分報\"で自由につぶやけます"
            },
            {
              title: "イベントチャンネル",
              body: "オフライン活動を企画・運営します\nメンバー企画のイベントのPRも自由です"
            },
            {
              title: "進捗チャンネル",
              body: "できたって報告するとGJちゃんに褒めてもらえます！（笑"
            }
          ],
        events: [
          {
            title: "第一回PCL",
            date: "5/25(土)",
            body: [
              "休みの日にワイワイしよう",
              "「部屋」でやりたい！",
              "ボードゲーム会、[mdubr]まったり懇親、[spbr]突発LT"
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
              "ゲーム会？[mdbr]ボードゲーム会？[spbr]LT会？",
              "参加受付中！"
            ]
          },
          {
            title: "第二回PCL",
            date: "6月中",
            body: ["またやろう！", "企画中……"]
          }

        ]
      }
    }
  }
</script>


<style lang="scss" src="./assets/style.scss"></style>
