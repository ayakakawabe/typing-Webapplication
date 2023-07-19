<template>
  <header>
    <h1>タイピング問題</h1>
  </header>
  <main>
    <RouterView/>
  </main>
</template>
<style>
main{
    width: 100%;
    height: 90vh;
  }
header{
  background-color: rgb(202, 255, 124);
  height: 10vh;
}
h1{
  font-size: 6vh;
}
</style>