<template>
  <div>
    <q-layout view="hhh lpR fff" class="shadow-2 rounded-borders">
      <q-header>
        <div class="row q-ml-xl bg-primary">
          <div class="col-4" style="margin-right: 285px !important">
            <div>
              <div>
                <img class="q-mt-xl" src="../statics/pro/logo_promedios.png" style="max-width: 500px; height: 70px;">
              </div>
            </div>
            <div class="text-h3">
              Somos la Fuerza
            </div>
            <div class="text-h3 text-secondary">
              de la innovación y
            </div>
            <div class="text-h3 text-secondary">
              transformación digital
            </div>
            <div class="text-h6">
              Now that there is the Tec-9, a crappy spray gun from South Miami. This gun  is
              advertised as the most popular gun in American crime. do you believe that
              shit? It actually says that in the little book that comes whit it: the most popular.
            </div>
            <div class="q-mt-xl">
              <q-btn flat ><img src="../statics/pro/llamanos_ya.svg" style="max-width: 500px; height: 50px;"></q-btn>
            </div>
          </div>
          <div class="col-6">
            <div class="col-6 bg-positive" style="border-radius: 0px 0px 0px 50px; padding: 0px !important">
              <img class="q-mt-xl" src="../statics/pro/cell_header_pm.png" 
              style="max-width: 550px; height: 660px; padding-botton: -4px !important; margin-left: -180px !important">
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
