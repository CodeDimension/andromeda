<template>
  <div id="app">
    <div class="mg-bt col">
      <router-link to="/input-file">Input File</router-link>
      <router-link to="/alert">Alert</router-link>
      <router-link to="/button">button</router-link>
      <router-link to="/checkbox">checkbox</router-link>
      <router-link to="/input">input</router-link>
      <router-link to="/progress-bar">progress bar</router-link>
      <router-link to="/radio">radio</router-link>
      <router-link to="/select">select</router-link>
      <router-link to="/slide-toggle">slide toggle</router-link>
      <router-link to="/textarea">textarea</router-link>
      <router-link to="/flexbox">flexbox</router-link>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
html, body, #app {
  margin: 0;
  height: 100%;
}

.mg-bt {
  margin-bottom: 15px;
}

.col {
  display: flex;
  flex-direction: column;
}
</style>
