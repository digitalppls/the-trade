<template>
  <div class="card p-fluid form">
    <h5>{{ $t('verify.title') }}</h5>
    <div class="formgrid grid">
      <div class="field col-12 sm:col-6">
        <label for="name2">{{ $t('verify.labels.fio') }}</label>
        <InputText id="name2" type="text" v-model="inputFio" />
      </div>
      <div class="field col-12 sm:col-6">
        <label for="email2">{{ $t('verify.labels.dateHappy') }}</label>
        <InputText id="email2" type="date" v-model="inputDate" />
      </div>

      <div class="field col-12 sm:col-6">
        <label for="name2">{{ $t('verify.labels.phone') }}</label>
        <InputText id="name2" type="tel" v-model="inputPhone" />
      </div>
      <div class="field col-12 sm:col-6">
        <label for="email2">{{ $t('verify.labels.country') }}</label>
        <InputText id="email2" type="text" v-model="inputCountry" />
      </div>

      <div class="field col-12 sm:col-6">
        <label for="name2">{{ $t('verify.labels.region') }}</label>
        <InputText id="name2" type="text" v-model="inputRegion" />
      </div>
      <div class="field col-12 sm:col-6">
        <label for="email2">{{ $t('verify.labels.city') }}</label>
        <InputText id="email2" type="text" v-model="inputCity" />
      </div>

      <div class="field col-12 sm:col-6">
        <label for="name2">{{ $t('verify.labels.address') }}</label>
        <InputText id="name2" type="text" v-model="inputAddress" />
      </div>
      <div class="field col-12 sm:col-6">
        <label for="email2">{{ $t('verify.labels.index') }}</label>
        <InputText id="email2" type="tel" v-model="inputIndex" />
      </div>
      <div class="col">
        <Button
          :label="$t('verify.btn')"
          class="p-button-rounded px-3"
          @click="console.log('save')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Verify',
  setup () {
    return {
      inputFio: ref<string>(''),
      inputDate: ref<string>(''),
      inputPhone: ref<string>(''),
      inputCountry: ref<string>(''),
      inputRegion: ref<string>(''),
      inputCity: ref<string>(''),
      inputAddress: ref<string>(''),
      inputIndex: ref<string>('')
    }
  }
})
</script>

<style scoped lang="scss">
.form {
  max-width: 800px;
}
</style>
