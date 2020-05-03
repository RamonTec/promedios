<style lang="scss">
.img_group{
  background-image: radial-gradient(
      rgba(0, 0, 0, 0.329),
      rgba(0, 0, 0, 0.5)
    ),
  url("../statics/pro/Group9.jpeg");
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
			margin: 0;
			> li {
				position: relative;
				display: block;
				transition: 0.1s ease-in-out;
				list-style: none;
				float: left;
				//box-shadow: inset 1px 0px 0px 0px rgba(230, 230, 230, 1);
				background: #f7f7f7;
				min-width: 7.5rem;

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

	&.uix-tabs--center {
		box-shadow: none;

		.uix-tabs__nav {
			> ul {
				font-size: 0; /*Fighting the Space Between Inline Block Elements*/
				display: block;
				width: 100%;
				text-align: center;
				/*require*/
				//@include outer-shadow();

				li {
					font-size: 1rem; /*Fighting the Space Between Inline Block Elements*/
					display: inline-block;
					/*require*/
					float: none;
				}
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
				width: 300px;
				height: 300px;
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
						font-size:2em;
						color: #7e8083;
						width: 80px;
						height: 80px;
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

    

    <div class="img_group row justify-start">

      <div class="row justify-start bg-none">
        <div class="xs-hide sm-hide q-ml-md q-mt-xl">
          <q-card-section>
            <q-toolbar-title class="texto1 q-ml-sm text-h2">
              Nuestros Servicios
            </q-toolbar-title>
          </q-card-section>
          <q-card-section class="texto3 q-ml-sm text-h6">
            Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is <br>
            advertised as the most popular gun in American crime. do you believe that <br>
            shit? It actually says that in the little book that comes whit it: the most popular.
          </q-card-section>
        </div>

      <div class="md-hide lg-hide xl-hide col-xs-12 col-sm-12 col-md-4 q-mt-xl">
        <q-card-section>
          <div>
            <span class="texto1 q-ml-md text-h4">
              Nuestros Servicios
            </span>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="texto3 q-ml-md text-h6">
            <span>
              Now that there is the Tec-9, a crappy spray gun from South Miami. This gun  is
            advertised as the most popular gun in American crime. do you believe that
            shit? It actually says that in the little book that comes whit it: the most popular.
            </span>
          </div>
        </q-card-section>
      </div>
      </div>

      <hooper :settings="hooperSettings" ref="carousel" @slide="updateCarousel" class="row justify-between col-md-12 col-sm-12" style="height: 450px;">
        <slide>
          <div class="row bg-none justify-between">
            <img class="col-xs-12" src="../statics/pro/servicio_1.svg" style="width: 600px; height: 350px;">
          </div>
        </slide>
        <slide>
          <div class="row bg-none">
            <img class="col-xs-12" src="../statics/pro/servicio_2.svg" style="max-width: 500px; height: 350px;">
          </div>
        </slide>
        <slide>
          <div class="row bg-none justify-between">
            <img class="col-xs-12" src="../statics/pro/servicio_3.svg" style="max-width: 500px; height: 350px;">
          </div>
        </slide>
        <slide>
          <div class="row bg-none justify-between">
            <img class="col-xs-12" src="../statics/pro/servicio_4.svg" style="max-width: 500px; height: 350px;">
          </div>
        </slide>
        <slide>
          <div class="row bg-none justify-between">
            <img class="col-xs-12" src="../statics/pro/servicio_5.svg" style="max-width: 500px; height: 350px;">
          </div>
        </slide>
        <slide>
          <div class="row bg-none justify-between">
            <img class="col-xs-12" src="../statics/pro/servicio_6.svg" style="max-width: 500px; height: 350px;">
          </div>
        </slide>
        <slide>
          <div class="row bg-none justify-between">
            <img class="col-xs-12" src="../statics/pro/servicio_7.svg" style="max-width: 500px; height: 350px;">
          </div>
        </slide>
        <slide>
          <div class="row bg-none justify-between">
            <img class="col-xs-12" src="../statics/pro/servicio_8.svg" style="max-width: 500px; height: 350px;">
          </div>
        </slide>
        <slide>
          <div class="row bg-none justify-between my-card">
            <img class="col-xs-12" src="../statics/pro/servicio_9.svg" style="max-width: 500px; height: 350px;">
          </div>
        </slide>
      </hooper>

        

      <div class="xs-hide sm-hide row q-mb-md">
        <div class="col-12 q-ml-xl" style="margin-left:40px;">
          <q-btn icon="img:/statics/pro/flecha_right.svg" color="white" text-color="black" @click.prevent="slidePrev" style="height:50px;border-radius:10px;">
            
          </q-btn>
          <q-btn icon="img:/statics/pro/flecha_left.svg" class="q-ml-sm" color="white" text-color="black" @click.prevent="slideNext" style="height:50px;border-radius:10px;"></q-btn>
        </div>
      </div> 

    </div>


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
      infiniteScroll: true,
      centerMode: false,
      autoPlay: false,
      playSpeed: 3000,
      breakpoints: {
          2400: {
              itemsToShow: 7
          },
          1800: {
              itemsToShow: 6
          },
          1500: {
              itemsToShow: 5
          },
          1100: {
              itemsToShow: 4
          },
          764: {
              itemsToShow: 2
          },
          420: {
              itemsToShow: 2
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
