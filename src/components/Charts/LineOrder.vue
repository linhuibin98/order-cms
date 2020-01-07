<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'
export default {
  name: 'LineOrder',
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
    seriesData: {
      type: Array,
      default: () => ({})
    },
    xData: {
      type: Array,
      default: () => ({})
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    seriesData(newValue, oldValue) {
      this.initChart(this.xData, newValue)
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart(xData, seriesData) {
      this.chart = echarts.init(document.getElementById(this.id))
      const options = {
        title: {
          text: '近七日订单数'
        },
        xAxis: {
          type: 'category',
          data: xData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: seriesData,
            type: 'line',
            itemStyle: {
              normal: { label: { show: true }}
            }
          }
        ],
        toolTip: {
          show: true,
          trigger: 'item',
          axisPointer: {
            type: 'line',
            axis: 'auto'
          },
          label: {
            show: true
          }
        }
      }
      this.chart.setOption(options)
    }
  }
}
</script>

<style>
</style>
