<script setup>
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

console.log(user);
</script>

<template>
  <div class="wrapper"></div>
</template>
