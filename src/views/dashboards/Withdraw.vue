<template>
  <div class="card">
    <h5>{{$t('withdraw.title')}}</h5>
    <TabView>
      <TabPanel :header="$t('topUp.bankAndCard')">
        <div class="flex flex-wrap">
          <div
            v-for="item in banks"
            :key="`bank-${item.name}`"
            class="col-12 sm:col-6 md:col-3 xl:col-2"
          >
            <BankCard :item="item" />
          </div>
        </div>
      </TabPanel>
      <TabPanel :header="$t('topUp.crypto')">
        <div class="flex flex-wrap">
          <div
            v-for="item in crypto"
            :key="`cryptoWallets-${item.name}`"
            class="col-12 sm:col-6 md:col-3 xl:col-2"
          >
            <BankCard :item="item" />
          </div>
        </div>
      </TabPanel>
    </TabView>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PaymentType from '@/types/payment.type'
import CardGImgUrl from '@/assets/img/cardg.png'
import CardImgUrl from '@/assets/img/card.png'
import ChinaImgUrl from '@/assets/img/china.png'
import USDTImgUrl from '@/assets/img/usdt.png'
import BankCard from '@/components/AppUI/BankCard.vue'

export default defineComponent({
  name: 'Withdraw',
  components: { BankCard },
  setup () {
    return {
      banks: ref<PaymentType[]>([
        {
          name: 'cardG',
          commission: 0,
          img: CardGImgUrl
        },
        {
          name: 'card',
          commission: 0,
          img: CardImgUrl
        },
        {
          name: 'china',
          commission: 0,
          img: ChinaImgUrl
        }
      ]),
      crypto: ref<PaymentType[]>([
        {
          name: 'usdtTRC',
          commission: 0,
          img: USDTImgUrl
        },
        {
          name: 'usdtERC',
          commission: 0,
          img: USDTImgUrl
        },
        {
          name: 'usdtBEP',
          commission: 0,
          img: USDTImgUrl
        }
      ])
    }
  }
})
</script>

<style scoped>

</style>
