<template>
  <div class="bank-item cursor-pointer flex flex-column align-items-center text-center">
    <div class="bank-item__img flex justify-content-center align-items-center mb-1">
      <img :src="item.img" :alt="$t(item.name)" />
    </div>
    <span class="bank-item__title text-900 font-bold">
      {{ $t(`topUp.banks.${item.name}`) }}
    </span>
    <p class="text-600 m-0">{{ $t('topUp.commission', { percent: item.commission }) }}</p>
  </div>
</template>

<script>
export default {
  name: 'BankCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.bank {
  &-item {

    &:hover {
      .bank-item__title {
        color: var(--primary-400) !important;
      }
    }

    &__title {
      transition: .2s color;
    }

    &__img {
      @media screen and (min-width: 576px) {
        min-height: 150px;
        max-height: 150px;
      }

      img {
        @media screen and (min-width: 576px) {
          max-height: 150px;
        }
      }

    }
  }
}

</style>
