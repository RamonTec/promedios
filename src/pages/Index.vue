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
  url("../statics/pro/Group11.jpeg");
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

      <hooper :settings="hooperSettings" ref="carousel" @slide="updateCarousel" class="row justify-between q-ml-sm col-md-12 col-sm-12" style="height: 450px;">
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


    <div class="xs-hide sm-hide row q-mt-xl">
      <div class="col-11" style="background: #2b3035; border-radius: 0 25px 25px 0; heigth: 120px">
       <!-- Content 02
        ====================================================== -->
        <section class="uix-spacing--m">
          <div class="container uix-t-c">
            <div class="row justify-between">
              <div class="col-12">
                <div class="uix-tabs uix-tabs--rotation" data-rotation="true" data-rotation-display="9" data-rotation-radius="130" data-rotation-wrapper-angle="130">
                  <div class="row">
                    <div class="col-5 q-mt-md q-mb-md">
                    <div class="uix-tabs__nav">
                      <ul>
                        <div>
                          <img src="../statics/pro/pro_med.png" style="width: 120px; height: 120px; position:relative; top:60px; left:75px; transform: rotate(231deg)">
                        </div>
                        
                        <li class="active a" v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = true;">
                          <a href="javascript:void(0);" :style=" color9 == true ? 'background-color: #2bfdb1;' : 'background-color: #2b3035;' ">C</a>
                        </li>

                        <li v-on:click="color1 = true; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0);" :style=" color1 == true ? 'background-color: #429dff;' : 'background-color: #2b3035;' ">A-W</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = true; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;" >
                          <a href="javascript:void(0); text-whtie" :style=" color2 == true ? 'background-color: #ff4343;' : 'background-color: #2b3035;' ">E-C</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = true; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color3 == true ? 'background-color: #48ffe0;' : 'background-color: #2b3035;' ">S</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = true; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color4 == true ? 'background-color: #be43ff;' : 'background-color: #2b3035;' ">A</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = true; color6 = false; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color5 == true ? 'background-color: #ff45fb;' : 'background-color: #2b3035;' ">S</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = true; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color6 == true ? 'background-color: #ffad4a;' : 'background-color: #2b3035;' ">M-D</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = true; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color7 == true ? 'background-color: #f0c54f;' : 'background-color: #2b3035;' ">B</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = true; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color8 == true ? 'background-color: #45ff45;' : 'background-color: #2b3035;' ">3-D</a>
                        </li>
                      </ul>
                    </div><!-- /.uix-tabs__nav -->
                  </div>
                  <div class="col-6">
                    <div class="uix-tabs__content active">
                      <span class="texto1 text-h4 text-weight-bold" style="color: #2bfdb1;">Consultoria</span>
                      <p class="texto3 q-mt-md">
                        El mundo hoy esta en un inminente cambio, por eso, es necesario
                        re-inventarnos. La innovación en los modelos de negocio actuales son la clave
                        para llevarlos y entrar en la transformación digital y dirigirlos al éxito,
                        debemos enfocar la tecnología como un facilitador entre negocios y usuarios;
                        Operar un negocio digital se ha convertido en un gran reto para las empresas
                        y más en un mundo tan cambiante como al día de hoy. 
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row justify-between">
                        <q-btn outline style="color: #fdfdfd;" label="Transformación Digital" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Digitalización de Procesos" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Automatización de Procesos" class="col-3" size="md" no-caps />
                      </div>
                      <div class="texto3 row justify-between q-mt-md">
                        <q-btn outline style="color: #fdfdfd;" label="Optimización de Procesos" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Canales de Comunicación" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Asesoria Especializada" class="col-3" size="md" no-caps />
                      </div>
                    </div>
                    <div class="uix-tabs__content">
                      <span class="text-h4 text-weight-bold" style="color: #429dff;">Api Whatsapp</span>
                      <p class="texto3 q-mt-md">
                        Whatsapp hoy en día es el medio de comunicación numero uno en el mundo,
                        de aquí parte el desarrollo de procesos y aplicativos integrados a este para
                        lograr diferentes objetivos a través de él.
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row justify-between">
                        <q-btn outline style="color: #fdfdfd;" label="Puentes de comunicación" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Comunicación directa" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Integranción de Procesos" class="col-3" size="md" no-caps />
                      </div>
                      <div class="texto3 row justify-between q-mt-md">
                        <q-btn outline style="color: #fdfdfd;" label="Venta Simplificada" class="col-3" size="md" no-caps />
                      </div>
                    </div>
                    <div class="uix-tabs__content">
                      <span class="texto1 text-h4 text-weight-bold" style="color: #ff4343;">E-Commerce</span>
                      <p class="texto3 q-mt-md">
                        El cambio que vive el mundo el día de hoy esta impulsando el comercio
                        electrónico, vemos los crecientes indices y la constante tendencia que esta
                        llevando el mercado a la compra de productos y servicios en internet, sumando
                        el alcance en ventas que se logra tener gracias a los clientes que acuden a él. 
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row justify-between">
                        <q-btn outline style="color: #fdfdfd;" label="Automatización de Ventas" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Aumento de Ventas" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Ventas por Conversiones" class="col-3" size="md" no-caps />
                      </div>
                    </div> 
                    <div class="uix-tabs__content">
                      <span class="texto1 text-h4 text-weight-bold" style="color: #48ffe0;">Sistemas</span>
                      <p class="texto3 q-mt-md">
                        Los sistemas hoy en día son la fuente de la transformación digital, quienes
                        permiten desarrollar los entornos digitales que conocemos hoy en día, y nos
                        permiten alcanzar el éxito al lograr toda esta evolución con el único fin de
                        construir productos que realmente respondan a problemas y necesidades
                        globales que puedan ser innovadoras en el mercado.
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row justify-between">
                        <q-btn outline style="color: #fdfdfd;" label="Transformación Digital" class="col-3 q-mt-md" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Digitalización de Procesos" class="col-3 q-mt-md" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Automatización de Procesos" class="col-3 q-mt-md" size="md" no-caps />
                      </div>
                      <div class="texto3 row justify-between">
                        <q-btn outline style="color: #fdfdfd;" label="Optimazación de Procesos" class="col-3 q-mt-md" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Arquitectura de información" class="col-3 q-mt-md" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Flujo de Información" class="col-3 q-mt-md" size="md" no-caps />
                      </div>
                    </div>
                    <div class="uix-tabs__content">
                      <span class="texto1 text-h4 text-weight-bold" style="color: #be43ff;">Apps</span>
                      <p class="texto3 text-body1 q-mt-md">
                        Las Aplicaciones móviles juegan un papel importante en nuestras vidas, hoy
                        en día pasamos gran parte de nuestro tiempo en ella y nos facilitan la vida, he
                        aquí el éxito de este modelo y el futuro en el. 
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row justify-between">
                        <q-btn outline style="color: #fdfdfd;" label="Android" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="IOS" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Hibridas" class="col-3" size="md" no-caps />
                      </div>
                      <div class="texto3 row justify-between">
                        <q-btn outline style="color: #fdfdfd;" label="Nativas" class="col-3 q-mt-md" size="md" no-caps />
                      </div>
                    </div>   
                    <div class="uix-tabs__content">
                      <span class="texto1 text-h4 text-weight-bold" style="color: #ff45fb;">Servidores</span>
                      <p class="texto3 q-mt-md">
                        Todo proyecto digital necesita un lugar en donde vivir 
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row justify-between">
                        <q-btn outline style="color: #fdfdfd;" label="Administración" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Monitoreo" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Cloud" class="col-3" size="md" no-caps />
                      </div>
                      <div class="texto3 row justify-between">
                        <q-btn outline style="color: #fdfdfd;" label="Dedicados" class="col-3 q-mt-md" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Hosting" class="col-3 q-mt-md" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Hosting" class="col-3 q-mt-md" size="md" no-caps />
                      </div>
                    </div>   
                    <div class="uix-tabs__content">
                      <span class="texto1 text-h4 text-weight-bold" style="color: #ffad4a;">Marketing Digital</span>
                      <p class="texto3 q-mt-md">
                        Las campañas de marketing digital juegan un papel importante en la
                        transformación digital, son la herramienta que nos permite llegar a neutros
                        clientes objetivos, y hacen parte del ecosistema tecnológico para lograr todas
                        nuestras metas y objetivos
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd;" label="FacebookAdd" class="col-3 q-mr-md" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="GoogleAdd" class="col-3" size="md" no-caps />
                      </div>
                    </div>   
                      <div class="uix-tabs__content">
                        <span class="texto1 text-h4 text-weight-bold" style="color: #f0c54f;">Branding</span>
                        <p class="texto3 q-mt-md">
                          La forma como el mundo te ve y te percibe es decisivo
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                        <div class="texto3 row justify-between">
                          <q-btn outline style="color: #fdfdfd;" label="Diseño Publicitario" class="col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd;" label="Construcción de Marca" class="col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd;" label="Portafolio Grafico" class="col-3" size="md" no-caps />
                        </div>
                      </div>    
                     <div class="uix-tabs__content">
                        <span class="texto1 text-h4 text-weight-bold" style="color: #45ff45;">3D</span>
                        <p class="texto3 q-mt-md">
                          Llegar una a impacto publicitario mas alto es la mejor opción
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                        <div class="texto3 row justify-between">
                          <q-btn outline style="color: #fdfdfd;" label="Modelado" class="col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd;" label="Render" class="col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd;" label="Animación" class="col-3" size="md" no-caps />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>                  
              </div>
            </div>
                  <!-- .row end -->
            
                  
          </div>
          <!-- .container end -->
 
        </section> 
      </div>
    </div>

    <div class="row justify-center q-mt-xl">
      <div class="xs-hide col-sm-12 md-hide lg-hide lx-hide" style="background: #2b3035;">
       <!-- Content 02
        ====================================================== -->
        <section class="uix-spacing--m">
          <div class="uix-t-c">
            <div class="row justify-center">
              <div class="col-xs-10 col-sm-10">
                <div class="uix-tabs uix-tabs--rotation" 
                data-rotation="true" 
                data-rotation-display="9" 
                data-rotation-radius="130" 
                data-rotation-wrapper-angle="130">
                  <div class="row justify-center">
                    <div class="col-xs-10 col-sm-9">
                    <div class="uix-tabs__nav">
                      <ul>
                        <div>
                          <img src="../statics/pro/pro_med.png" style="width: 120px; height: 120px; position:relative; top:60px; left:75px; transform: rotate(231deg)">
                        </div>
                        <li class="active a" v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = true;">
                          <a href="javascript:void(0);" :style=" color9 == true ? 'background-color: #2bfdb1;' : 'background-color: #2b3035;' ">C</a>
                        </li>

                        <li v-on:click="color1 = true; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0);" :style=" color1 == true ? 'background-color: #429dff;' : 'background-color: #2b3035;' ">A-W</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = true; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;" >
                          <a href="javascript:void(0); text-whtie" :style=" color2 == true ? 'background-color: #ff4343;' : 'background-color: #2b3035;' ">E-C</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = true; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color3 == true ? 'background-color: #48ffe0;' : 'background-color: #2b3035;' ">S</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = true; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color4 == true ? 'background-color: #be43ff;' : 'background-color: #2b3035;' ">A</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = true; color6 = false; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color5 == true ? 'background-color: #ff45fb;' : 'background-color: #2b3035;' ">S</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = true; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color6 == true ? 'background-color: #ffad4a;' : 'background-color: #2b3035;' ">M-D</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = true; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color7 == true ? 'background-color: #f0c54f;' : 'background-color: #2b3035;' ">B</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = true; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color8 == true ? 'background-color: #45ff45;' : 'background-color: #2b3035;' ">3-D</a>
                        </li>
                      </ul>
                    </div><!-- /.uix-tabs__nav -->
                  </div>
                  <div class="col-xs-12 col-sm-12">                   

                    <div class="q-mt-xl uix-tabs__content active">
                      <q-card-section>
                        <span class="texto1 text-h4 text-weight-bold" style="color: #2bfdb1;">Consultoria</span>
                          <p class="texto3 q-mt-md">
                            El mundo hoy esta en un inminente cambio, por eso, es necesario
                            re-inventarnos. La innovación en los modelos de negocio actuales son la clave
                            para llevarlos y entrar en la transformación digital y dirigirlos al éxito,
                            debemos enfocar la tecnología como un facilitador entre negocios y usuarios;
                            Operar un negocio digital se ha convertido en un gran reto para las empresas
                            y más en un mundo tan cambiante como al día de hoy. 
                          </p>
                          <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd;" label="Transformación Digital" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Automatización de Procesos" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Digitalización de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Optimización de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Canales de Comunicación" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Asesoria Especializada" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                      </div>
                    </div>
                    <div class="q-mt-xl q-ml uix-tabs__content">
                      <q-card-section>
                        <span class="texto1 text-h4 q-mt-xl text-weight-bold" style="color: #429dff;">Api Whatsapp</span>
                        <p class="texto3 q-mt-md">
                          Whatsapp hoy en día es el medio de comunicación numero uno en el mundo,
                          de aquí parte el desarrollo de procesos y aplicativos integrados a este para
                          lograr diferentes objetivos a través de él.
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd;" label="Puentes de comunicación" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Comunicación directa" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Integranción de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Venta Simplificada" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                    </div>
                    <div class="q-mt-xl uix-tabs__content">
                      <q-card-section>
                        <span class="texto1 text-h4 text-weight-bold" style="color: #ff4343;">E-Commerce</span>
                          <p class="texto3 q-mt-md">
                            El cambio que vive el mundo el día de hoy esta impulsando el comercio
                            electrónico, vemos los crecientes indices y la constante tendencia que esta
                            llevando el mercado a la compra de productos y servicios en internet, sumando
                            el alcance en ventas que se logra tener gracias a los clientes que acuden a él. 
                          </p>
                          <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd;" label="Automatización de Ventas" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Aumento de Ventas" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd;" label="Ventas por Conversiones" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                    </div> 
                    <div class="q-mt-xl uix-tabs__content">
                      <q-card-section>
                        <span class="texto1 text-h4 text-weight-bold" style="color: #48ffe0;">Sistemas</span>
                        <p class="texto3 q-mt-md">
                          Los sistemas hoy en día son la fuente de la transformación digital, quienes
                          permiten desarrollar los entornos digitales que conocemos hoy en día, y nos
                          permiten alcanzar el éxito al lograr toda esta evolución con el único fin de
                          construir productos que realmente respondan a problemas y necesidades
                          globales que puedan ser innovadoras en el mercado.
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd;" label="Transformación Digital" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Digitalización de Procesos" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Automatización de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Optimazación de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Arquitectura de información" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Flujo de Información" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                    </div>
                    <div class="q-mt-xl uix-tabs__content">
                      <q-card-section>
                        <span class="texto1 text-h4 text-weight-bold" style="color: #be43ff;">Apps</span>
                        <p class="texto3 q-mt-md">
                          Las Aplicaciones móviles juegan un papel importante en nuestras vidas, hoy
                          en día pasamos gran parte de nuestro tiempo en ella y nos facilitan la vida, he
                          aquí el éxito de este modelo y el futuro en el. 
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd;" label="Android" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="IOS" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Hibridas" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Nativas" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                    </div>   
                    <div class="q-mt-xl uix-tabs__content">
                      <q-card-section>
                        <span class="texto1 text-h4 text-weight-bold" style="color: #ff45fb;">Servidores</span>
                        <p class="texto3 q-mt-md">
                          Todo proyecto digital necesita un lugar en donde vivir 
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd;" label="Administración" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Monitoreo" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Cloud" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Dedicados" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Hosting" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="Hosting" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                    </div>   
                    <div class="q-mt-xl uix-tabs__content">
                      <q-card-section>
                        <span class="texto1 text-h4 text-weight-bold" style="color: #ffad4a;">Marketing Digital</span>
                        <p class="texto3 q-mt-md">
                          Las campañas de marketing digital juegan un papel importante en la
                          transformación digital, son la herramienta que nos permite llegar a neutros
                          clientes objetivos, y hacen parte del ecosistema tecnológico para lograr todas
                          nuestras metas y objetivos
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd;" label="FacebookAdd" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd;" label="GoogleAdd" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                    </div>   
                      <div class="q-mt-xl uix-tabs__content">
                        <q-card-section>
                          <span class="texto1 text-h4 text-weight-bold" style="color: #ffad4a;">Branding</span>
                          <p class="texto3 q-mt-md">
                            La forma como el mundo te ve y te percibe es decisivo
                          </p>
                          <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                        </q-card-section>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd;" label="Diseño Publicitario" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd;" label="Construcción de Marca" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd;" label="Portafolio Grafico" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                      </div>    
                     <div class="q-mt-xl uix-tabs__content">
                        <q-card-section>
                          <span class="texto1 text-h4 text-weight-bold" style="color: #45ff45;">3D</span>
                          <p class="texto3 q-mt-md">
                            Llegar una a impacto publicitario mas alto es la mejor opción
                          </p>
                          <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                        </q-card-section>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd;" label="Modelado" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd;" label="Render" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd;" label="Animación" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                      </div>  
                  </div>
                  </div>
                </div>                  
              </div>
            </div>
                  <!-- .row end -->
            
                  
          </div>
          <!-- .container end -->
 
        </section> 
      </div>
    </div>

    <div class="row justify-center">
    <hooper class="xs-hide sm-hide col-md-11" :infiniteScroll="true" :itemsToShow="5.75" :itemsToSlide="3" :autoPlay="true" :playSpeed="4000" style="height: 180px;">
    
    <slide>
      <div class="col-xs-12  q-gutter-xs">
        <img src="../statics/pro/logo_1.png" style="max-width: 160px; height: 90px;">
      </div>
    </slide>

    <slide>
      <div class="col-xs-12  q-gutter-xs">
        <img src="../statics/pro/logo_2.png" style="max-width: 160px; height: 90px;">
      </div>
    </slide>
    <slide>
      <div class="col-xs-12  q-gutter-xs">
        <img src="../statics/pro/logo_3.png" style="max-width: 160px; height: 90px;">
      </div>
    </slide>
    <slide>
      <div class="col-xs-12  q-gutter-xs">
        <img src="../statics/pro/logo_4.png" style="max-width: 160px; height: 90px;">
      </div>
    </slide>
    <slide>
      <div class="col-xs-12  q-gutter-xs">
        <img src="../statics/pro/logo_5.png" style="max-width: 160px; height: 90px;">
      </div>
    </slide>
    <slide>
    <div class="col-xs-12  q-gutter-xs">
        <img src="../statics/pro/logo_6.png" style="max-width: 160px; height: 90px;">
      </div>
    </slide>
    <slide>
    <div class="col-xs-12  q-gutter-xs">
        <img src="../statics/pro/logo_7.png" style="max-width: 160px; height: 90px;">
      </div>
    </slide>
    <slide>
      <div class="col-xs-12  q-gutter-xs">
        <img src="../statics/pro/logo_8.png" style="max-width: 160px; height: 90px;">
      </div>
    </slide>
    <slide>
      <div class="col-xs-12 q-gutter-xs">
        <img src="../statics/pro/logo_9.png" style="max-width: 160px; height: 90px;">
      </div>
    </slide>
      

    </hooper>
    </div>

    <div class="img_group2 row justify-around">
      <div class="col-md-8">
        <div class="xs-hide sm-hide row">
          <div class="bg-none q-ml-xl q-mt-xl">
            <q-card-section>
              <q-toolbar-title class="texto1 q-ml-md text-h2">
                Listo para entrar en la
              </q-toolbar-title>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="texto1 q-ml-md text-h2">
                transformación digital?
              </q-toolbar-title>
            </q-card-section>
          </div>
        </div>
        <div class="xs-hide sm-hide row">
          <div>
            <q-card-section class="q-ml-xl">
              <q-toolbar-title class="texto2 q-ml-xl text-h4">
                Solo tendras exito si crees que puedes!
              </q-toolbar-title>
            </q-card-section>
          </div>
        </div>
        <div class="xs-hide sm-hide row">
          <div>
            <q-card-section class="texto3 q-ml-xl">
              <q-toolbar-title class="q-ml-xl text-h6">
                Trabajemos juntos para ser más grandes.
              </q-toolbar-title>
            </q-card-section>
          </div>
          <div class="xs-hide sm-hide lg-hide">
            <q-card-section>
              <img 
              :class="(!$q.screen.lt.md) ? 'q-ml-md' : 'q-ml-xl'" 
              :style="($q.screen.lt.md) ? 'max-width: 240px; height: 100px;' : 'max-width: 340px; height: 100px;'  "
              src="../statics/pro/flecha.svg">
            </q-card-section>
          </div>
        </div>

        <div class="xs-hide row">
          <div class="col-xs-5 col-sm-5 col-md-5 q-ml-xl q-mt-md">
            <q-card-section>
              <q-toolbar-title class="texto1 q-ml-md text-h3">
                <q-img class="q-mr-sm" src="../statics/pro/col.svg" style="max-width: 40px; height: 20px;"></q-img>Bogotá
              </q-toolbar-title>
            </q-card-section>
            <q-card-section class="texto3 q-ml-md ">
                <q-img class="q-mr-sm" src="../statics/pro/marcador.svg" style="max-width: 40px; height: 40px;"></q-img>
                <span class="text-h6" style="word-wrap:break-word">Carrera 13 #93-35, Piso 6 Counity Coworking</span>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="texto3 q-ml-md text-h6">
                <q-img class="q-mr-sm" src="../statics/pro/mensaje.svg" style="max-width: 40px; height: 40px;"></q-img>
                hola@promediosdigitales.com
              </q-toolbar-title>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="texto3 q-ml-md text-h6">
                <q-img class="q-mr-sm" src="../statics/pro/llamada.svg" style="max-width: 40px; height: 40px;"></q-img>
                + 57 315 839 4620
              </q-toolbar-title>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="texto3 q-ml-md text-h6">
                <q-img class="q-mr-sm" src="../statics/pro/whatsapp.svg" style="max-width: 40px; height: 40px;"></q-img>
                Contáctanos vía whatsapp
              </q-toolbar-title>
            </q-card-section>
          </div>

          <div class="col-xs-5 col-sm-5 col-md-5 q-ml-xl q-mt-md">
            <q-card-section>
              <q-toolbar-title class="texto1 col-sm-5 q-ml-md text-h3">
                <q-img class="q-mr-sm" src="../statics/pro/cad.svg" style="max-width: 40px; height: 20px;"></q-img>Montreal
              </q-toolbar-title>
            </q-card-section>
            <q-card-section class="texto3 q-ml-md">
                <q-img class="q-mr-sm" src="../statics/pro/marcador.svg" style="max-width: 40px; height: 40px;"></q-img>
                <span class="text-h6" style="word-wrap:break-word">Carrera 13 #93-35, Piso 6 Counity Coworking</span>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="texto3 q-ml-md text-h6">
                <q-img class="q-mr-sm" src="../statics/pro/mensaje.svg" style="max-width: 40px; height: 40px;"></q-img>
                hola@promediosdigitales.com
              </q-toolbar-title>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="texto3 q-ml-md text-h6">
                <q-img class="q-mr-sm" src="../statics/pro/llamada.svg" style="max-width: 40px; height: 40px;"></q-img>
                + 57 315 839 4620
              </q-toolbar-title>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="texto3 q-ml-md text-h6">
                <q-img class="q-mr-sm" src="../statics/pro/whatsapp.svg" style="max-width: 40px; height: 40px;"></q-img>
                Contáctanos vía whatsapp
              </q-toolbar-title>
            </q-card-section>
          </div>

        </div>
      </div>

      <div class="xs-hide sm-hide col-md-4 q-mt-xl">
        <div class="row q-mt-xl"></div>
        <div class="row q-mt-xs"></div>
        <q-card flat bordered class="bg-white q-mr-xl q-mt-xl" style="border-radius:25px">
              <div class="col-md-12">
                <q-card-section>
                  <q-toolbar-title class="texto1 q-ml-sm text-h6 text-start text-black">
                    Cuéntanos acerca de ti
                  </q-toolbar-title>
                  <q-toolbar-title class="text-h6 text-black text-weight-light">
                    Sobre la empresa ó el proyecto
                  </q-toolbar-title>
                </q-card-section>
              </div>
            <div class="row justify-center">
              <div class="col-11">
                <q-input class="q-mt-sm" outlined v-model="text" label="Nombre de la empresa ó proyecto" style="border-radius:10px" dense />
                <q-select class="q-mt-sm" outlined v-model="text" label="Sector al que pertenece" style="border-radius:10px" dense />
                <q-select class="q-mt-sm" outlined v-model="text" label="En que servicio estas interesado?" style="border-radius:10px" dense />
                <q-select class="q-mt-sm" outlined v-model="text" label="Tipo de negocio ó proyecto" style="border-radius:10px" dense />
              </div>
            </div>
            <div class="col-10">
              <q-card-section>
                  <q-toolbar-title class="text-h6 text-black text-weight-light">
                    Datos de contacto
                  </q-toolbar-title>
                </q-card-section>
            </div>
            <div class="row justify-center">
              <div class="col-11">
                <div class="row justify-center">
                  <div class="col-6">
                    <q-input class="q-mt-sm q-mr-sm" outlined v-model="text" label="Nombres" style="border-radius:10px" dense />
                  </div>
                  <div class="col-6">
                    <q-input class="q-mt-sm " outlined v-model="text" label="Apellidos" style="border-radius:10px" dense />
                  </div>
                </div>
                <div class="row justify-center">
                  <div class="col-6">
                    <q-input class="q-mt-sm q-mr-sm" outlined v-model="text" label="E - Mail" style="border-radius:10px" dense />
                  </div>
                  <div class="col-6">
                    <q-input class="q-mt-sm " outlined v-model="text" label="Celular" style="border-radius:10px" dense />
                  </div>
                </div>
                <div class="row">
                  <q-input
                    class="q-mt-sm col-12"
                    v-model="text"
                    outlined
                    label="Cuéntanos que expectativa tienes"
                    type="textarea"
                  />
                </div>
                <div class="row">
                  <div class="col-4 q-my-md">
                    <q-btn color="positive" label="Enviar" size="lg" class="full-width"></q-btn>
                  </div>
                  <div class="col-7 offset-1 q-my-md">
                    <span style="color:#000">Los datos ingresados serán tratados de manera confidencial como lo dispone la ley habeas data.</span>
                  </div>
                </div>
              </div>
            </div>
          </q-card>
      </div>
      
    </div>




    <div class="md-hide lx-hide lg-hide row justify-center q-mt-md q-mb-md">
      <div class="texto1 col-xs-10 col-sm-10 text-h4">
        ¿Listo para entrar en la
        transformación digital?
      </div>
      <div class="texto3 col-xs-10 col-sm-10 text-h6">
        Solo tendras exito si crees que puedes!
        Trabajemos juntos para ser más grandes.
      </div>
    </div>

    <div class="md-hide lx-hide lg-hide row justify-center">
      <div class="col-xs-10 col-sm-10">
        <q-card flat bordered class="bg-white" style="border-radius:25px">
          <div class="col-xs-10">

            <q-card-section>
              <q-toolbar-title class="texto1 q-ml-sm text-h6 text-start text-black">
                Cuéntanos acerca de ti
              </q-toolbar-title>
              <q-toolbar-title class="text-h6 text-black text-weight-light">
                Sobre la empresa ó el proyecto
              </q-toolbar-title>
            </q-card-section>
          </div>

          <div class="row justify-center">
            <div class="col-11">
              <q-input class="q-mt-sm" outlined v-model="text" label="Nombre de la empresa ó proyecto" style="border-radius:10px" dense />
              <q-select class="q-mt-sm" outlined v-model="text" label="Sector al que pertenece" style="border-radius:10px" dense />
              <q-select class="q-mt-sm" outlined v-model="text" label="En que servicio esta interesado?" style="border-radius:10px" dense />
              <q-select class="q-mt-sm" outlined v-model="text" label="Tipo de negocio ó proyecto" style="border-radius:10px" dense />
            </div>
          </div>

          <div class="col-10">
            <q-card-section>
                <q-toolbar-title class="text-h6 text-black text-weight-light">
                  Datos de contacto
                </q-toolbar-title>
              </q-card-section>
          </div>

          <div class="row justify-center">

            <div class="col-11">
              <div class="row justify-center">
                <div class="col-6">
                  <q-input class="q-mt-sm q-mr-sm" outlined v-model="text" label="Nombres" style="border-radius:10px" dense />
                </div>
                <div class="col-6">
                  <q-input class="q-mt-sm " outlined v-model="text" label="Apellidos" style="border-radius:10px" dense />
                </div>
              </div>
              <div class="row justify-center">
                <div class="col-6">
                  <q-input class="q-mt-sm q-mr-sm" outlined v-model="text" label="E - Mail" style="border-radius:10px" dense />
                </div>
                <div class="col-6">
                  <q-input class="q-mt-sm " outlined v-model="text" label="Celular" style="border-radius:10px" dense />
                </div>
              </div>
              <div class="row">
                <q-input
                  class="q-mt-sm col-12"
                  v-model="text"
                  outlined
                  label="Cuéntanos que expectativa tienes"
                  type="textarea"
                />
              </div>
              <div class="row">
                <div class="col-4 q-my-md">
                  <q-btn color="positive" label="Enviar" size="lg" class="full-width"></q-btn>
                </div>
                <div class="col-7 offset-1  q-my-md">
                  <span style="color:#000">Los datos ingresados serán tratados de manera confidencial como lo dispone la ley habeas data.</span>
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
    
    <div class="bg-negative row justify-center q-mt-xl">
      <div class="">
        <q-card-section class="col-gutter-xs col-xs-12 col-sm-12 col-md-2 q-mt-sm q-mb-sm">
          <img src="../statics/pro/logo.png" class="" style="height: 60px;"/>
        </q-card-section>
      </div>
      <q-separator style="width:2px; height:35px; margin-top:30px;" class="xs-hide" color="white" vertical inset />
      <div>
        <q-card-section class="col-gutter-xs col-xs-12 col-sm-12 col-md-3 q-mb-md" style="margin-top:20px;">
          2020 Todos los derechos reservados.
        </q-card-section>
      </div>
    </div>


  </q-page>
</template>

<script>
require("../../node_modules/@mdi/font/css/materialdesignicons.css");
import { Hooper, Slide, Navigation as HooperNavigation} from 'hooper';
import $ from 'jquery'

import 'hooper/dist/hooper.css';
export default {
  name: 'PageIndex',
  components: {
    Hooper,
    Slide,
    HooperNavigation
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
      centerMode: true,
      autoPlay: false,
      playSpeed: 3000,
      breakpoints: {
          2400: {
              itemsToShow: 4
          },
          1800: {
              itemsToShow: 4
          },
          1500: {
              itemsToShow: 4
          },
          1100: {
              itemsToShow: 4
          },
          764: {
              itemsToShow: 3
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
  },
  mounted(){
    ( function( $ ) {
  "use strict";
    
      $( function() {
      console.log('hola')

      $( '.uix-tabs' ).each( function( id ) {
        var $this             = $( this ),
            $li               = $this.find( 'ul > li' ),
          liWidth           = $li.first().outerWidth(),
          liHeight          = $li.first().outerHeight(),
          liNum             = $li.length,
          $contentbox       = $this.find( '.uix-tabs__content' ),
          ulWidth           = $this.data( 'width' ),
          fullwidth         = $this.data( 'fullwidth' ),
          rotation          = $this.data( 'rotation' ),
          rotationRadius    = $this.data( 'rotation-radius' ),
          rotationWapperDeg = $this.data( 'rotation-wrapper-angle' ),
          rotationDisplay   = $this.data( 'rotation-display' ),
          
          
          
          tabBoxID          = id,
          isNumeric         = /^[-+]?(\d+|\d+\.\d*|\d*\.\d+)$/;
        
        if( typeof fullwidth != typeof undefined && fullwidth == 1 ) {
          $li.css( 'width', ( 100 / liNum ) + '%' );
        }
        
            
        
        if( typeof rotation === typeof undefined ) {
          rotation = false;
        }	
        
        
        if( typeof rotationWapperDeg === typeof undefined ) {
          rotationWapperDeg = 0;
        }	
        
        if( typeof rotationDisplay === typeof undefined ) {
          rotationDisplay = 5;
        }		
        
        
        
        $li.each( function( index ) {
          index = index + 1;
          $( this ).attr( 'href', 'javascript:' );
          $( this ).attr( 'data-tab', tabBoxID + '-tabs-show' + index );
        });
        $( $contentbox ).each( function( index ) {
          index = index + 1;
          $( this ).attr( 'id', tabBoxID + '-tabs-show' + index );
        });
        
        
        // Tab Rotation Effect
        if ( rotation ) {
      
          $this.find( '.uix-tabs__nav' ).css( {
            'width'      : rotationRadius * 2 + 'px'
          } );

      
          $this.find( 'ul' ).css( {
            'width'     : rotationRadius * 2 + 'px',
            'height'    : rotationRadius * 2 + 'px',
            'transform' : 'rotate('+parseFloat(rotationWapperDeg)+'deg)'
          } );

          

          //Layout components in a circle layout
          var angle           = 0,
            step            = 2 * Math.PI / rotationDisplay,
            transitionDelay = 0,
            pad             = $this.find( 'ul' ).width();


          $this.find( 'ul > li' ).each( function() { //Can'nt use arrow function here!!!
            // 'this' works differently with arrow fucntions
            var el          = $( this ),
              x           = rotationRadius * Math.cos(angle) - liWidth / 2,
              y           = rotationRadius * Math.sin(angle) - liHeight / 2;


            el.css({
              'transform'        : 'translate('+parseFloat( x )+'px,'+parseFloat( pad/2 + y )+'px)',
              'transition-delay' : transitionDelay + "s"
            })
            .find( '> a' )
            .css({
              'transform'        : 'rotate('+parseFloat(-rotationWapperDeg)+'deg)'
            });


            angle += step;
            transitionDelay += 0.15;
            
            
            
            //Click on the rotation effect
            //----------------------- begin ----------------------
            el.on( 'click', function( e ) {
              
              var increase   = Math.PI * 2 / rotationDisplay,
                n          = $( this ).index(),
                endAngle   = n % rotationDisplay * increase; 


              ( function turn() {
                if (Math.abs(endAngle - angle) > 1 / 8) {
                  var sign = endAngle > angle ? 1 : -1;
                  angle = angle + sign / 8;
                  setTimeout(turn, 20);
                } else {
                  angle = endAngle;
                }
                
                
              
                $this.find( 'ul > li' ).each( function( index ) {
                  var x2           = Math.cos( - Math.PI / 2 + index * increase - angle) * rotationRadius - liWidth / 2,
                    y2           = Math.sin( - Math.PI / 2 + index * increase - angle) * rotationRadius + liHeight;

                
                  $( this ).css({
                    'transform'        : 'translate('+parseFloat( x2 )+'px,'+parseFloat( y2 )+'px)',
                    'transition'       : 'none',
                    'transition-delay' : 0
                  })
                  .find( '> a' )
                  .css({
                    'transform'        : 'rotate('+parseFloat(-rotationWapperDeg)+'deg)'
                  });

                });

                              
              })();	
              
            });
            //----------------------- end ----------------------
            
            
          });	


          
        }
        
        
        // Tab Sliding Effext
        if ( $this.find( 'ul li:first .uix-tabs__marker' ).length == 0 ) {
          $this.find( 'ul li:first' ).prepend( '<div class="uix-tabs__marker"></div>' );
        }
        
        
        // Tab Fade Effect
        $this.on( 'click', 'li', function( e ) {
          
          var tabID = $( this ).attr( 'data-tab' ),
            index = parseFloat( $( this ).index() - 1 );
          
          
          $this.find( 'li' ).removeClass( 'active' );
          $this.find( '.uix-tabs__content' ).removeClass( 'active' );
      
          $( this ).addClass( 'active' );
          $( '#' + tabID ).addClass( 'active' );
          

          //sliding marker
          var translateX = $( this ).index() * 100,
            liHeight   = $this.find( 'ul li:first' ).outerHeight(),
            translateY = $( this ).index() * liHeight;
          
          if ( $( window ).width() <= 768 ) {
            $this.find( '.uix-tabs__marker' ).css({
              'transform'          : 'translateY( '+translateY+'px )'	
            });	
          } else {
            $this.find( '.uix-tabs__marker' ).css({
              'transform'          : 'translateX( '+translateX+'% )'	
            });	
          }

      
          
          return false;
          
          
        });
        
        // Init
        $this.find( 'ul > li.active' ).trigger( 'click' );
        
        //Active current tab
        var url    = window.location.href,
          locArr,
            loc, 
          curTab;
        
        if ( url.indexOf( '#' ) >= 0 ) {
          
          locArr = url.split( '#' );
            loc    = locArr[1];
          curTab = $( '.uix-tabs' ).find( 'ul > li:eq('+loc+')' );
          curTab.trigger( 'click' );	
        }
          
        
          
        
      });
      
      
      
      } );
      
      
  } ) ( $ );
  },
    methods: {
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
