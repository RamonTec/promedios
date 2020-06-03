<style>
body{
   overflow-x: hidden;
}
</style>
<style lang="scss">
.img_group{
  background-image: radial-gradient(
      rgba(0, 0, 0, 0.329),
      rgba(0, 0, 0, 0.5)
    ),
  url("../statics/pro/Groupo_1.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #c7c5c5;
}

.img_group2{
  background-image: linear-gradient(
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    ),
  url("../statics/pro/Group11.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #c7c5c5;
}
    //Highlight Color
$highlight-color1: #ec5e79; //rgba(236, 94, 121, 1)
$highlight-color2: #e8588c; //rgba(232, 88, 140, 1)

//Primary Text Color
$primary-text-color1: #212121;
$primary-text-color2: #474747;

// Outer Shadow Effect
// ---------------------------
//
@mixin outer-shadow($type: 1) {
	// @include outer-shadow( 1 );

	@if ($type == 1) {
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05), 0 1px 6px rgba(0, 0, 0, 0.05),
			0 8px 8px rgba(0, 0, 0, 0.05), 0 16px 16px rgba(0, 0, 0, 0.05),
			8px 32px 32px rgba(0, 0, 0, 0.02), 8px 64px 64px rgba(0, 0, 0, 0.02);
	}

	@if ($type == 2) {
		box-shadow: 0 1.8vw 4vw -0.7vw #cbdfee;
	}
}

section {
	padding: 3rem 0;
}

/*
 * 1. Tab Normal Effect
 * 2. Tab Rotation Effect
*/

.uix-tabs {
	/* 
	 ---------------------------
	 1. Tab Normal Effect
	 ---------------------------
	 */

	.uix-tabs__content {
		display: none;
		text-align: left;

		&.active {
			display: block;
		}
	}

	.uix-tabs__nav {
		> ul {
			padding: 0;
			margin: 20px;
			> li {
				//position: relative;
				//display: block;
        list-style: none;
				/* transition: 0.1s ease-in-out;
				
				float: left;
				//box-shadow: inset 1px 0px 0px 0px rgba(230, 230, 230, 1);
				background: #f7f7f7;
				min-width: 7.5rem; */

				> a {
					position: relative;
					padding: 0.625rem;
					display: block;
					text-align: center;
				}
				&.active {
					background: #fff;
				}
			}

			&::after {
				content: "";
				display: block;
				clear: both;
			}
		}
	}

	/* 
	 ---------------------------
	 2. Tab Rotation Effect
	 ---------------------------
	 */
	&.uix-tabs--rotation {
		.uix-tabs__content {
			position: relative;
			//@include outer-shadow();
		}
		.uix-tabs__nav {
			position: relative;
			margin: 0;

			> ul {
				box-sizing: border-box;
				position: relative;
				width: 350px;
				height: 350px;
				border: none;
				border-radius: 50%;
				margin: 0;
				padding: 0;
				display: inline-block;

				> li {
					//transition: all 0.1s ease; //If you use a click effect, don't set it
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					position: absolute;
					width: 80px;
					height: 80px;
					background: none;
					box-shadow: none;
					z-index: 2;
					top: 0;
					left: 50%;
					min-width: inherit; /* Required */

					> a {
						font-size:1.6em;
						color: #7e8083;
						width: 70px;
						height: 70px;
						line-height: 60px;
            text-decoration: none;
						background: #2b3035;
						border: 2px solid #7e8083;
						border-radius: 100%;
						@include outer-shadow();
					}

					&.active > a {
						border: none;
            color: white;
					}
				}
			}
		}
	}
}

/* Center alignment */
.uix-t-c .uix-tabs.uix-tabs--rotation {
	.uix-tabs__nav {
		margin: 0 auto;
	}
}

@media all and (max-width: 768px) {
	.uix-tabs {
		&:not(.uix-tabs--rotation) li {
			width: 100% !important;
		}

		/* Tab Rotation Effect */
		&.uix-tabs--rotation {
			.uix-tabs__nav {
				width: auto !important;
			}
		}
	}
}

@font-face {
   font-family: Nexa-Bold;
   font-style: normal;
   font-weight: normal;
   src: url(../css/font/Nexa-Bold.ttf);
}

@font-face {
   font-family: desyrel;
   font-style: normal;
   font-weight: normal;
   src: url(../css/font/desyrel.ttf);
}

@font-face {
   font-family: open-sans;
   font-style: normal;
   font-weight: normal;
   src: url(../css/font/OpenSans-SemiBold.ttf);
}

.texto1{
  font-family: Nexa-Bold;
}

.texto2{
  font-family: desyrel;
}

.texto3{
  font-family: open-sans;
}

</style>
<template>
  <q-page>    

    

    <q-card dark square flat >
      <q-card-section class="img_group">
        <div class="row justify-start">
        
          <div class="row justify-start bg-none">
            <div class="xs-hide sm-hide q-ml-md q-mt-xl">
              <div>
                <q-toolbar-title class="texto1 q-ml-sm text-h2">
                  Nuestros Servicios
                </q-toolbar-title>
              </div>
              <div class="texto3 q-ml-sm text-h6">
                Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is <br>
                advertised as the most popular gun in American crime. do you believe that <br>
                shit? It actually says that in the little book that comes whit it: the most popular.
              </div>
            </div>

            <div class="md-hide lg-hide xl-hide col-xs-12 col-sm-12 col-md-4 q-mt-xl">
              <div>
                <span class="texto1 q-ml-md text-h4">
                  Nuestros Servicios
                </span>
              </div>
              <div class="texto3 q-ml-lg text-h6">
                <span>
                  Now that there is the Tec-9, a crappy spray gun from South Miami. This gun  is
                  advertised as the most popular gun in American crime. do you believe that
                  shit? It actually says that in the little book that comes whit it: the most popular.
                </span>
              </div>
            </div>
          </div>

          <hooper :settings="hooperSettings" ref="carousel" pagination="fraction" @slide="updateCarousel" class="row q-ml-sm justify-between col-xs-12 col-md-12 col-sm-12" style="height: 500px;">
            
            <slide>
              <div class="row bg-none justify-between">
                <img class="col-xs-12" src="../statics/pro/servicio_1.svg" style="max-width:100%; height: 400px;">
              </div>
            </slide>

            <slide>
              <div class="row bg-none">
                <img class="col-xs-12" src="../statics/pro/servicio_2.svg" style="max-width:100%; height: 400px;">
              </div>
            </slide>

            <slide>
              <div class="row bg-none justify-between">
                <img class="col-xs-12" src="../statics/pro/servicio_3.svg" style="max-width:100%; height: 400px;">
              </div>
            </slide>

            <slide>
              <div class="row bg-none justify-between">
                <img class="col-xs-12" src="../statics/pro/servicio_4.svg" style="max-width:100%; height: 400px;">
              </div>
            </slide>

            <slide>
              <div class="row bg-none justify-between">
                <img class="col-xs-12" src="../statics/pro/servicio_5.svg" style="max-width:100%; height: 400px;">
              </div>
            </slide>

            <slide>
              <div class="row bg-none justify-between">
                <img class="col-xs-12" src="../statics/pro/servicio_6.svg" style="max-width:100%; height: 400px;">
              </div>
            </slide>

            <slide>
              <div class="row bg-none justify-between">
                <img class="col-xs-12" src="../statics/pro/servicio_7.svg" style="max-width:100%; height: 400px;">
              </div>
            </slide>

            <slide>
              <div class="row bg-none justify-between">
                <img class="col-xs-12" src="../statics/pro/servicio_8.svg" style="max-width:100%; height: 400px;">
              </div>
            </slide>

            <slide>
              <div class="row bg-none justify-between my-card">
                <img class="col-xs-12" src="../statics/pro/servicio_9.svg" style="max-width:100%; height: 400px;">
              </div>
            </slide>

          </hooper>

          <div class="row xs-hide sm-hide q-ml-md q-mb-md" style="margin-top:-30px;">
            <div class="col-5 q-ml-md">
              <q-btn color="white" text-color="black" @click.prevent="slidePrev" style="height:50px;border-radius:10px;">
                <q-img src="../statics/pro/flecha_right.svg" style="width:20px; height:45px; margin-top:-2px;"></q-img>
              </q-btn>
            </div>
            <div class="col-2" click.prevent="slideNext">
              <q-btn class="q-ml-sm" color="white" text-color="black" @click.prevent="slideNext" style="height:50px;border-radius:10px;">
                <q-img src="../statics/pro/flecha_left.svg" style="width:20px; height:45px; margin-top:-2px;"></q-img>
              </q-btn>
            </div>
          </div>

          <div class="row md-hide lg-hide xl-hide q-mb-md q-ml-md" style="margin-top:-30px;">
            <div class="col-5 q-ml-sm" @click.prevent="slidePrev">
              <q-btn color="white" text-color="black" @click.prevent="slidePrev" style="height:50px;border-radius:10px;">
                <q-img src="../statics/pro/flecha_right.svg" style="width:20px; height:45px; margin-top:-2px;"></q-img>
              </q-btn>
            </div>
            <div class="col-2" click.prevent="slideNext">
              <q-btn class="q-ml-sm" color="white" text-color="black" @click.prevent="slideNext" style="height:50px;border-radius:10px;">
                <q-img src="../statics/pro/flecha_left.svg" style="width:20px; height:45px; margin-top:-2px;"></q-img>
              </q-btn>
            </div>
          </div>

        </div>
      </q-card-section>
    </q-card>



    <CarouselServicios></CarouselServicios>    

    <CarouselTec></CarouselTec>

    <Formulario></Formulario>
    
    <Banner></Banner>


  </q-page>
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
  name: 'PageIndex',
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    Banner,
    Formulario,
    CarouselTec,
    CarouselServicios
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
      wheelControl: false,
      touchDrag: false,
      wheelControl: false,
      trimWhiteSpace: true,
      keysControl: false,
      pagination: 'fraction',
      infiniteScroll: false,
      centerMode: false,
      autoPlay: false,
      playSpeed: 3000,
      breakpoints: {
          2400: {
              itemsToShow: 6.2
          },
          1800: {
              itemsToShow: 5.2
          },
          1761: {
            itemsToShow: 4.9
          },
          1722: {
            itemsToShow: 4.8
          },
          1664: {
            itemsToShow: 4.6
          },
          1622: {
            itemsToShow: 4.5
          },
          1500: {
              itemsToShow: 4.4
          },
          1486: {
            itemsToShow: 4.2
          },
          1422: {
            itemsToShow: 3.9
          },
          1400: {
            itemsToShow: 4.2
          },
          1345: {
            itemsToShow: 3.7
          },
          1297:{
            itemsToShow: 3.6
          },
          1238: {
            itemsToShow: 3.4
          },
          1214: {
            itemsToShow: 3.3
          },
          1100: {
              itemsToShow: 3.2
          },
          1092: {
            itemsToShow: 3
          },
          1089: {
            itemsToShow: 3
          },
          1064: {
            itemsToShow: 3
          },
          1058: {
            itemsToShow: 3
          },
          1024: {
            itemsToShow: 2.8
          },
          1002: {
            itemsToShow: 2.8
          },
          993: {
            itemsToShow: 2.7
          },
          992: {
            itemsToShow: 2.7
          },
          959: {
            itemsToShow: 2.6
          },
          942: {
            itemsToShow: 2.6
          },
          882: {
              itemsToShow: 2.5
          },
          878: {
            itemsToShow: 2.4
          },
          834: {
            itemsToShow: 2.3
          },
          803: {
            itemsToShow: 2.2
          },
          768: {
            itemsToShow: 2.1
          },
          764: {
              itemsToShow: 2.2
          },
          762: {
            itemsToShow: 2.2
          },
          725: {
            itemsToShow: 2.1
          },
          723: {
            itemsToShow: 2
          },
          720: {
            itemsToShow: 2
          },
          714:{
            itemsToShow: 2.1
          },
          689: {
            itemsToShow: 1.9
          },
          668: {
              itemsToShow: 1.8
          },
          649: {
            itemsToShow: 1.8
          },
          645: {
            itemsToShow: 1.8
          },
          628: {
            itemsToShow: 1.7
          },
          620: {
            itemsToShow: 1.7
          },
          600: {
            itemsToShow: 1.6
          },
          595: {
            itemsToShow: 1.6
          },
          586: {
            itemsToShow: 1.6
          },
          531: {
            itemsToShow: 1.5
          },
          500: {
              itemsToShow: 1.4
          },
          492: {
              itemsToShow: 1.3
          },
          452: {
            itemsToShow: 1.3
          },
          420: {
              itemsToShow: 1.2
          },
          411: {
              itemsToShow: 1.1
          },
          375: {
              itemsToShow: 1
          },
          0: {
              itemsToShow: 1
          }
        }
      }  
    }
  },
  created() {
    this.medida = screen.width
    this.getMedida()
  },
  methods: {
    getMedida(){
      if(this.medida == 1024){
        this.ipad = true
      }
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    }
  }
}
</script>
