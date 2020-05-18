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
                <img src="../statics/pro/logo_promedios.png" style="width: 210px; height: 80px;">
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
              <q-btn class="q-mt-md texto1" style="background: none; border: 2.7px solid #2bfdb1; border-radius: 5px;height: 50px; width: 210px; font-size: 1.2em;" >LLAMANOS YA!</q-btn>
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
                  style="max-width: 120px; font-size:.8em"
                  v-model="model" 
                  dropdown-icon="mdi-chevron-down"
                  :options="options"
                  >
                  <template v-slot:prepend>
                    <q-avatar>
                      <img v-if="model.label === 'ES'"  style="width: 25px" src="../statics/pro/col.png"/>
                      <img v-if="model.label === 'CAN'" style="width: 25px" src="../statics/pro/cad.png"/>
                      <img v-if="model.label === 'EN'" style="width: 25px" src="../statics/pro/usa.svg"/>
                    </q-avatar>
                  </template>
                  <template v-slot:option="scope">
                    <q-item
                      v-bind="scope.itemProps"
                      v-on="scope.itemEvents"
                    >
                      <q-item-section avatar>
                        <q-icon  :name="scope.opt.name" />
                      </q-item-section>
                      <q-item-section>
                       <q-item-label v-html="scope.opt.label" />
                        <!--<q-item-label caption>{{ scope.opt.description }}</q-item-label> -->
                      </q-item-section>
                    </q-item>
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
                <img src="../statics/pro/logo_promedios.png"  :class="this.$q.screen.sm ? 'q-ml-xl':'q-ml-sm'"  style="max-width: 200px; height: 50px;">
              </div>
            </q-card-section>
          </div>
          
          
          <div class="col-xs-5 col-sm-6 md-hide xl-hide lg-hide">
            <q-card-section
            style="background: #439dff;"
            :style="styleBackground">
              <div class="row q-mt-xl">
                <q-select 
                  dark
                  :class="this.$q.screen.sm ? 'offset-8':'offset-5'" 
                  color="white" 
                  bg-color="primary" 
                  label-color="white" 
                  outlined
                  dense
                  :style="styleSelect"
                  size="xl"
                  v-model="model" 
                  dropdown-icon="mdi-chevron-down"
                  :options="options"
                  >
                  <template v-slot:prepend>
                    <q-avatar>
                      <img v-if="model.label === 'ES'"  style="width: 25px" src="../statics/pro/col.png"/>
                      <img v-if="model.label === 'CAN'" style="width: 25px" src="../statics/pro/cad.png"/>
                      <img v-if="model.label === 'EN'" style="width: 25px" src="../statics/pro/usa.svg"/>
                    </q-avatar>
                  </template>
                  <template v-slot:option="scope">
                    <q-item
                      v-bind="scope.itemProps"
                      v-on="scope.itemEvents"
                    >
                      <q-item-section avatar>
                        <q-icon  :name="scope.opt.name" />
                      </q-item-section>
                      <q-item-section>
                       <q-item-label v-html="scope.opt.label" />
                        <!--<q-item-label caption>{{ scope.opt.description }}</q-item-label> -->
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>
              <div class="col-sm-1 col-xs-1 q-mt-md md-hide xl-hide lg-hide" style="z-index:10">
              <img class="q-mt-sm" src="../statics/pro/cell_header_pm.png" 
              :style="this.$q.screen.sm ? 'height: 420.367px; border-radius:0 0 0 50px; width: 100%; position:absolute; top:151.12499235px; left:-105px' : 'height: 65.7%; border-radius:0 0 0 50px; width: 150%; position:absolute; top:123.12499235px; left:-90px'"
              >
              </div>
            </q-card-section>
            
          </div>
          <div  class="row md-hide lg-hide xl-hide" :style="this.$q.screen.sm ? 'top:-25px; position:relative':''" :class="this.$q.screen.sm ? 'q-mx-xl':'q-mx-lg'">
            <div class="texto1 col-xs-12 col-sm-12">
              <span :style="this.$q.screen.sm ? 'font-size:2.5em':'font-size:2.9em; line-height:1em;'">Somos la Fuerza</span> <br>
              <span v-if="this.$q.screen.sm" :style="this.$q.screen.sm ? 'font-size:2.5em':'font-size:2.9em; line-height:1em;'" class="text-secondary">de la innovación y transformación digital</span> <br>
              <span v-if="this.$q.screen.xs" :style="this.$q.screen.sm ? 'font-size:2.5em':'font-size:2.9em; line-height:1em;'" class="text-secondary">de la innovación</span> <br>
              <span v-if="this.$q.screen.xs" :style="this.$q.screen.sm ? 'font-size:2.5em':'font-size:2.9em'" class="text-secondary">y transformación digital</span>
              <p class="texto3 col-xs-10 col-sm-12" :style="this.$q.screen.sm ? 'font-size:1.5em; line-height:1.4em;':'font-size:1.4em; line-height:1.2em;'">Now that there is the Tec-9, a crappy spray gun from South Miami. This gun  is
              advertised as the most popular gun in American crime. do you believe that
              shit? It actually says that in the little book that comes whit it: the most popular.</p>
            </div>
            <q-btn class="q-mb-xl md-hide xl-hide lg-hide texto1" style="background: none; border: 2.7px solid #2bfdb1; border-radius: 5px;height: 50px; width: 210px; font-size: 1.2em;" >LLAMANOS YA!</q-btn>
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
          name: 'img:/statics/pro/cad.svg'
        },
        {
          label: 'EN',
          value: 'EN',
          name: 'img:/statics/pro/usa.svg'
        }
      ],
      langImg: {
        'ES': 'img:/statics/pro/col.svg',
        'CAN': 'img:/statics/pro/cad.svg',
        'EN': 'img:/statics/pro/usa.svg'
      }
    }
  },
  created() {
    console.log(this.model)
  },
  computed: {
    styleSelect(){
      let value = ''
      if(this.$q.screen.sm){
        value = 'left:-20px; position:absolute; font-size: 0.8em'
      }else if(this.$q.screen.xs && this.$q.screen.width === 493){
        value = 'left:-20px; position:absolute; font-size: 0.8em'
      }
      else if(this.$q.screen.xs){
        value = 'left:-30px;position:absolute; font-size: 0.8em'
      }
      return value
    },
    styleBackground(){
      let value = ''
      if(this.$q.screen.sm){
        value = 'top:-50px; height: 578px; border-radius:0 0 0 35px; width: 100%; margin-left:15px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 500){
        value = 'top:-50px; height: 380px; border-radius:0 0 0 50px; width: 100%; margin-left:45px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 360){
        value = 'top:-50px; height: 380px; border-radius:0 0 0 50px; width: 100%; margin-left:45px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 320){
        value = 'top:-50px; height: 381px; border-radius:0 0 0 50px; width: 110%; margin-left:30px;'
      }  else if(this.$q.screen.xs && this.$q.screen.width === 375){
        value = 'top:-50px; height: 380px; border-radius:0 0 0 50px; width: 90%; margin-left:45px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 414){
        value = 'top:-50px; height: 382.1px; border-radius:0 0 0 50px; width: 90%; margin-left:55px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 589){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 586){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 570){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 581){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 567){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 560){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 559){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 552){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 548){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 543){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 534){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 529){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 527){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 515){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 513){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 509){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 501){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 70%; margin-left:120px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 505){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 75%; margin-left:100px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 499){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 75%; margin-left:100px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 497){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 75%; margin-left:95px;'
      } else if(this.$q.screen.width === 493){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 75%; margin-left:95px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 497){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 75%; margin-left:95px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 487){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:80px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 484){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:80px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 470){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:80px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 471){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 75%; margin-left:95px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 467){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:80px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 460){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:80px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 458){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:85px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 454){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:85px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 444){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 85%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 438){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 436){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 439){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 434){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 431){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 427){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 420){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 416){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 415){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 412){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 410){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 90%; margin-left:55px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 407){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 90%; margin-left:55px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 402){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 90%; margin-left:55px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 433){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 451){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 457){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 455){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 440){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 469){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:80px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 511){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 75%; margin-left:95px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 426){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 435){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 430){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 428){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 425){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 424){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 423){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 413){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 90%; margin-left:65px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 411){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 80%; margin-left:75px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 394){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 90%; margin-left:48px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 393){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 90%; margin-left:48px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 383){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 90%; margin-left:48px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 373){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 90%; margin-left:48px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 367){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 90%; margin-left:48px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 357){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 90%; margin-left:48px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 353){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 100%; margin-left:30px;'
      } 
      else if(this.$q.screen.xs){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 100%; margin-left:30px;'
      } 
      return value
    }
  }
}
</script>
