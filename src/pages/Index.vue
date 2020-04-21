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
    <q-carousel
        swipeable
        class="bg-primary q-ml-xl q-mr-xl"
        animated
        v-model="slide"
        infinite
        autoplay
        ref="carousel"
      >
      <q-carousel-slide :name="1">
        <q-card flat class="row bg-primary justify-between my-card">
          <q-card-section>
            <img src="../statics/pro/servicio_1.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
          <q-card-section>
            <img src="../statics/pro/servicio_2.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
          <q-card-section>
            <img src="../statics/pro/servicio_3.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
          <q-card-section>
            <img src="../statics/pro/servicio_4.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
          <q-card-section>
            <img src="../statics/pro/servicio_5.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
          <q-card-section>
            <img src="../statics/pro/servicio_6.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
        </q-card>
        <div>
          <q-btn
            push dense color="white" text-color="black" class="q-ml-md q-mr-sm" icon="arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push dense color="white" text-color="black" icon="arrow_right"
            @click="$refs.carousel.next()"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2">
        <q-card dark flat class="row bg-primary my-card">
          <q-card-section>
            <img src="../statics/pro/servicio_7.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
          <q-card-section>
            <img src="../statics/pro/servicio_8.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
          <q-card-section>
            <img src="../statics/pro/servicio_9.svg" style="max-width: 500px; height: 250px;">
          </q-card-section>
        </q-card>
        <div>
          <q-btn
            push dense color="white" text-color="black" class="q-ml-md q-mr-sm" icon="arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push dense color="white" text-color="black" icon="arrow_right"
            @click="$refs.carousel.next()"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
    <q-card dark flat class="row justify-around bg-primary q-ml-xl q-mr-xl">
      <q-card-section>
        <img src="../statics/pro/logo_1.png" style="max-width: 160px; height: 90px;">
      </q-card-section>
      <q-card-section>
        <img src="../statics/pro/logo_2.png" style="max-width: 160px; height: 90px;">
      </q-card-section>
      <q-card-section>
        <img src="../statics/pro/logo_3.png" style="max-width: 160px; height: 90px;">
      </q-card-section>
      <q-card-section>
        <img src="../statics/pro/logo_4.png" style="max-width: 160px; height: 90px;">
      </q-card-section>
      <q-card-section>
        <img src="../statics/pro/logo_5.png" style="max-width: 160px; height: 90px;">
      </q-card-section>
      <q-card-section>
        <img src="../statics/pro/logo_6.png" style="max-width: 160px; height: 90px;">
      </q-card-section>
      <q-card-section>
        <img src="../statics/pro/logo_7.png" style="max-width: 160px; height: 90px;">
      </q-card-section>
      <q-card-section>
        <img src="../statics/pro/logo_8.png" style="max-width: 160px; height: 90px;">
      </q-card-section>
      <q-card-section>
        <img src="../statics/pro/logo_9.png" style="max-width: 160px; height: 90px;">
      </q-card-section>
    </q-card>
    <div class="row">
      <q-card flat class="col-6 bg-primary q-ml-xl q-mt-xl">
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
      <q-card flat class="col-4 bg-primary">
        <q-card-section class="q-ml-xl">
          <q-toolbar-title class="q-ml-xl text-h6">
            Trabajemos juntos para ser más grandes.
          </q-toolbar-title>
        </q-card-section>
      </q-card>
      <q-card flat class="col-2 bg-primary">
        <q-card-section>
          <img class="q-mr-xl" src="../statics/pro/flecha.svg" style="max-width: 360px; height: 100px;">
        </q-card-section>
      </q-card>
    </div>
    <div class="row">
      <q-card flat class="col-3 bg-primary q-ml-xl q-mt-md">
        <q-card-section>
          <q-toolbar-title class="q-ml-md text-h3">
            <q-img class="q-mr-sm" src="../statics/pro/col.svg" style="max-width: 40px; height: 20px;"></q-img>Bogotá
          </q-toolbar-title>
        </q-card-section>
        <q-card-section>
          <q-toolbar-title class="q-ml-md text-h6">
            <q-img class="q-mr-sm" src="../statics/pro/marcador.svg" style="max-width: 40px; height: 40px;"></q-img>
            Carrera 13 #93-35, Piso 6
            Counity Coworking
          </q-toolbar-title>
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
      <q-card flat class="col-3 bg-primary q-ml-xl q-mt-md">
        <q-card-section>
          <q-toolbar-title class="q-ml-md text-h3">
            <q-img class="q-mr-sm" src="../statics/pro/cad.svg" style="max-width: 40px; height: 20px;"></q-img>Montreal
          </q-toolbar-title>
        </q-card-section>
        <q-card-section>
          <q-toolbar-title class="q-ml-md text-h6">
            <q-img class="q-mr-sm" src="../statics/pro/marcador.svg" style="max-width: 40px; height: 40px;"></q-img>
            Carrera 13 #93-35, Piso 6
            Counity Coworking
          </q-toolbar-title>
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
      <q-card flat bordered class="col-3 bg-white q-ml-xl q-mt-md">
        <div class="row">
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
        </div>
        <div class="row justify-center">
          <div class="col-11">
            <q-input class="q-mt-sm" outlined v-model="text" label="Outlined" />
            <q-input class="q-mt-sm" outlined v-model="text" label="Outlined" />
            <q-input class="q-mt-sm" outlined v-model="text" label="Outlined" />
            <q-input class="q-mt-sm" outlined v-model="text" label="Outlined" />
          </div>
        </div>
      </q-card>
    </div>
    <q-banner class="bg-negative q-mt-xl">
      <q-card flat class="row justify-center bg-negative">
        <q-card-section class="col-2 q-mt-md q-mb-md">
          <q-img src="../statics/pro/logo.png" style="max-width: 250px; height: 90px;"></q-img>
        </q-card-section>
        <q-separator color="white" vertical inset />
        <q-card-section class="col-3 q-mt-md q-mb-md text-h6">
          2020 Todos los derechos reservados.
        </q-card-section>
      </q-card>
    </q-banner>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1
    }
  }
}
</script>
