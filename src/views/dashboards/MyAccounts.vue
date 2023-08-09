<template>
  <div class="grid">
    <div class="col-12">
      <div class="flex flex-column lg:flex-row align-items-center gap-4">
        <div class="flex flex-column lg:flex-row align-items-center gap-3">
          <img alt="avatar" src="/demo/images/avatar/avatar.png" class="w-4rem h-4rem flex-shrink-0" />
          <div class="flex flex-column align-items-center sm:align-items-start">
            <span class="text-900 font-bold text-4xl">{{ $t('myAccounts.welcome', { name: 'Isabel' }) }}</span>
            <p class="text-600 m-0">{{ $t('myAccounts.accountNumber', { number: 22101379 }) }}</p>
          </div>
        </div>
        <div class="flex flex-wrap justify-content-center lg:justify-content-end gap-2 lg:ml-auto">
          <Button
            type="button"
            :label="$t('myAccounts.trade')"
            icon="pi pi-arrows-h"
            class="p-button-rounded p-button-outlined px-3"
            @click="navigateTo('trade')"
          />
          <Button
            type="button"
            :label="$t('myAccounts.topUp')"
            icon="pi pi-download"
            class="p-button-rounded p-button-outlined px-3"
            @click="navigateTo('topUp')"
          />
          <Button
            type="button"
            :label="$t('myAccounts.withdraw')"
            icon="pi pi-money-bill"
            class="p-button-rounded px-3"
            @click="navigateTo('withdraw')"
          />
          <Button
            type="button"
            v-tooltip.bottom="$t('myAccounts.notifications')"
            icon="pi pi-bell"
            class="p-button-rounded px-3"
          />
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card surface-section px-5 py-4">
        <div class="font-medium text-3xl text-900 mb-3">{{ $t('myAccounts.information') }}</div>
        <div class="grid mt-5">
          <div class="col-12 md:col-6 py-0 md:pr-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.accountNumber') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">22101379</div>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6 py-0 md:pl-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.facilities') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">
                  {{ '0'.toLocaleString() }}
                </div>
              </li>
            </ul>
          </div>

          <div class="col-12 md:col-6 py-0 md:pr-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.shoulder') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">1:100</div>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6 py-0 md:pl-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.availableFunds') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">
                  {{ '0'.toLocaleString() }}
                </div>
              </li>
            </ul>
          </div>

          <div class="col-12 md:col-6 py-0 md:pr-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.accountType') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">Standard</div>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6 py-0 md:pl-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.totalProfit') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">
                  {{ '0'.toLocaleString() }}
                </div>
              </li>
            </ul>
          </div>

          <div class="col-12 md:col-6 py-0 md:pr-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.verificationLevel') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">Не
                  верифицирован
                </div>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6 py-0 md:pl-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.totalCompletedTrans') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">
                  {{ '0'.toLocaleString() }}
                </div>
              </li>
            </ul>
          </div>

          <div class="col-12 md:col-6 py-0 md:pr-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.email') }}</div>
                <div @click="toggleVisibleEmail"
                     class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">
                  {{
                    visibleEmail
                      ? 'test@gmail.com'
                      : $t('myAccounts.showEmail')
                  }}
                </div>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6 py-0 md:pl-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.tradeServer') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">
                  {{ '0'.toLocaleString() }}
                </div>
              </li>
            </ul>
          </div>

          <div class="col-12 md:col-6 py-0 md:pr-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.telephone') }}</div>
                <div @click="toggleVisibleNumber"
                     class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">
                  {{
                    visibleNumber
                      ? '8 999 999 99 99'
                      : $t('myAccounts.showPhone')
                  }}
                </div>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6 py-0 md:pl-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.topUpAllTime') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">
                  {{ '0'.toLocaleString() }}
                </div>
              </li>
            </ul>
          </div>

          <div class="col-12 md:col-6 py-0 md:pr-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.address') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">Russia</div>
              </li>
            </ul>
          </div>
          <div class="col-12 md:col-6 py-0 md:pl-0">
            <ul class="list-none h-full p-0 m-0">
              <li class="flex h-full align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                <div class="text-500 w-12 md:w-6 font-medium">{{ $t('myAccounts.withdrawAllTime') }}</div>
                <div class="text-900 w-full md:w-6 justify-content-end flex md:flex-order-0 flex-order-1">
                  {{ '0'.toLocaleString() }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div v-for="item in banners"
         :key="`banner-${item}`"
         class="col-12 lg:col-6">
      <div class="card py-5 px-4 h-full">
        <div class="flex h-full flex-wrap">
          <div class="py-0 pl-0 col-12 md:col-8 flex flex-column justify-content-between align-items-start">
            <div class="font-medium text-3xl text-900 mb-3">{{ $t(`myAccounts.metaTrade.${item}.title`) }}</div>
            <div class="font-medium text-500 mb-3">{{ $t(`myAccounts.metaTrade.${item}.text`) }}</div>
            <a :href="$t(`myAccounts.metaTrade.${item}.link`)"
               target="_blank"
               class="banner-btn p-button-icon p-button p-component p-button-success mr-2 mb-2 p-button-rounded p-button-outlined w-auto"
            >
              <i
                class="pi mr-2"
                :class="[`pi-${$t(`myAccounts.metaTrade.${item}.icon`)}`]"
                style="font-size: 1rem"
              />
              {{ $t(`myAccounts.metaTrade.${item}.btn`) }}
            </a>
          </div>
          <div
            class="py-0 px-0 col-12 md:col-4 md:h-full justify-content-center align-items-center mt-5 md:mt-0 flex flex-column">
            <Image :src="MT5LogoUrl" alt="MetaTrade Logo" />
            <div class="font-bold text-center text-900 mb-3">{{ $t(`myAccounts.metaTrade.${item}.type`) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useLayout } from '@/layout/composables/layout'
import MT5LogoUrl from '@/assets/img/mt5-logo.png'
import Icons from '@/views/utilities/Icons.vue'

export default defineComponent({
  setup () {
    return {
      layoutConfig: useLayout(),
      banners: ref<string[]>(['desktop', 'web', 'android', 'ios']),
      visibleEmail: ref<boolean>(false),
      visibleNumber: ref<boolean>(false),
      MT5LogoUrl,
      Icons
    }
  },
  methods: {
    toggleVisibleEmail () {
      this.visibleEmail = !this.visibleEmail
    },
    toggleVisibleNumber () {
      this.visibleNumber = !this.visibleNumber
    },
    navigateTo (name: string) {
      this.$router.push({ name })
    }
  }
})


</script>
<style scoped lang="scss">
.header {
  &-btn {
    &:hover {
      background: rgba(99, 102, 241, 0.04);
      color: var(--indigo-500);
      border: 1px solid;
    }
  }
}

.banner {
  &-btn {
    &:hover {
      background-color: var(--green-500) !important;
      color: var(--primary-color-text) !important;
    }
  }
}
</style>
