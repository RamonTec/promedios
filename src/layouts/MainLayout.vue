<template>
  <div>
    <q-layout view="hhh lpR fff" class="shadow-2 rounded-borders">
      <q-header>
        <div class="row bg-primary">
          <div class="col-xs-11 col-md-4" 
              :style="($q.screen.lt.md) ? 'text-align: center; font-size: 100px; !important' : 'margin-left: 48px;'"
              style="margin-right: 392px !important">
            <div>
              <img class="q-mt-xl" src="../statics/pro/logo_promedios.png"
              style="max-width: 500px; height: 70px;">
            </div>
            <div class="text-h3"
              :style="($q.screen.lt.sm) ? 'text-align: center; font-size: 30px;' : 'margin-top:30px;'"
            >
              Somos la Fuerza
            </div>
            <div class="text-h3 text-secondary"
              :style="($q.screen.lt.sm) ? 'text-align: center; font-size: 30px;' : ''"
            >
              de la innovación y
            </div>
            <div class="text-h3 text-secondary"
              :style="($q.screen.lt.sm) ? 'text-align: center; font-size: 30px;' : ''"
            >
              transformación digital
            </div>
            <div class="text-h6"
              :style="($q.screen.lt.md) ? 'text-align: center; font-size: 20px;' : 'margin-top:30px;'"
            >
              Now that there is the Tec-9, a crappy spray gun from South Miami. This gun  is
              advertised as the most popular gun in American crime. do you believe that
              shit? It actually says that in the little book that comes whit it: the most popular.
            </div>
            <div class="q-mt-xl"
              :style="($q.screen.lt.sm) ? 'margin-top: 10px;' : 'margin-top: 150px;'"
            >
              <q-btn flat ><img src="../statics/pro/llamanos_ya.svg" style="max-width: 500px; height: 50px;"></q-btn>
            </div>
          </div>
          <div class="xs-hide sm-hide col-md-5">
            <div class="bg-positive" style="border-radius: 0px 0px 0px 50px; padding: 0px !important">
              <img class="q-mt-xl" src="../statics/pro/cell_header_pm.png" 
              style="max-width: 550px; height: 660px;margin-bottom: -7px !important; margin-left: -180px !important;">
            </div>
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
export default {
  name: 'MainLayout',
  data () {
    return {
      slide: 1
    }
  }
}
</script>
