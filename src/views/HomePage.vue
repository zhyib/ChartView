<template>
  <el-row v-for="(item, index) in new Array(2)" :key="index">
    <el-col :span="6" v-for="(item, index2) in new Array(4)" :key="index2">
      <ChartView :id="`table1${index}${index2}`" :urls="requests"></ChartView>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import ChartView from '@/components/ChartView.vue';

const requests = {
  '/getTest1': '测试1',
  '/getTest2': '测试2',
  '/getTestPie': '测试3',
};

</script>
