<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span v-html="event.title"></span>
    </div>
    <div v-html="event.body.nl2br()">
    </div>
  </el-card>
</template>

<script>
  export default {
    props: {event},
  }
</script>

<style scoped>

</style>
