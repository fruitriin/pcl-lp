<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span v-html="chan.title"></span>
    </div>
    <div v-html="chan.body.nl2br()">
    </div>
  </el-card>
</template>

<script>
  export default {
    props: ["chan"],
  }
</script>

<style scoped>

</style>
