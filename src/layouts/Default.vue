<template>
  <div class="bg-gray-100 min-h-screen">
    <header-layout/>
    <header-image/>
    <div class="container mx-auto bg-white p-6">
      <slot/>
    </div>
  </div>
</template>

<script>
import HeaderLayout from "@/components/Header.vue"
import HeaderImage from "@/components/HeaderImage.vue"

export default {
  props: ['headerImage'],
  components: {
    HeaderLayout,
    HeaderImage
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
