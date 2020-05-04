<template>
  <div>
    <div class="row justify-center q-mb-xl" style="margin-top:-40px;">
      <hooper class="xs-hide sm-hide col-md-12" :infiniteScroll="true" :itemsToShow="5.75" :itemsToSlide="3" :autoPlay="true" :playSpeed="4000" style="height: 180px;">
      
      <slide>
        <div class="col-xs-12 col-md-6 col-sm-2 text-center">
          <img src="../statics/pro/logo_1.png" style="max-width: 160px; height: 90px;">
        </div>
      </slide>

      <slide>
        <div class="col-xs-12 col-md-6 text-center">
          <img src="../statics/pro/logo_2.png" style="max-width: 160px; height: 90px;">
        </div>
      </slide>
      <slide>
        <div class="col-xs-12 col-md-6 col-sm-2 text-center">
          <img src="../statics/pro/logo_3.png" style="max-width: 160px; height: 90px;">
        </div>
      </slide>
      <slide>
        <div class="col-xs-12 col-md-6 col-sm-2 text-center">
          <img src="../statics/pro/logo_4.png" style="max-width: 160px; height: 90px;">
        </div>
      </slide>
      <slide>
        <div class="col-xs-12 col-md-6 col-sm-2 text-center">
          <img src="../statics/pro/logo_5.png" style="max-width: 160px; height: 90px;">
        </div>
      </slide>
      <slide>
        <div class="col-xs-12 col-md-6 col-sm-2 text-center">
          <img src="../statics/pro/logo_6.png" style="max-width: 160px; height: 90px;">
        </div>
      </slide>
      <slide>
        <div class="col-xs-12 col-md-6 col-sm-2 text-center">
          <img src="../statics/pro/logo_7.png" style="max-width: 160px; height: 90px;">
        </div>
      </slide>
      <slide>
        <div class="col-xs-12 col-md-6 col-sm-2 text-center">
          <img src="../statics/pro/logo_8.png" style="max-width: 160px; height: 90px;">
        </div>
      </slide>
      <slide>
        <div class="col-xs-12 col-md-6 col-sm-2 text-center">
          <img src="../statics/pro/logo_9.png" style="max-width: 160px; height: 90px;">
        </div>
      </slide>
        

      </hooper>
    </div>
  </div>
</template>

<script>
require("../../node_modules/@mdi/font/css/materialdesignicons.css");
import { Hooper, Slide, Navigation as HooperNavigation} from 'hooper';
import $ from 'jquery'
import 'hooper/dist/hooper.css';
export default {
  name: 'CarouselTec',
    components: {
    Hooper,
    Slide
  }
}
</script>

<style>

</style>