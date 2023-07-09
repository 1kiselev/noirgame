<template>
  <div class="start-page">
    <div class="rect-1"></div>
    <div class="rect-2"></div>
    <div class="content">
      <noir-logo></noir-logo>
      <div class="user-data">
        <div class="description"></div>
        <my-input></my-input>
      </div>
      <div class="rules"></div>
      <start-button></start-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartPage",
};
</script>
<style lang="sass">
@import "@/assets/styles.module.sass"
.rect-1
  width: 800px
  height: 600px
  background: rgba(191, 191, 191, 1)
  border: solid 13px rgba(0, 0, 0, 0.3)
  border-radius: 20px
  position: absolute
  left: 320px
  top: 100px
  z-index: 1
  transform: rotate(-10deg)

.rect-2
  width: 800px
  height: 600px
  background: rgba(191, 191, 191, 1)
  border: solid 13px rgba(0, 0, 0, 0.3)
  border-radius: 20px
  position: absolute
  left: 320px
  top: 100px
  z-index: 2
  transform: rotate(10deg)
</style>
