webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a={props:{event:event},name:"EventCard"},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(e.event.title))]),e._v(" "),""!==e.event.date?[n("span",{staticClass:"hidden-xs-only"},[e._v("- "+e._s(e.event.date))]),e._v(" "),n("div",{staticClass:"hidden-sm-and-up"},[e._v(e._s(e.event.date))])]:e._e()],2),e._v(" "),n("div",{staticClass:"text item"},[n("ul",e._l(e.event.body,function(t,s){return n("li",{key:s,domProps:{innerHTML:e._s(t.nl2br())}})}))])])},staticRenderFns:[]};var r={name:"App",components:{EventCard:n("VU/8")(a,l,!1,function(e){n("nesx")},"data-v-ddd5c518",null).exports},data:function(){return{descriptions:["Product Creator's Linkはデザイナー、エンジニア、ディレクターといった人たちが、\nイベントを企画して遊んだり、雑談したり、情報交換したりしているSlackです。","あなたも一緒に遊びませんか？"],concept:"クリエイター同士で交流したい。だから、都内で集まろう！",channels:[{title:"雑談チャンネル",body:'誰かに聞いてほしい雑談チャンネルの他に、自分だけの"分報"で自由につぶやけます'},{title:"イベントチャンネル",body:"オフライン活動を企画・運営します\nメンバー企画のイベントのPRも自由です"},{title:"進捗チャンネル",body:"できたって報告するとGJちゃんに褒めてもらえます！（笑"}],events:[{title:"第一回PCL",date:"5/25(土)",body:["休みの日にワイワイしよう","「部屋」でやりたい！","ボードゲーム会、[mdubr]まったり懇親、[spbr]突発LT"]},{title:"天下一LP武道会",date:"5/31(入稿〆)",body:["Landing Pageを[spbr]作ってみませんか？","テーマは「入部届！」"]},{title:"PCL分室（平日夜）",date:"6/15(木)",body:["仕事終わった！遊ぼう！","会議室貸し切り","ゲーム会？[mdbr]ボードゲーム会？[spbr]LT会？","参加受付中！"]},{title:"第二回PCL",date:"6月中",body:["またやろう！","企画中……"]}]}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("div",{staticClass:"key-visual"}),e._v(" "),n("el-main",[n("section",{staticClass:"description"},e._l(e.descriptions,function(t){return n("p",{domProps:{innerHTML:e._s(t.nl2br())}})})),e._v(" "),n("section",{staticClass:"concept"},[n("h3",[e._v("Concept")]),e._v(" "),n("p",{domProps:{innerHTML:e._s(e.concept)}})]),e._v(" "),n("section",{staticClass:"channels"},[n("h3",[e._v("Channels")]),e._v(" "),n("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"center"}},e._l(e.channels,function(t){return n("el-col",{attrs:{sm:8}},[n("el-card",[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",{domProps:{innerHTML:e._s(t.title.nl2br())}})]),e._v(" "),n("div",[e._v("\n              "+e._s(t.body)+"\n            ")])])],1)}))],1),e._v(" "),n("section",{staticClass:"events"},[n("h3",[e._v("Events")]),e._v(" "),n("el-carousel",{staticClass:"hidden-sm-and-up",attrs:{interval:6e3,"indicator-position":"outside",arrow:"always"}},e._l(e.events,function(e,t){return n("el-carousel-item",{key:t},[n("event-card",{attrs:{event:e}})],1)})),e._v(" "),n("el-carousel",{staticClass:"hidden-xs-only",attrs:{autoplay:!1,arrow:"always"}},e._l(Math.ceil(e.events.length/2),function(t){return n("el-carousel-item",{key:t,attrs:{height:"15em"}},[n("el-row",{attrs:{type:"flex",justify:"space-around"}},e._l([1,2],function(s){return n("el-col",{attrs:{span:11}},[n("event-card",{attrs:{event:e.events[s-1+2*(t-1)]}})],1)}))],1)}))],1),e._v(" "),n("section",{staticClass:"requirements"},[n("h3",[e._v("Requirements")]),e._v(" "),n("ul",[n("li",[e._v("\n          エンジニア、デザイナー、プランナー等、Web・アプリ制作に携わるクリエイターであること\n          "),n("ul",[n("li",[e._v("職種不問")])])]),e._v(" "),n("li",[e._v("\n          仲間を互いに尊重し合えること\n          "),n("ul",[n("li",[e._v("他の人に迷惑をかける方は退部も")])])]),e._v(" "),n("li",[e._v("\n          円滑な運営にご協力頂けること\n          "),n("ul",[n("li",[e._v("無断ドタキャンや部室を綺麗に使えない方はNG")])])])])]),e._v(" "),n("section",{staticClass:"conclusion"},[n("p",[e._v("一緒に遊びたくなってこない？")]),e._v(" "),n("h2",[e._v("Product Creator's Link")]),e._v("\n      Join now!\n    ")])]),e._v(" "),n("el-footer")],1)},staticRenderFns:[]};var o=n("VU/8")(r,i,!1,function(e){n("NiNL")},null,null).exports,d=n("zL8q"),c=n.n(d);n("tvR6"),n("sfy8");s.default.config.productionTip=!1,s.default.use(c.a),String.prototype.nl2br=function(){return this.replaceAll("\n","<br>").replaceAll("[spbr]","<br class=hidden-sm-and-up>").replaceAll("[mdobr]","<br class=hidden-md-only>").replaceAll("[mdubr]","<br class=hidden-md-and-up>").replaceAll("[mddbr]","<br class=hidden-md-and-down>").replaceAll("[mdbr]","<br class='hidden-lg-and-up hidden-sm-and-down'>")},String.prototype.replaceAll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return this.split(e).join(t)},new s.default({el:"#app",components:{App:o},template:"<App/>"})},NiNL:function(e,t){},nesx:function(e,t){},sfy8:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.732aa6cedcc2ebe27f9b.js.map