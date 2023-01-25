<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ButtonItem from './components/buttons/CounterButtonItem.vue'
import RestartButtonItem from './components/buttons/RestartButtonItem.vue'
const authorTitle="Arshak Ishkhanyan";
import { defineComponent } from "vue";
import {useStore} from "@/stores/counter";
import AuthorTitle from "@/components/AuthorTitle.vue";

const store = useStore()
</script>

<template>
  <div class="div--app-wrapper" v-on:click="store.appClick">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="25" height="225" />

      <div class="wrapper">
        <AuthorTitle v-bind:msg="authorTitle" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/how-it-works">How it works</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
    <div class="div--buttons-wrapper">
      <ButtonItem />
      <RestartButtonItem />
    </div>

  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
