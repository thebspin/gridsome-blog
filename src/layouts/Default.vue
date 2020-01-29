<template>
  <div class="bg-gray-200 min-h-screen">
    <layout-header/>
    <div class="container mx-auto bg-white p-6">
      <slot/>
    </div>
  </div>
</template>

<script>
import LayoutHeader from "@/components/Header.vue"

export default {
  components: {
    LayoutHeader
  }
}
</script>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<style scoped>

</style>