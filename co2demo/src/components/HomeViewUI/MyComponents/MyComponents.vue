<template>
  <div class="window-wrapper">
    <h3 class="window-title">My Components</h3>
    <div class="row-container">
      <div class="existing-component">
        <img class="component-image" src="../../../assets/tyre-single.jpg">
        <p class="component-title">Tyre Model: 3213</p>
        <p class="see-more">
          see more <span class="material-icons arrow-right"> arrow_right </span>
        </p>
      </div>

      <div class="existing-component insert-component">
        <span class="material-icons add-icon">add_box</span>
         <p class="insert-component-description">Add custom component</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.window-wrapper {
  width: 100%;
}

.window-title {
  color: var(--background);
  font-size: 1.5rem;
  margin-top: 40px;
}

.row-container {
  display: flex;
  column-gap: 20px;
}

.existing-component {
  background: var(--white);
  box-shadow: 2px 2px 3px 3px var(--lightshadow);
  max-width: 250px;
  width: 100%;
  min-height: 250px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
}

.existing-component:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: all 0.1s linear;
}

.component-title {
    color: var(--background);
    font-weight: 500;
    margin: 10px 20px 0px 20px;
}

.arrow-right {
    color: var(--background);
}

.component-image {
    width: 100%;
    height: 100%;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
}

.see-more {
    display: flex;
    column-gap: 5px;
    color: var(--background);
    margin: 10px;
    justify-content: flex-end;
}

.insert-component {
  background: var(--mainblue);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.add-icon {
    color: var(--background);
    font-size: 5rem;

}

.insert-component-description{
    font-weight: 600;
}

</style>
