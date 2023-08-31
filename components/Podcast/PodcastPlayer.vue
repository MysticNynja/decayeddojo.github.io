<template>
<div class="grid justify-center items-center">
    <iframe :src="source" height="500px" width="1020px" frameborder="0" scrolling="yes"></iframe>
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