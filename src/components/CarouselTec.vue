<template>
  <div>
    <div class="row justify-center">
      <hooper 
        :settings="hooperSettings" 
        ref="carousel" 
        pagination="fraction" 
        @slide="updateCarousel" 
        class="col-xs-12 col-sm-12 col-md-12" 
        style="height: 200px; margin-top:-45px;">
      <slide>
        <div>
          <img src="../statics/pro/logo_1.png" style="width: 160px; height: 100px;">
        </div>
      </slide>

      <slide>
        <div>
          <img src="../statics/pro/logo_2.png" style="width: 160px; height: 100px;">
        </div>
      </slide>
      <slide>
        <div>
          <img src="../statics/pro/logo_3.png" style="width: 160px; height: 100px;">
        </div>
      </slide>
      <slide>
        <div>
          <img src="../statics/pro/logo_4.png" style="width: 180px; height: 100px;">
        </div>
      </slide>
      <slide>
        <div>
          <img src="../statics/pro/logo_5.png" style="width: 35%; height: 100px; margin-left:50px;">
        </div>
      </slide>
      <slide>
        <div>
          <img src="../statics/pro/logo_6.png" style="width: 180px; height: 100px; margin-left:-20px;">
        </div>
      </slide>
      <slide>
        <div>
          <img src="../statics/pro/logo_7.png" style="width: 180px; height: 100px;">
        </div>
      </slide>
      <slide>
        <div>
          <img src="../statics/pro/logo_8.png" style="width: 160px; height: 100px;">
        </div>
      </slide>
      <slide>
        <div>
          <img src="../statics/pro/logo_9.png" style="width: 160px; height: 100px;">
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
import Banner from '../components/footer'
import Formulario from '../components/formulario'
import CarouselTec from '../components/CarouselTec'
import CarouselServicios from '../components/CarouselSevicios'
import 'hooper/dist/hooper.css';
export default {
  name: 'CarouselTec',
    components: {
    HooperNavigation,
    Hooper,
    Slide
  },
  data () {
    return {
      ipad: false,
      slide: 1,
      color1: false,
      color2: false,
      color3: false,
      color4: false,
      color5: false,
      color6: false,
      color7: false,
      color8: false,
      color9: true,
      text:"",
      hooperSettings: {
      mouseDrag: false,
      wheelControl: true,
      touchDrag: false,
      wheelControl: false,
      trimWhiteSpace: false,
      keysControl: false,
      pagination: 'fraction',
      infiniteScroll: true,
      centerMode: true,
      autoPlay: true,
      playSpeed: 2000,
      breakpoints: {
          2400: {
              itemsToShow: 10
          },
          1800: {
              itemsToShow: 8.5
          },
          1761: {
            itemsToShow: 8.1
          },
          1722: {
            itemsToShow: 8.1
          },
          1664: {
            itemsToShow: 7.9
          },
          1622: {
            itemsToShow: 7.8
          },
          1500: {
              itemsToShow: 7.5
          },
          1486: {
            itemsToShow: 7.2
          },
          1422: {
            itemsToShow: 7
          },
          1400: {
            itemsToShow: 6.4
          },
          1345: {
            itemsToShow: 6.2
          },
          1297:{
            itemsToShow: 5.8
          },
          1238: {
            itemsToShow: 5.5
          },
          1214: {
            itemsToShow: 5.3
          },
          1100: {
            itemsToShow: 5.1
          },
          1092: {
            itemsToShow: 5
          },
          1089: {
            itemsToShow: 5
          },
          1064: {
            itemsToShow: 5
          },
          1058: {
            itemsToShow: 5
          },
          1024: {
            itemsToShow: 4.7
          },
          1002: {
            itemsToShow: 4.6
          },
          993: {
            itemsToShow: 4.3
          },
          992: {
            itemsToShow: 4.3
          },
          959: {
            itemsToShow: 4.2
          },
          943: {
            itemsToShow: 4.1
          },
          942: {
            itemsToShow: 4.1
          },
          882: {
            itemsToShow: 4
          },
          878: {
            itemsToShow: 4
          },
          834: {
            itemsToShow: 3.9
          },
          803: {
            itemsToShow: 3.6
          },
          768: {
            itemsToShow: 3.6
          },
          764: {
              itemsToShow: 3.6
          },
          762: {
            itemsToShow: 3.5
          },
          725: {
            itemsToShow: 3.4
          },
          723: {
            itemsToShow: 3.3
          },
          720: {
            itemsToShow: 3.2
          },
          714:{
            itemsToShow: 3.1
          },
          689: {
            itemsToShow: 3.2
          },
          668: {
            itemsToShow: 3.1
          },
          649: {
            itemsToShow: 3
          },
          645: {
            itemsToShow: 3
          },
          628: {
            itemsToShow: 3
          },
          620: {
            itemsToShow: 3
          },
          600: {
            itemsToShow: 2.9
          },
          595: {
            itemsToShow: 2.9
          },
          586: {
            itemsToShow: 2.8
          },
          531: {
            itemsToShow: 2.6
          },
          500: {
            itemsToShow: 2.4
          },
          492: {
            itemsToShow: 1.3
          },
          420: {
            itemsToShow: 1.2
          },
          452: {
            itemsToShow: 2.1
          },
          444: {
            itemsToShow: 2.1
          },
          414: {
            itemsToShow: 2.1
          },
          411: {
            itemsToShow: 2.1
          },
          375: {
            itemsToShow: 1.9
          },
          360: {
            itemsToShow: 1.9  
          },
          320: {
            itemsToShow: 1.8
          },
          0: {
            itemsToShow: 1
          }
        }
      }  
    }
  }
}
</script>

<style>

</style>