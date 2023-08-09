// @ts-ignore
import { defineStore } from 'pinia'

interface StateUserType {
    auth: boolean
}
export const useUserStore = defineStore('user', {
    state: () => <StateUserType>({
        auth: false
    }),
    getters: {
        isAuth: (s) => s.auth
    },
    actions: {
        login () {
            this.auth = true
        },
        logout () {
            this.auth = false
        }
    },
    persist: true
})

