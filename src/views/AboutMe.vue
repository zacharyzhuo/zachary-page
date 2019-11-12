<template>
  <div class="aboutMe section spaceWrapperContainer">
    <div id="about" class="spaceWrapper"></div>
    <div class="container">
      <div class="row">
          <div class="col-xs-12 col-md-6">
              <div class="about-content text-left">
                <h1 class="title mb-2">{{ title }}</h1>
                <h2 class="subTitle">I'm Zachary Zhuo / 卓育辰</h2>
                <p class="my-2">I am a graduate student.</p>
                <p class="my-2 description">網站建置中...</p>
                <ContactMe></ContactMe>
                <SocialMedia></SocialMedia>
              </div>
          </div>
          <div class="col-xs-12 col-md-6">
          </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/base/_variables.scss";
.about-content {
  p {
    color: darken($light-grey, 15%);
  }
}
</style>

<script>
import ContactMe from '@/components/ContactMe.vue'
import SocialMedia from '@/components/SocialMedia.vue'
export default {
  props: ['title'],
    components: {
      ContactMe, SocialMedia
  }
}
</script>
