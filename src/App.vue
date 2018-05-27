<template>
  <div id="app">
    <div class="jumbotron title">
    </div>

    <el-main>
      <div>
        <p>
          <strong>Product Creator's Link</strong> はデザイナー、エンジニア、ディレクターといった人たちが、<br>
          イベントを企画して遊んだり、雑談したり、情報交換したりしているSlackです。
        </p>
        <p><strong>あなたも一緒に遊びませんか？</strong></p>

      </div>
      <h3>Concepts</h3>
        <p>
          クリエイター同士で交流したい。だから、都内で集まろう！
        </p>
      <h3>Channels</h3>
      <el-row type="flex" justify="center" style="flex-wrap: wrap;">
        <el-col v-for="chan in channels" :sm="8">
          <el-card>
            <div slot="header" class="clearfix">
              <span class="wrap">{{chan.title}}</span>
            </div>
            <div>
              {{chan.body}}
            </div>
          </el-card>
        </el-col>
      </el-row>

      <h3>Events</h3>
      <el-carousel class="hidden-sm-and-up" height="320px" :interval="6000"
                   indicator-position="outside" arrow="always">
        <el-carousel-item v-for="(event, key) in events" :key="key">
          <event-card :event="event"></event-card>
        </el-carousel-item>
      </el-carousel>
      <el-carousel height="320px"  class="hidden-xs-only"
                   :autoplay="false" arrow="always">
        <el-carousel-item v-for="page in Math.ceil(events.length/2) " :key="page"
        >
          <el-row type="flex" justify="space-around">
            <el-col v-for="ite in [1,2]" :span="10">
              <event-card :event="events[(ite-1) + (page-1)*2]"></event-card>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
      <h3>Requirements</h3>
      <ul>
        <li>
          エンジニア、デザイナー、プランナー等、Web・アプリ制作に携わるクリエイターであること
          <ul><li>職種不問</li></ul>
        </li>
        <li>
          仲間を互いに尊重し合えること
          <ul><li>他の人に迷惑をかける方は退部も</li></ul>
        </li>
        <li>
          円滑な運営にご協力頂けること
          <ul><li>無断ドタキャンや部室を綺麗に使えない方はNG</li></ul>
        </li>
      </ul>
    </el-main>
    <div class="foot-title">
      <p>一緒に遊びたくなってこない？</p>
      <h2>Product Creator's Link</h2>
      Join now!
    </div>

    <el-footer>

    </el-footer>
  </div>

</template>
<script>
  // import buttonJoin from "/Atoms/ButtonJoin";
  import EventCard from "./Atoms/EventCard"
  import 'element-ui/lib/theme-chalk/display.css';
  export default {
    name: 'App',
    components: {EventCard},
    data() {
      return {
        channels:
          [
            {
              title: "雑談チャンネル",
              body: "分報chで個人的なつぶやきも活発"
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
              "休みの日に集まってワイワイしよう",
              "「部屋」でやりたい！",
              "ボードゲーム会、まったり懇親、突発LT"
            ]
          },
          {
            title: "天下一LP武道会",
            date: "6/1入稿〆",
            body: [
              "Landing Pageを作ってみませんか？",
              "お題は、「PCLの入部届！」"
            ]
          },
          {
            title: "PCL分室（平日夜）",
            date: "6/15（木）",
            body: [
              "仕事が終わってから遊ぼうよ！",
              "某社の貸し会議室貸し切り",
              "ゲーム会？LT会？ボードゲーム会？",
              "参加受付中"
            ]
          },
          {
            title: "第二回PCL",
            date: "　6月中",
            body: ["またやろう！"]
          }

        ]

      }

    }

  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

</style>

<style lang="scss">
  #app {
    width: 100%;

    .title {
      background-size: contain;
      -webkit-background-size: contain;
      background-repeat: no-repeat;
      background-position: center bottom;
      display: block;

      width: 100%;

      background-image: url(./assets/background_sp.png);
      height: calc(100vw / 16 * 10);

      @media only screen and (min-width: 920px) {
        background-size: cover;
        height: 90vh;
      }

      @media only screen and (min-width: 800px) {
        height: calc(100vw / 16 * 10.5);
        max-height: 90vh;
        background-image: url(./assets/background.png);

      }

    }

    .wrap {
      white-space: pre;
    }
  }
</style>
