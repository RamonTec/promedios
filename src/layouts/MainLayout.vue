<template>
  <div>
    <q-layout view="hhh lpR fff" class="shadow-2 rounded-borders">
      <q-header>
        <q-card flat class="row q-ml-xl q-mt-xl bg-primary">
          <div class="col-7">
            <q-card-section>
              <div>
                <img src="../statics/pro/logo_promedios.png" style="max-width: 500px; height: 70px;">
              </div>
            </q-card-section>
            <q-card-section class="text-h3">
              <span>Somos la Fuerza</span> <br>
              <span class="text-secondary">de la innovación y</span> <br>
              <span class="text-secondary">transformación digital</span>
            </q-card-section>
            <q-card-section class="text-h6" style="max-width:60%">
              Now that there is the Tec-9, a crappy spray gun from South Miami. This gun  is
              advertised as the most popular gun in American crime. do you believe that
              shit? It actually says that in the little book that comes whit it: the most popular.
            </q-card-section>
            <q-card-section class="q-mt-xl">
              <q-btn style="background: none; border: 2.7px solid #2bfdb1; border-radius: 5px;height: 50px; font-size: 1.2em; font-weight:bold" >LLAMANOS YA!</q-btn>
            </q-card-section>
          </div>
          <div class="col-1" style="z-index:100"><img src="../statics/pro/cell_header_pm.png" style="max-width: 550px; height: 660px;"></div>
          <div class="col-4">
            <q-card-section class=""style="background: #439dff; position:relative; top:-50px; height: 709px; border-radius:0 0 0 50px; width: 90%; margin-left:51px">
              
            </q-card-section>
          </div>
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
      slide: 1
    }
  }
}
</script>
