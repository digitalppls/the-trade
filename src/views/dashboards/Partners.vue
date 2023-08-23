<template>
  <div class="grid">
    <div class="col-12 xl:col-8">
      <div class="card surface-section px-5 py-4">
        <h5>{{ $t('partners.title') }}</h5>
        <div class="grid mt-5">


          <div class="col-12 py-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('partners.fatherTitle') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">User</div>
              </li>
            </ul>
          </div>

          <div class="col-12 py-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('partners.countChild') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">2</div>
              </li>
            </ul>
          </div>
          <div class="col-12 py-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('partners.totalEarned') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">
                  {{ '1243234'.toLocaleString() }} р.
                </div>
              </li>
            </ul>
          </div>

          <div class="col-12 py-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">
                  {{ $t('partners.link') }}
                </div>
                <div
                  class="text-900 w-full md:w-6 justify-content-end align-items-center flex md:flex-order-0 flex-order-1">
                  <div class="p-inputgroup mt-2 md:mt-0">
                    <span class="p-inputgroup-addon cursor-pointer"
                          @click="copyText('refLink')"
                    >
                       <i class="pi pi-copy" />
                    </span>
                    <InputText id="refLink" type="text" class="w-full" readonly v-model="refLink" />
                    <span v-if="visibleTextCopy" class="p-inputgroup-addon"
                    >
                       <i class="pi pi-check text-green-400" />
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Partners',
  setup () {
    return {
      visibleTextCopy: ref<boolean>(false)
    }
  },
  computed: {
    refLink (): string {
      return `${window.location.origin}/?ref=test134124`
    }
  },
  methods: {
    copyText (id: string) {
      const element = document.getElementById(id)
      // @ts-ignore
      element.select()
      // @ts-ignore
      element.setSelectionRange(0, 99999)
      document.execCommand('copy')
      this.visibleTextCopy = true
      setTimeout(() => {
        this.visibleTextCopy = false
      }, 4500)
    }
  }
})
</script>

<style scoped>

</style>
