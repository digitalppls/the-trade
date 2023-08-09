<template>
  <div class="grid">
    <div class="col-12">
      <iframe src="https://trade.metatrader5.com/terminal" class="trade-frame"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Trade'
})
</script>

<style scoped lang="scss">
.trade {
  &-frame {
    min-height: 500px;
    width: 100%;
    border: none
  }
}
</style>
