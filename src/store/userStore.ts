// Utilities
import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    category: undefined as undefined,
    test: "asd" as string
  }),

  getters:{},

  actios: {}


})
