<template>
  <div @mouseover="hover = true" @mouseleave="hover = !hover" class="w-full relative cursor-[zoom-in]">
    <img :src="src" alt="" class="rounded-lg w-full h-full" />
    <div v-if="hover" class="absolute bg-dark opacity-50 inset-0 w-full h-full rounded-lg"></div>
    <div v-if="hover" class="absolute top-0 w-full p-3 h-full flex flex-col justify-between">
      <button
        class="
          rounded-full
          min-w-[110px]
          self-end
          bg-primary
          hover:bg-primary-active
          text-white
          py-[12px]
          font-bold
        "
      >
        Сохранить
      </button>
      <div class="flex">
          <a href="#" class="opacity-75 hover:opacity-95 text-dark rounded-full mr-2 py-[4px] px-[8px] bg-white font-semibold">
              about.com</a>
        <button class="opacity-75 ml-auto hover:opacity-95 text-dark rounded-full mr-2 flex justify-center items-center w-[30px] h-[30px] bg-white">
          <svg
            height="16"
            width="16"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Solid">
              <path
                d="m239.029 384.97a24 24 0 0 0 33.942 0l90.509-90.509a24 24 0 0 0 0-33.941 24 24 0 0 0 -33.941 0l-49.539 49.539v-262.059a24 24 0 0 0 -48 0v262.059l-49.539-49.539a24 24 0 0 0 -33.941 0 24 24 0 0 0 0 33.941z"
                fill="currentColor"
              />
              <path
                d="m464 232a24 24 0 0 0 -24 24v184h-368v-184a24 24 0 0 0 -48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40v-192a24 24 0 0 0 -24-24z"
                fill="currentColor"
              />
            </g>
          </svg>
        </button>
        <button class="opacity-75 hover:opacity-95 text-dark rounded-full flex justify-center items-center w-[30px] h-[30px] bg-white">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            height="16"
            width="16"
            viewBox="0 0 426.667 426.667"
            style="enable-background: new 0 0 426.667 426.667"
            xml:space="preserve"
          >
            <g>
              <g>
                <circle cx="42.667" cy="213.333" r="42.667" />
              </g>
            </g>
            <g>
              <g>
                <circle cx="213.333" cy="213.333" r="42.667" />
              </g>
            </g>
            <g>
              <g>
                <circle cx="384" cy="213.333" r="42.667" />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['src'],
  data() {
      return {
          hover: false
      }
  },
}
</script>

<style></style>
