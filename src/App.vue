<template>
  <div id="app">
    <Suspense #default>
      <router-view />
    </Suspense>
  </div>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
