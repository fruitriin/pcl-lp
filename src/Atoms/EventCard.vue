<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>{{ev.title}}</span>
      <template v-if="ev.date !== ''">
        <span class="hidden-xs-only">- {{ev.date}}</span>
        <div class="hidden-sm-and-up">{{ev.date}}</div>
      </template>
    </div>
    <div class="text item">
      <ul>
        <li v-for="(item,key) in ev.body" :key="key" v-html="item.nl2br()" ></li>
      </ul>
    </div>
  </el-card>
</template>

<script>
    export default {
        props: ["ev"],
        name: "EventCard"
    }
</script>

<style scoped>

</style>
