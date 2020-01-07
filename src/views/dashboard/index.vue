<template>
  <div class="dashboard-container">
    <LineOrder width="100%" height="100%" :series-data="seriesData" :x-data="xData" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LineOrder from '@/components/Charts/LineOrder.vue'
import { getChartOrderData } from '@/api/user.js'

export default {
  name: 'Dashboard',
  components: { LineOrder },
  data() {
    return {
      currentRole: 'adminDashboard',
      seriesData: [],
      xData: []
    }
  },
  computed: {
    ...mapGetters(['roles', 'id'])
  },
  async created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
    const result = await getChartOrderData(this.id)
    if (result.errorCode === 0) {
      const { seriesData, xData } = result
      this.seriesData = seriesData
      this.xData = xData
    }
  }
}
</script>

<style scoped>
.dashboard-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
