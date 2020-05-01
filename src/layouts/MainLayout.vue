<style scoped>

@font-face {
   font-family: Nexa-Bold;
   font-style: normal;
   font-weight: normal;
   src: url(../css/font/Nexa-Bold.ttf);
}

.texto1{
  font-family: Nexa-Bold;
}

@font-face {
   font-family: open-sans;
   font-style: normal;
   font-weight: normal;
   src: url(../css/font/OpenSans-SemiBold.ttf);
}

.texto3{
  font-family: open-sans;
}

</style>
<template>
  <div>
    <q-layout view="hhh lpR fff" style="height: 400px" class="shadow-2 rounded-borders">
      <q-header>

        <q-card flat class="xs-hide sm-hide row q-ml-xl q-mt-xl bg-primary">
          <div class="col-xs-7 col-md-6">
            <q-card-section>
              <div>
                <img src="../statics/pro/logo_promedios.png" style="width: 210px; height: 70px;">
              </div>
            </q-card-section>
            <q-card-section class="texto1 text-h3">
              <span>Somos la Fuerza</span> <br>
              <span class="text-secondary">de la innovación y</span> <br>
              <span class="text-secondary">transformación digital</span>
            </q-card-section>
            <q-card-section class="texto3 xs-hide sm-hide text-h6" style="max-width: 80%">
              Now that there is the Tec-9, a crappy spray gun from South Miami. This gun  is
              advertised as the most popular gun in American crime. do you believe that
              shit? It actually says that in the little book that comes whit it: the most popular.
            </q-card-section>
            <q-card-section class="xs-hide sm-hide q-mt-xl">
              <q-btn class="q-mt-md" style="background: none; border: 2.7px solid #2bfdb1; border-radius: 5px;height: 50px; width: 210px; font-size: 1.2em; font-weight:bold" >LLAMANOS YA!</q-btn>
            </q-card-section>
          </div>
          <div class="col-xs-1 col-md-1 q-mt-xl" style="z-index:100">
            
            <img src="../statics/pro/cell_header_pm.png" style="width: 550px; height: 612px;">
          </div>
          
          <div class="col-xs-4 col-md-5">
            
            <q-card-section style="background: #439dff; position:relative; top:-50px; height: 709px; border-radius:0 0 0 50px; width: 90%; margin-left:64px">
              <div class="row justify-center q-mt-xl q-ml-xl">
                <q-select bg-color="primary" label-color="white" outlined v-model="model" :options="options" label="ES">
                  <template v-slot:prepend>
                    <q-icon name="img:/statics/pro/col.svg" />
                  </template>
                </q-select>
              </div>
            </q-card-section>
          </div>
        </q-card>

        <q-card flat class="row q-mt-xl bg-primary">
          <div class="col-xs-5 col-sm-5 md-hide xl-hide lg-hide col-md-7">
            <q-card-section>
              <div>
                <img src="../statics/pro/logo_promedios.png" style="max-width: 400px; height: 50px;">
              </div>
            </q-card-section>
          </div>
          <div class="col-xs-2 q-mt-md md-hide xl-hide lg-hide" style="z-index:10">
            <img class="q-mt-sm" src="../statics/pro/cell_header_pm.png" 
            style="width: 180px; height: 236px;">
          </div>
          
          <div class="col-xs-5 col-sm-5 md-hide xl-hide lg-hide">
            <q-card-section
            style="background: #439dff;  top:-50px; height: 310px; border-radius:0 0 0 50px; width: 90%; margin-left:15px;">
            </q-card-section>
          </div>
        </q-card>

        <q-card-section class="md-hide xl-hide lg-hide">
          <q-btn class="q-mb-xl" style="background: none; border: 2.7px solid #2bfdb1; border-radius: 5px;height: 50px; width: 210px; font-size: 1.2em; font-weight:bold" >LLAMANOS YA!</q-btn>
        </q-card-section>

        <div class="row md-hide lg-hide xl-hide">
          <q-card-section class="texto1 col-xs-10 col-sm-12 text-h5">
            <span>Somos la Fuerza</span> <br>
            <span class="text-secondary">de la innovación y</span> <br>
            <span class="text-secondary">transformación digital</span>
          </q-card-section>
          <q-card-section class="texto3 col-xs-10 col-sm-12">
            Now that there is the Tec-9, a crappy spray gun from South Miami. This gun  is
            advertised as the most popular gun in American crime. do you believe that
            shit? It actually says that in the little book that comes whit it: the most popular.
          </q-card-section>
        </div>

      </q-header>
      <q-page-container class="bg-primary text-white">
        <router-view/>
      </q-page-container>
      <q-footer>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'MainLayout',
    components: {
    Carousel,
    Slide
  },
  data () {
    return {
      slide: 1,
      model: null,
    }
  }
}
</script>
