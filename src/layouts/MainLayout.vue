<style scoped>

@font-face {
   font-family: Nexa-Bold;
   font-style: normal;
   font-weight: normal;
   src: url(../css/font/NexaBold.ttf.woff);
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
    <q-layout view="hhh lpR fff">
      <q-header>

        <q-card flat class="xs-hide sm-hide row q-ml-xl q-mt-xl bg-primary">
          <div class="col-xs-7 col-md-6">
            <q-card-section>
              <div>
                <img src="../statics/pro/logo_promedios.png" style="width: 210px; height: 70px;">
              </div>
            </q-card-section>
            <q-card-section class="texto1 text-h3">
              <span class="nexa-bold">Somos la Fuerza</span> <br>
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
            
            <q-card-section style="background: #439dff; position:relative; top:-50px; height: 709px; border-radius:0 0 0 50px; width: 90%; left:64px">
              <div class="row q-mt-xl">
                <q-select 
                  dark
                  class="col-3 offset-8" 
                  color="white" 
                  bg-color="primary" 
                  label-color="white" 
                  outlined
                  style="max-width: 115px"
                  v-model="model" 
                  :options="options"
                  >
                  <template v-slot:prepend>
                    <q-avatar>
                      <img v-if="model.label === 'ES'"  style="width: 25px" src="../statics/pro/col.png"/>
                      <img v-if="model.label === 'CAN'" style="width: 25px" src="../statics/pro/cad.png"/>
                    </q-avatar>
                  </template>
                </q-select>
              </div>
            </q-card-section>
          </div>  
        </q-card>

        <q-card flat class="row q-mt-md bg-primary">
          <div class="col-xs-6 col-sm-6 md-hide xl-hide lg-hide">
            <q-card-section>
              <div>
                <img src="../statics/pro/logo_promedios.png"  :class="this.$q.screen.sm ? 'q-ml-xl':'q-ml-sm'"  style="max-width: 200px; height: 40px;">
              </div>
            </q-card-section>
          </div>
          
          
          <div class="col-xs-5 col-sm-6 md-hide xl-hide lg-hide">
            <q-card-section
            style="background: #439dff;"
            :style="this.$q.screen.sm ? 'top:-50px; height: 578px; border-radius:0 0 0 35px; width: 100%; margin-left:15px;' : 'top:-50px; height: 380px; border-radius:0 0 0 50px; width: 100%; margin-left:30px;'">
              <div class="row q-mt-xl">
                <q-select 
                  dark
                  :class="this.$q.screen.sm ? 'col-3 offset-8':'col-3 offset-5 dense'" 
                  color="white" 
                  bg-color="primary" 
                  label-color="white" 
                  outlined
                  :style="this.$q.screen.sm ?  'width: 114px' :'width:100px; left:-20px; position: absolute'"
                  v-model="model" 
                  :options="options"
                  >
                  <template v-slot:prepend>
                    <q-avatar>
                      <img v-if="model.label === 'ES'"  style="width: 25px" src="../statics/pro/col.png"/>
                      <img v-if="model.label === 'CAN'" style="width: 25px" src="../statics/pro/cad.png"/>
                    </q-avatar>
                  </template>
                </q-select>
              </div>
              <div class="col-sm-1 col-xs-1 q-mt-md md-hide xl-hide lg-hide" style="z-index:10">
              <img class="q-mt-sm" src="../statics/pro/cell_header_pm.png" 
              :style="this.$q.screen.sm ? 'height: 420.367px; border-radius:0 0 0 50px; width: 100%; position:absolute; top:151.12499235px; left:-105px' : 'height: 250.367px; border-radius:0 0 0 50px; width: 150%; position:absolute; top:123.12499235px; left:-90px'"
              >
              </div>
            </q-card-section>
            
          </div>
          <div  class="row md-hide lg-hide xl-hide" :style="this.$q.screen.sm ? 'top:-25px; position:relative':''" :class="this.$q.screen.sm ? 'q-mx-xl':'q-mx-lg'">
            <div class="texto1 col-xs-12 col-sm-12">
              <span :style="this.$q.screen.sm ? 'font-size:2.5em':'font-size:2.8em'">Somos la Fuerza</span> <br>
              <span v-if="this.$q.screen.sm" :style="this.$q.screen.sm ? 'font-size:2.5em':'font-size:2.8em'" class="text-secondary">de la innovación y transformación digital</span> <br>
              <span v-if="this.$q.screen.xs" :style="this.$q.screen.sm ? 'font-size:2.5em':'font-size:2.8em'" class="text-secondary">de la innovación</span> <br>
              <span v-if="this.$q.screen.xs" :style="this.$q.screen.sm ? 'font-size:2.5em':'font-size:2.7em'" class="text-secondary">y transformación digital</span>
              <p class="texto3 col-xs-10 col-sm-12" :style="this.$q.screen.sm ? 'font-size:1.3em; line-height:1.2em;':'font-size:1.1em; line-height:1.2em;'">Now that there is the Tec-9, a crappy spray gun from South Miami. This gun  is
              advertised as the most popular gun in American crime. do you believe that
              shit? It actually says that in the little book that comes whit it: the most popular.</p>
            </div>
            <q-btn class="q-mb-xl md-hide xl-hide lg-hide" style="background: none; border: 2.7px solid #2bfdb1; border-radius: 5px;height: 50px; width: 210px; font-size: 1.2em; font-weight:bold" >LLAMANOS YA!</q-btn>
          </div>
          
        </q-card>

       

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
      model:{
        label: 'ES',
        value: 'ES'
      },
      options: [
        {
          label: 'ES',
          value: 'ES',
          name: 'img:/statics/pro/col.svg'
        },
        {
          label: 'CAN',
          value: 'CAN',
          name: 'img:/statics/pro/can.svg'
        }
      ],
      langImg: {
        'ES': 'img:/statics/pro/col.svg',
        'CAN': 'img:/statics/pro/cad.svg'
      }
    }
  },
  created() {
    console.log(this.model)
  }
}
</script>
