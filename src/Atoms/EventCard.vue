<template>
  <el-card style="height: 250px;">
    <div slot="header" class="clearfix">
      <span>{{event.title}}</span>
      <span v-if="event.date !== ''">
                  - {{event.date}}
                </span>
    </div>
    <div class="text item">
      <ul>
        <li
          v-for="(item,key) in event.body"
          :key="key"
        >
          {{item}}
        </li>
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
