<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <transition name="fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/components/core/NavBar";
export default {
  components: { NavBar },
};
</script>
