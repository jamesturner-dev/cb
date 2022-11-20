<template>
  <section class="pt-4 text-sm mr-2 leading-3 text-neutral-600">
    {{ cookies }}
  </section>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'
export default defineComponent({
  setup() {
    const cookies = useCookies()
    console.log('mounted')
    const { get, getAll } = useCookies(['token'], { doNotParse: false, autoUpdateDependencies: false })
    console.log(get('token'))
    return {
      cookies,
    }
  }
})


</script>
