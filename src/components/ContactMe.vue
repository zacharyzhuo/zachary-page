<template>
  <div class="contactMe">
    <ul>
      <li class="text-left" v-for="(item) in contact" :key="item.index">
        <span class="">
        <font-awesome-icon :icon="item.icon" class="mr-2"/>
        {{ item.data }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ContactMe',
  data () {
    return {
      contact: [
        {
          icon: 'mobile-alt',
          data: '0975665706'
        },
        {
          icon: 'envelope',
          data: 'zacharyzhuo@g.ncu.edu.tw'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/base/_variables.scss";

.contactMe {
  svg {
    width: $font4*4;
    text-align: center;
  }
}
</style>
