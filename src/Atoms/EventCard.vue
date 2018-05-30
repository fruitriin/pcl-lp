<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>{{event.title}}</span>
      <template v-if="event.date !== ''">
        <span class="hidden-xs-only">- {{event.date}}</span>
        <div class="hidden-sm-and-up">{{event.date}}</div>
      </template>
    </div>
    <div class="text item">
      <ul>
        <li v-for="(item,key) in event.body" :key="key" v-html="item.nl2br()" ></li>
      </ul>
    </div>
  </el-card>
</template>

<script>
    export default {
        props: {event},
        name: "EventCard"
    }
</script>

<style scoped>

</style>
