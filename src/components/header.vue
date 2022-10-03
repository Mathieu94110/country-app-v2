<script>
export default {
  name: "Header",
  props: {
    userTheme: String,
  },
};
</script>

<template>
  <div class="header">
    <h1 class="header__title">Where in the world?</h1>
    <div>
      <input
        @change="$emit('switchTheme')"
        id="checkbox"
        type="checkbox"
        class="header__switch-checkbox"
      />
      <label for="checkbox" class="header__switch-label">
        <span>🌙</span>
        <span>☀️</span>
        <div
          class="header__switch-toggle"
          :class="{ 'header__switch-toggle--checked': userTheme === 'dark' }"
        ></div>
      </label>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  height: 64px;
  background-color: var(--element);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: #3c404326 0px 1px 1px 1px;

  &__title {
    color: var(--text);
    max-width: 50%;
  }
  &__switch-checkbox {
    display: none;
  }
  &__switch-label {
    align-items: center;
    background: var(--text-primary-color);
    border: calc(var(--element-size) * 0.025) solid var(--switch-color);
    border-radius: var(--element-size);
    cursor: pointer;
    display: flex;
    font-size: calc(var(--element-size) * 0.3);
    height: calc(var(--element-size) * 0.35);
    position: relative;
    padding: calc(var(--element-size) * 0.1);
    transition: background 0.5s ease;
    justify-content: space-between;
    width: var(--element-size);
    z-index: 1;
  }
  &__switch-toggle {
    position: absolute;
    background-color: var(--background-color-primary);
    border-radius: 50%;
    top: calc(var(--element-size) * 0.07);
    left: calc(var(--element-size) * 0.07);
    height: calc(var(--element-size) * 0.4);
    width: calc(var(--element-size) * 0.4);
    transform: translateX(0);
    transition: transform 0.3s ease, background-color 0.5s ease;

    &--checked {
      transform: translateX(calc(var(--element-size) * 0.6));
    }
  }
}
</style>
