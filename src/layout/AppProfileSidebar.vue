<script lang="ts">
import { useLayout } from '@/layout/composables/layout'
import { defineComponent } from 'vue'
import { useUserStore } from '@/stores/user'
import { mapActions } from 'pinia'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const { layoutState, onProfileSidebarToggle } = useLayout()
    const router = useRouter()
    const userStore = useUserStore()
    return {
      onProfileSidebarToggle,
      layoutState,
      userStore,
      router
    }
  },
  methods: {
    ...mapActions(useUserStore, ['logout']),
    sigOut () {
      this.logout()
      this.navigateTo('login')
      this.onProfileSidebarToggle()
    },
    navigateTo (name: string) {
      this.router.push({ name })
    }
  }
})

</script>

<template>
  <Sidebar v-model:visible="layoutState.profileSidebarVisible.value" position="right"
           class="layout-profile-sidebar w-full sm:w-25rem">
    <div class="flex flex-column mx-auto md:mx-0">
      <span class="mb-2 font-semibold">{{ $t('myAccounts.welcome') }}</span>
      <span class="text-color-secondary font-medium mb-5">Лаура</span>

      <ul class="list-none m-0 p-0">

        <li>
          <a
            @click="sigOut"
            class="cursor-pointer flex surface-border mb-3 p-3 align-items-center border-1 surface-border border-round hover:surface-hover transition-colors transition-duration-150">
                        <span>
                            <i class="pi pi-power-off text-xl text-primary"></i>
                        </span>
            <div class="ml-3">
              <span class="mb-2 font-semibold">{{ $t('auth.logout') }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>

  </Sidebar>
</template>
