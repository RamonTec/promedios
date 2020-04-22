<style scoped>
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
    /* 
    ---------------------------
    2. Tab Rotation Effect
    ---------------------------
    */
  }
  .uix-tabs:not(.uix-tabs--rotation) {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05), 0 1px 6px rgba(0, 0, 0, 0.05), 0 8px 8px rgba(0, 0, 0, 0.05), 0 16px 16px rgba(0, 0, 0, 0.05), 8px 32px 32px rgba(0, 0, 0, 0.02), 8px 64px 64px rgba(0, 0, 0, 0.02);
  }
  .uix-tabs:not(.uix-tabs--rotation) .uix-tabs__marker {
    background: #212121;
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    transition: .1s ease-in-out;
  }
  .uix-tabs .uix-tabs__content {
    display: none;
    padding: 1.3125rem;
    text-align: left;
  }
  .uix-tabs .uix-tabs__content.active {
    display: block;
  }
  .uix-tabs .uix-tabs__nav > ul {
    padding: 0;
    margin: 0;
  }
  .uix-tabs .uix-tabs__nav > ul > li {
    position: relative;
    display: block;
    transition: .1s ease-in-out;
    list-style: none;
    float: left;
    box-shadow: inset 1px 0px 0px 0px #e6e6e6;
    background: #f7f7f7;
    min-width: 7.5rem;
  }
  .uix-tabs .uix-tabs__nav > ul > li > a {
    position: relative;
    padding: 0.625rem 1rem;
    display: block;
    text-align: center;
  }
  .uix-tabs .uix-tabs__nav > ul > li.active {
    background: #fff;
  }
  .uix-tabs .uix-tabs__nav > ul::after {
    content: '';
    display: block;
    clear: both;
  }
  .uix-tabs.uix-tabs--center {
    box-shadow: none;
  }
  .uix-tabs.uix-tabs--center .uix-tabs__nav > ul {
    font-size: 0;
    /*Fighting the Space Between Inline Block Elements*/
    display: block;
    width: 100%;
    text-align: center;
    /*require*/
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05), 0 1px 6px rgba(0, 0, 0, 0.05), 0 8px 8px rgba(0, 0, 0, 0.05), 0 16px 16px rgba(0, 0, 0, 0.05), 8px 32px 32px rgba(0, 0, 0, 0.02), 8px 64px 64px rgba(0, 0, 0, 0.02);
  }
  .uix-tabs.uix-tabs--center .uix-tabs__nav > ul li {
    font-size: 1rem;
    /*Fighting the Space Between Inline Block Elements*/
    display: inline-block;
    /*require*/
    float: none;
  }
  .uix-tabs.uix-tabs--rotation .uix-tabs__content {
    position: relative;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05), 0 1px 6px rgba(0, 0, 0, 0.05), 0 8px 8px rgba(0, 0, 0, 0.05), 0 16px 16px rgba(0, 0, 0, 0.05), 8px 32px 32px rgba(0, 0, 0, 0.02), 8px 64px 64px rgba(0, 0, 0, 0.02);
  }
  .uix-tabs.uix-tabs--rotation .uix-tabs__nav {
    position: relative;
    margin: 0;
  }
  .uix-tabs.uix-tabs--rotation .uix-tabs__nav > ul {
    box-sizing: border-box;
    position: relative;
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin: 0;
    padding: 0;
    display: inline-block;
  }
  .uix-tabs.uix-tabs--rotation .uix-tabs__nav > ul > li {
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
    min-width: inherit;
    /* Required */
  }
  .uix-tabs.uix-tabs--rotation .uix-tabs__nav > ul > li > a {
    width: 80px;
    height: 80px;
    line-height: 60px;
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05), 0 1px 6px rgba(0, 0, 0, 0.05), 0 8px 8px rgba(0, 0, 0, 0.05), 0 16px 16px rgba(0, 0, 0, 0.05), 8px 32px 32px rgba(0, 0, 0, 0.02), 8px 64px 64px rgba(0, 0, 0, 0.02);
  }
  .uix-tabs.uix-tabs--rotation .uix-tabs__nav > ul > li.active > a {
    background: #212121;
    color: #fff;
  }

  /* Center alignment */
  .uix-t-c .uix-tabs.uix-tabs--rotation .uix-tabs__nav {
    margin: 0 auto;
  }

  @media all and (max-width: 768px) {
    .uix-tabs {
      /* Tab Rotation Effect */
    }
    .uix-tabs:not(.uix-tabs--rotation) li {
      width: 100% !important;
    }
    .uix-tabs.uix-tabs--rotation .uix-tabs__nav {
      width: auto !important;
    }
  }

</style>
<template>
  <q-page>
    <div class="row">
      <q-card flat class="col-4 bg-primary q-ml-xl q-mt-xl">
        <q-card-section>
          <q-toolbar-title class="q-ml-md text-h3">
            Nuestros Servicios
          </q-toolbar-title>
        </q-card-section>
        <q-card-section class="q-ml-md text-h6">
          Now that there is the Tec-9, a crappy spray gun from South Miami. This gun  is
          advertised as the most popular gun in American crime. do you believe that
          shit? It actually says that in the little book that comes whit it: the most popular.
        </q-card-section>
      </q-card>
    </div>
    <div class="row justify-center">
      <hooper class="col-11" :infiniteScroll="true" :itemsToShow="5.75" :itemsToSlide="3" :autoPlay="true" :playSpeed="3000" style="height: 380px;">
      <slide>
        <q-card flat class="row bg-primary justify-between my-card">
          <q-card-section>
            <img src="../statics/pro/servicio_1.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
        </q-card>
      </slide>
      <slide>
        <q-card flat class="row bg-primary justify-between my-card">
          <q-card-section>
            <img src="../statics/pro/servicio_2.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
        </q-card>
      </slide>
      <slide>
        <q-card flat class="row bg-primary justify-between my-card">
          <q-card-section>
            <img src="../statics/pro/servicio_3.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
        </q-card>
      </slide>
      <slide>
        <q-card flat class="row bg-primary justify-between my-card">
          <q-card-section>
            <img src="../statics/pro/servicio_4.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
        </q-card>
      </slide>
      <slide>
        <q-card flat class="row bg-primary justify-between my-card">
          <q-card-section>
            <img src="../statics/pro/servicio_5.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
        </q-card>
      </slide>
      <slide>
        <q-card flat class="row bg-primary justify-between my-card">
          <q-card-section>
            <img src="../statics/pro/servicio_6.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
        </q-card>
      </slide>
      <slide>
        <q-card flat class="row bg-primary justify-between my-card">
          <q-card-section>
            <img src="../statics/pro/servicio_7.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
        </q-card>
      </slide>
      <slide>
        <q-card flat class="row bg-primary justify-between my-card">
          <q-card-section>
            <img src="../statics/pro/servicio_8.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
        </q-card>
      </slide>
      <slide>
        <q-card flat class="row bg-primary justify-between my-card">
          <q-card-section>
            <img src="../statics/pro/servicio_9.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
        </q-card>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      
    </hooper>
    </div>
    <div class="row justify-center q-ml-xl q-mr-xl q-mt-xl">
      <div class="col q-gutter-xs">
        <img src="../statics/pro/logo_1.png" style="max-width: 160px; height: 90px;">
      </div>
      <div class="col q-gutter-xs">
        <img src="../statics/pro/logo_2.png" style="max-width: 160px; height: 90px;">
      </div>
      <div class="col q-gutter-xs">
        <img src="../statics/pro/logo_3.png" style="max-width: 160px; height: 90px;">
      </div>
      <div class="col q-gutter-xs">
        <img src="../statics/pro/logo_4.png" style="max-width: 160px; height: 90px;">
      </div>
      <div class="col q-gutter-xs">
        <img src="../statics/pro/logo_5.png" style="max-width: 160px; height: 90px;">
      </div>
      <div class="col q-gutter-xs">
        <img src="../statics/pro/logo_6.png" style="max-width: 160px; height: 90px;">
      </div>
      <div class="col q-gutter-xs">
        <img src="../statics/pro/logo_7.png" style="max-width: 160px; height: 90px;">
      </div>
      <div class="col q-gutter-xs">
        <img src="../statics/pro/logo_8.png" style="max-width: 160px; height: 90px;">
      </div>
      <div class="col q-gutter-xs">
        <img src="../statics/pro/logo_9.png" style="max-width: 160px; height: 90px;">
      </div>
    </div>
    <div class="row justify-around">
      <div class="col-8">
        <div class="row">
          <q-card flat class="bg-primary q-ml-xl q-mt-xl">
            <q-card-section>
              <q-toolbar-title class="q-ml-md text-h2">
                Listo para entrar en la
              </q-toolbar-title>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="q-ml-md text-h2">
                transformación digital?
              </q-toolbar-title>
            </q-card-section>
          </q-card>
        </div>
        <div class="row">
          <q-card flat class="bg-primary">
            <q-card-section class="q-ml-xl">
              <q-toolbar-title class="q-ml-xl text-h4">
                Solo tendras exito si crees que puedes!
              </q-toolbar-title>
            </q-card-section>
          </q-card>
        </div>
        <div class="row">
          <q-card flat class="bg-primary">
            <q-card-section class="q-ml-xl">
              <q-toolbar-title class="q-ml-xl text-h6">
                Trabajemos juntos para ser más grandes.
              </q-toolbar-title>
            </q-card-section>
          </q-card>
          <q-card flat class="bg-primary">
            <q-card-section class="q-ml-xl">
              <img class="q-ml-xl" src="../statics/pro/flecha.svg" style="max-width: 360px; height: 100px;">
            </q-card-section>
          </q-card>
        </div>
        <div class="row">
          <q-card flat class="bg-primary q-ml-xl q-mt-md">
            <q-card-section>
              <q-toolbar-title class="q-ml-md text-h3">
                <q-img class="q-mr-sm" src="../statics/pro/col.svg" style="max-width: 40px; height: 20px;"></q-img>Bogotá
              </q-toolbar-title>
            </q-card-section>
            <q-card-section class="q-ml-md ">
                <q-img class="q-mr-sm" src="../statics/pro/marcador.svg" style="max-width: 40px; height: 40px;"></q-img>
                <span class="text-h6" style="word-wrap:break-word">Carrera 13 #93-35, Piso 6 Counity Coworking</span>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="q-ml-md text-h6">
                <q-img class="q-mr-sm" src="../statics/pro/mensaje.svg" style="max-width: 40px; height: 40px;"></q-img>
                hola@promediosdigitales.com
              </q-toolbar-title>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="q-ml-md text-h6">
                <q-img class="q-mr-sm" src="../statics/pro/llamada.svg" style="max-width: 40px; height: 40px;"></q-img>
                + 57 315 839 4620
              </q-toolbar-title>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="q-ml-md text-h6">
                <q-img class="q-mr-sm" src="../statics/pro/whatsapp.svg" style="max-width: 40px; height: 40px;"></q-img>
                Contáctanos vía whatsapp
              </q-toolbar-title>
            </q-card-section>
          </q-card>
          <q-card flat class="bg-primary q-ml-xl q-mt-md">
            <q-card-section>
              <q-toolbar-title class="q-ml-md text-h3">
                <q-img class="q-mr-sm" src="../statics/pro/cad.svg" style="max-width: 40px; height: 20px;"></q-img>Montreal
              </q-toolbar-title>
            </q-card-section>
            <q-card-section class="q-ml-md ">
                <q-img class="q-mr-sm" src="../statics/pro/marcador.svg" style="max-width: 40px; height: 40px;"></q-img>
                <span class="text-h6" style="word-wrap:break-word">Carrera 13 #93-35, Piso 6 Counity Coworking</span>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="q-ml-md text-h6">
                <q-img class="q-mr-sm" src="../statics/pro/mensaje.svg" style="max-width: 40px; height: 40px;"></q-img>
                hola@promediosdigitales.com
              </q-toolbar-title>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="q-ml-md text-h6">
                <q-img class="q-mr-sm" src="../statics/pro/llamada.svg" style="max-width: 40px; height: 40px;"></q-img>
                + 57 315 839 4620
              </q-toolbar-title>
            </q-card-section>
            <q-card-section>
              <q-toolbar-title class="q-ml-md text-h6">
                <q-img class="q-mr-sm" src="../statics/pro/whatsapp.svg" style="max-width: 40px; height: 40px;"></q-img>
                Contáctanos vía whatsapp
              </q-toolbar-title>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-4 q-mt-xl">
        <div class="row q-mt-xl"></div>
        <div class="row q-mt-xs"></div>
        <div class="row"></div>
        <q-card flat bordered class="bg-white q-mr-xl q-mt-xl" style="border-radius:25px">
              <div class="col-10">
                <q-card-section>
                  <q-toolbar-title class="q-ml-sm text-h6 text-start text-black">
                    Cuéntanos acerca de ti
                  </q-toolbar-title>
                  <q-toolbar-title class="text-h6 text-black text-weight-light">
                    Sobre la empresa ó el proyecto
                  </q-toolbar-title>
                </q-card-section>
              </div>
            <div class="row justify-center">
              <div class="col-11">
                <q-input class="q-mt-sm" outlined v-model="text" label="Outlined" style="border-radius:10px" dense />
                <q-select class="q-mt-sm" outlined v-model="text" label="Outlined" style="border-radius:10px" dense />
                <q-select class="q-mt-sm" outlined v-model="text" label="Outlined" style="border-radius:10px" dense />
                <q-select class="q-mt-sm" outlined v-model="text" label="Outlined" style="border-radius:10px" dense />
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
                    <q-input class="q-mt-sm q-mr-sm" outlined v-model="text" label="Outlined" style="border-radius:10px" dense />
                  </div>
                  <div class="col-6">
                    <q-input class="q-mt-sm " outlined v-model="text" label="Outlined" style="border-radius:10px" dense />
                  </div>
                </div>
                <div class="row justify-center">
                  <div class="col-6">
                    <q-input class="q-mt-sm q-mr-sm" outlined v-model="text" label="Outlined" style="border-radius:10px" dense />
                  </div>
                  <div class="col-6">
                    <q-input class="q-mt-sm " outlined v-model="text" label="Outlined" style="border-radius:10px" dense />
                  </div>
                </div>
                <div class="row">
                  <q-input
                    class="q-mt-sm col-12"
                    v-model="text"
                    outlined
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
    
    <q-banner class="bg-negative q-mt-xl">
      <q-card flat class="row justify-center bg-negative">
        <q-card-section class="col-gutter-xs col-2 q-mt-sm q-mb-sm q-ml-xl">
          <img src="../statics/pro/logo.png" class="q-ml-xl" style="height: 60px;"></img>
        </q-card-section>
        <q-separator color="white" vertical inset />
        <q-card-section class="col-gutter-xs  col-3 q-mt-md q-mb-md text-h6">
          2020 Todos los derechos reservados.
        </q-card-section>
      </q-card>
    </q-banner>
  </q-page>
</template>

<script>

import { Hooper, Slide, Navigation as HooperNavigation} from 'hooper';

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
      slide: 1
    }
  }
}
</script>
