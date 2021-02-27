<script>
import { ref, onMounted } from 'vue'

export default {
  setup(_, { slots }) {
    const show = ref(false)
    onMounted(() => { show.value = true })
    return () => show.value && slots.default ? slots.default() : null
  }
}
</script>
