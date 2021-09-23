<template>
  <div>{{ space.title }}</div>
  <img :src="space.hdurl" alt="">
  <div>{{ space.explanation }}</div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      space: computed(() => AppState.space)
    })
    return (
      state
    )
  }
}
</script>

<style>

</style>
