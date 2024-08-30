<script lang=ts setup>
import hotel1 from "~/assets/images/hotel-1.jpg";
import hotel2 from "~/assets/images/hotel-2.jpg";
import hotel3 from "~/assets/images/hotel-3.jpg";
import hotel4 from "~/assets/images/hotel-4.jpg";

// Data gambar
const images = reactive({
  data: [
    {
      id: 1,
      src: hotel1,
      room: "Deluxe Room",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
    },
    {
      id: 2,
      src: hotel2,
      room: "Deluxe Balcony Room",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
    },
    {
      id: 3,
      src: hotel3,
      room: "Superior Room",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
    },
    {
      id: 4,
      src: hotel4,
      room: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
    },
    {
      id: 5,
      src: hotel1,
      room: "Premier Room",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
    },
    {
      id: 6,
      src: hotel2,
      room: "Premier Balcony Room",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
    },
    {
      id: 7,
      src: hotel3,
      room: "Family Suite ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
    },
    {
      id: 8,
      src: hotel4,
      room: "Galery Suite",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.",
    }
  ],
});

const mainSwiper:any = ref(null);
const thumbSwiper:any = ref(null);

const goToPrevSlide = () => {
  mainSwiper.value?.slidePrev();
};

const goToNextSlide = () => {
  mainSwiper.value?.slideNext();
};
</script>

<template>
 <div class="relative">
      <!-- Main Slider -->
      <Swiper
        ref="mainSwiper"
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="1"
        :loop="true"
        :spaceBetween="30"
        :effect="'creative'"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide v-for="image in images?.data" :key="image.id">
          <img
            :src="image.src"
            :alt="image.room"
            class="w-full object-cover h-[900px]"
          />
          <div class="absolute inset-0 bg-black bg-opacity-10 dark:bg-opacity-40"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white">
              <h1 class="text-4xl lg:text-6xl font-bold text-lime-500 dark:text-lime-600">{{ image.room }}</h1>
              <p class="mt-4 text-lg lg:text-xl">{{ image.description }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Thumb Slider -->
      <!-- <Swiper
        ref="thumbSwiper"
        :modules="[SwiperAutoplay]"
        :spaceBetween="10"
        :slidesPerView="3"
        :watchSlidesVisibility="true"
        :watchSlidesProgress="true"
        :loop="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="image in images?.data" :key="image.id">
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full object-cover h-48 brightness-50 hover:brightness-100 hover:scale-105 transition-all duration-300"
          />
        </SwiperSlide>
      </Swiper> -->

      <!-- Custom Navigation -->
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-4 flex justify-between items-center z-30 w-full px-8"
      >
        <button
          @click="goToPrevSlide"
          class="bg-lime-600/70 hover:bg-lime-700 rounded-full shadow-lg block w-20 h-20 transition-all duration-300 ease-in-out"
        >
          <Icon name="ooui:previous-ltr" class="text-4xl font-bold"/>
        </button>
        <button
          @click="goToNextSlide"
          class="bg-lime-600/70 hover:bg-lime-700 rounded-full shadow-lg block w-20 h-20 transition-all duration-300 ease-in-out"
        >
          <Icon name="ooui:previous-rtl" class="text-4xl font-bold"/>
        </button>
      </div>
    </div>
</template>