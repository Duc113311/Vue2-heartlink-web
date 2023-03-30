<template>
  <div class="">
    <div class="circles">
      <div class="pulse">
        <span style="--i: 0"></span>
        <span style="--i: 1"></span>
        <span style="--i: 2"></span>
        <span style="--i: 3"></span>
      </div>
    </div>
    <div class="text-describe">Finding people near you...</div>
  </div>
</template>

<script>
export default {
  name: "option-page3",

  data() {
    return {};
  },
};
</script>
<style lang="css">
.circles {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: url("@/assets/image-dating/round_blind_date\ \(1\).png");
  background-color: aqua;
  background-position: 50% 50%;
  background-size: 100%;
}
.text {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.pulse {
  position: relative;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  background-position: 50% 50%;
  background-size: 100%;
}

.pulse span {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #e67e95;
  border-radius: inherit;
  opacity: 0.9;
  animation: pulseAnimate 4s ease-out infinite;
  animation-delay: calc(1s * var(--i));
  z-index: 1;
}

@keyframes pulseAnimate {
  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>
