<template>
<div class="grid justify-center items-center">
    <iframe class="lg:h-230 lg:w-820 md:h-120 md:w-500" :src="source" frameborder="0" scrolling="no"></iframe>
</div>
</template>

<script>
export default {
  components: {
  },
  props: ["source"],
  data() {
    return {
    };
  }
}
</script>