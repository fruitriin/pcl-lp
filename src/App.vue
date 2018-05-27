<template>
  <div id="app">
    <el-header>

    </el-header>
    <div class="jumbotron title">
      <h2>最近友達と遊びました？</h2>
      <div class="footnote">部室感覚のクリエイターコミュニケーションSlack</div>
    </div>

    <el-main>
      <div>
        <p>
          デザイナー・エンジニア・ディレクターのような人たちが、<br>
          雑談したり、イベントを企画して遊んだりしています。
        </p>
        <p>あなたも一緒に遊びませんか？</p>
      </div>
      <div>
        # Channels

        - 雑談チャンネル
         - 分報chで個人的なつぶやきもOK
         -
        - イベント系ch
         - PCLイベント
         - メンバー企画のイベントの宣伝
        - 進捗ch
         - できたって報告するとGJchanが褒めてくれる！（笑
      </div>
      <div>
        # events
        - 第一回PCL（5/25）
         - 休みの日に集まってワイワイしよう
         - 「部屋」でやりたい！
         - ボードゲーム会
         - まったり懇親、突発LT
        - 天下一LP武道会（6/1入稿〆）
         - Landing Pageを作ってみませんか？
         - お題は、「PCLの入部届！」
        - PCL分室（平日夜） - 6/15（木）
         - 仕事が終わってから遊ぼうよ！
         - 某社の貸し会議室貸し切り
         - ゲーム会？LT会？ボードゲーム会？
         - 参加受付中
        - 第二回PCL
         - またやろう！

        Note: カード？カルーセル？
      </div>
    </el-main>
    <div class="foot-title">
      <p>一緒に遊びたくなってこない？</p>
      <el-button>Join now!</el-button>
    </div>

    <el-footer>

    </el-footer>
  </div>

</template>
<script>
// import buttonJoin from "/Atoms/ButtonJoin";
export default {
  name: 'App',
  // comments: buttonJoin
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }

</style>

<style lang="scss">
#app {

  .jumbotron{
    background-size:cover;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .title{
    background-image: url(./assets/background.jpg);
    height: 90vh;
    @extend .jumbotron;
    h2{
      font-size: 5vw;
    }
    .footnote{
      display: block;
      position:absolute;
      bottom:1em;
      right:1.5em;
    }
  }

  .foot-title {
    @extend .jumbotron;
    height: 40vh;

  }
}
</style>
