<template>
  <Header @switch-theme="toggleTheme" :userTheme="this.userTheme" />
  <router-view></router-view>
</template>

<script>
import Header from "./components/header";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      userTheme: "light",
    };
  },
  mounted() {
    const initUserTheme = this.getTheme();
    this.setTheme(initUserTheme);
  },
  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light") {
        this.setTheme("dark");
      } else {
        this.setTheme("light");
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
  },
};
</script>

<style>
* {
  font-family: "Nunito Sans";
  text-decoration: none;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
body {
  margin: 0px;
  padding: 0px;
  text-align: center;
  border: 1px solid var(--switch-color);
  background-color: var(--background-color-secondary);
  color: var(--switch-color);
}
#app {
  width: 100%;
  height: 100%;
}
:root {
  --element-size: 4rem;
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --switch-color: #3f3f3f;
  --text-primary-color: #222;
}

/* Define styles for the root window with dark mode */
:root.dark {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --switch-color: #fff;
  --text-primary-color: #ddd;
}

p {
  color: var(--text-primary-color);
}
</style>
