<template>
  <div class="background"></div>
  <div class="container">
    <div class="head" v-if="Page.attributes.Head">
      <div class="head-text">
        <div class="head-text-title" v-html="Page.attributes.Head?.Title"></div>
        <NuxtLink class="button" :to="Page.attributes.Head?.Link.Path">{{ Page.attributes.Head?.Link.Title }}</NuxtLink>
      </div>
      <div class="head-features">
        <div class="head-features-item" v-html="item.Text" v-for="item in Page.attributes.Head?.Features"
             @mousemove="mouseMove"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {name} = useRoute()
const {preparePage} = useMain()
const {Page} = storeToRefs(useMain())

await preparePage(name.toString())

const mouseMove = (e: Event) => {
  const {x, y} = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", e.clientX - x + "px");
  e.currentTarget.style.setProperty("--y", e.clientY - y + "px");
}
</script>

<style scoped lang="less">
.background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: url("/bg.png") no-repeat;
  background-color: #0c131a;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: block;
  font-weight: 700;
}

.head {
  display: flex;
  justify-content: space-between;
  margin: 114px 0 164px;
  @media @lg {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &-text {
    @media @lg {
      margin: 0 0 50px;
    }

    &-title::v-deep {
      color: #fff;
      font-weight: 700;
      font-size: 3.625em;
      text-transform: uppercase;

      background: linear-gradient(to right, #fff, #ff4d16);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media @lg {
        font-size: 2.250em;
      }

      span {
        display: block;
        font-weight: 100;
        font-size: 1.563em;
        @media @lg {
          font-size: 15px;
        }
      }
    }

    a {
      margin: 86px 0 0;
      text-decoration: none;
      @media @lg {
        margin: 86px auto 0;
      }
    }

  }

  &-features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
    @media @xs {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }

    &-item::v-deep {
      padding: 35px;
      color: #fff;
      font-size: 1em;
      font-weight: 100;
      //background: #ffffff14;
      border: 1px solid transparent;
      transition: background-color 0.3s ease;
      overflow: hidden;
      cursor: pointer;
      position: relative;

      .title {
        margin: 20px 0 0;
        font-weight: 700;
        font-size: 3.625em;
        text-transform: uppercase;
        @media @lg {
          font-size: 2.250em;
        }
      }
    }

    &-item::before, &-item::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.500s;


    }

    &-item::before {
      background: radial-gradient(700px circle at var(--x) var(--y),
      #a8a8ab,
      transparent 40%);
      z-index: -1;
    }

    &-item::after {
      background: radial-gradient(600px circle at var(--x) var(--y),
      #a8a8ab,
      transparent 40%);
      z-index: 1;
    }

    &-item:hover {
      border: 1px solid #53565c;
      .trs(0.3s);
    }

    &-item:hover::before {
      opacity: 1;
    }
  }

  &-feaures:hover {
    &-item::after {
      opacity: 1;
    }
  }

}
</style>