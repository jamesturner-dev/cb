<template>
  <section class="pt-4 text-xs mr-2 leading-3 text-neutral-600">
    <!-- {{ c }} -->
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
    const c = get('token')
    console.log(get('token'))
    return {
      c,
    }
  }
})


</script>
