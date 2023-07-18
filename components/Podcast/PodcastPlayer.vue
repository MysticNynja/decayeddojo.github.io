<template>
<div class="grid justify-center items-center">
    <iframe :src="source" height="204px" width="800px" frameborder="0" scrolling="no"></iframe>
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