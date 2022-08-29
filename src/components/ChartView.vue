<template>
  <div class="home">
    <el-button @click="handleSettings()">设置图表</el-button>
    <el-dialog
      v-model="dialogVisible"
      title="Settings"
      width="30%">
      <el-row>
        <el-col :span="8">标题</el-col>
        <el-col :span="16">
          <el-input v-model="tableParam.title"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">URL</el-col>
        <el-col :span="16">
          <el-select v-model="tableParam.url">
            <el-option
              v-for="(val, key, index) in props.urls"
              :label="val"
              :value="key"
              :key="index">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">列名</el-col>
        <el-col :span="16">
          <el-input v-model="tableParam.column"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">图表类型</el-col>
        <el-col :span="16">
          <el-select v-model="tableParam.type">
            <el-option
              v-for="(val, key, index) in tableType"
              :label="val"
              :value="key"
              :key="index">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="handleConfirm()">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
    <div :id="props.id" style="width: 100%; height:400px;"></div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref, reactive, onMounted, defineProps,
} from 'vue';
import * as echarts from 'echarts';
import axios from 'axios';

interface Props {
  id: string,
  urls: Record<string, string>,
}

const props = defineProps<Props>();
const dialogVisible = ref(false);
const tableParam = reactive({
  title: '',
  url: '',
  column: '',
  type: 'bar',
});
const tableType = {
  bar: '柱状图',
  line: '折线图',
  scatter: '散点图',
  pie: '饼图',
};

/**
 * 设置按钮
 */
function handleSettings() {
  dialogVisible.value = true;
}

/**
 * 生成表格
 */
function handleConfirm() {
  window.localStorage.setItem(props.id, JSON.stringify(tableParam));
  const block = document.getElementById(props.id) as HTMLElement;
  // 基于准备好的dom，初始化echarts实例
  echarts.dispose(block);
  const myChart = echarts.init(block);
  axios
    .get(tableParam.url)
    .then((response) => {
      const { data } = response;
      const legends = Object.keys(data);
      const num = legends.length;
      const sample = data[legends[0]];
      const sampleKeys = Object.keys(sample);
      if (tableParam.type === 'pie') {
        const seriesArray = {
          type: tableParam.type,
          data: Object.values(sample).map((item, index) => ({
            name: sampleKeys[index],
            value: item,
          })),
        };
        const option = {
          title: {
            text: tableParam.title,
          },
          series: seriesArray,
        };
        myChart.setOption(option);
      } else {
        const seriesArray = new Array(num).fill(0).map((item, index) => ({
          name: legends[index],
          type: tableParam.type,
          data: Object.values(data[legends[index]]),
        }));
        const option = {
          title: {
            text: tableParam.title,
          },
          legend: {
            data: legends,
          },
          xAxis: {
            data: sampleKeys,
          },
          yAxis: {},
          series: seriesArray,
        };
        myChart.setOption(option);
      }
    })
    .finally(() => {
      dialogVisible.value = false;
    });
}

/**
 * 生命周期函数
 */
onMounted(() => {
  const previousSet = window.localStorage.getItem(props.id);
  if (previousSet) {
    const obj = JSON.parse(previousSet);
    tableParam.title = obj.title;
    tableParam.url = obj.url;
    tableParam.column = obj.column;
    tableParam.type = obj.type;
    handleConfirm();
  }
});
</script>
