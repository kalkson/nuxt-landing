<template>
  <div class="full-screen">
    <HeadlinesContainer>
      <Headline
        >bitcoin exchange
        <br />
        and <span class="headline__oranged">wallet</span></Headline
      >
      <Subheadline>bitcoin excahnge you can trust.</Subheadline>
      <Button type="filled">sign up for free</Button>
    </HeadlinesContainer>
    <Illustration class="view-illustration" />
  </div>
</template>

<script>
import Illustration from '~/assets/svg/illustration.svg?inline'

export default {
  components: {
    Illustration,
  },
}
</script>

<style lang="scss" scoped>
.view-illustration {
  position: absolute;
  z-index: -1;
  right: 0;
}
</style>
