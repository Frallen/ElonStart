<template>
  <div class="nav">
    <div class="container">
      <div class="nav-wrapper" :class="{'visible':isShow}">
        <NuxtLink to="/" class="nav-logo">
          <NuxtImg src="logo.png"></NuxtImg>
        </NuxtLink>
        <div class="nav-list" :class="{'visible-menu':isShow}">
          <NuxtLink class="nav-list-item" :active-class="'active'"
                    v-for="item in Navigation.data.attributes.List"
                    :key="item.id"
                    :to="item.Path">
            {{ item.Title }}
          </NuxtLink>
        </div>
        <transition name="fade">
          <Icon
              name="mdi:close"
              class="icon"
              size="1.5em"
              @click.stop="isShow=false"
              v-show="isShow"
              :class="{'icon-top':isShow}"
          />
        </transition>
        <transition name="fade">
          <Icon
              name="cil:hamburger-menu"
              class="icon"
              size="1.5em"
              @click.stop="isShow=true"
              v-show="!isShow"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {Navigation} = storeToRefs(useMain())
const isShow = useState<boolean>(() => false)
</script>

<style scoped lang="less">
.nav {
  background: @bg_black;
  border-bottom: 1px solid #989393;

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .trs(0.3s);
    @media @lg {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &-logo {
    padding: 40px 20px;
    text-decoration: none;
    --t: 3px;  /* thickness */
    --s: 15px; /* size */
    --c: #fff; /* color */
    background:
        conic-gradient(at left var(--t) bottom var(--t),#0000 25%,var(--c) 0) bottom left,
        conic-gradient(from 180deg at right var(--t) top var(--t),#0000 25%,var(--c) 0) top right;
    background-size: var(--s) var(--s);
    background-repeat: no-repeat;
  }

  .icon {
    position: absolute;
    color: #fff;
    top: 39%;
    right: 0;
    display: none;
    cursor: pointer;
    @media @lg {
      display: block;
    }
  }

  .icon-top {
    top: 4%;
    right: 4%;
  }

  &-list {
    display: flex;
    align-items: center;
    padding: 40px 0;
    @media @lg {
      flex-direction: column;
      height: 0;
      opacity: 0;
      padding: 0;
    }

    &-item {
      font-size: 1em;
      text-decoration: none;
      font-weight: 300;
      margin: 0 0 0 43px;
      color: #fff;
      position: relative;
      .trs(0.3s);
      @media @xl {
        margin: 0 0 0 23px;
      }
      @media @lg {

        margin: 20px 0 0;
      }
    }

    &-item:hover {
      color: @gray;
      .trs(0.3s);
    }

    &-item:hover::after {
      .active-border();
    }
  }
}

.visible {
  background: rgba(0, 0, 0, 0.48);
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 1;
  .trs(0.3s);
}

.visible-menu {
  opacity: 1;
  height: 100%;
  align-self: center;
  .trs(0.3s);
}

.active {
  color: @gray;
  .trs(0.3s);
}

.active::after {
  .active-border();
}

.active-border {
  .trs(0.3s);
  position: absolute;
  bottom: -34%;
  left: 0;
  height: 1px;
  width: 100%;
  display: block;
  content: "";
  background: @gray;

}
</style>