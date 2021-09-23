<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <label for="start">Start date:</label>
        <form @submit.prevent="getPhoto">
          <input type="date"
                 v-model="state.query"
                 min="1980-01-01"
                 max="2021-09-21"
          >
          <button type="submit">
            Get the photo
          </button>
        </form>
      </div>
    </div>

    <div>
      <Space />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { spaceService } from '../services/SpaceService'
import Space from '../components/Space.vue'

export default {
  name: 'SearchPage',
  setup() {
    const state = reactive({
      query: '',
      img: computed(() => AppState.space)
    })
    return {
      state,
      async getPhoto() {
        await spaceService.getPhotos(state.query)
      }
    }
  },
  components: {
    Space
  }
}

</script>
