<template>
  <div>
    <q-layout view="hhh lpR fff" style="height: 400px" class="shadow-2 rounded-borders">
      <q-header>
        <q-card flat class="row q-ml-xl q-mt-xl bg-primary">
          <div class="col-4">
            <q-card-section>
              <div>
                <img src="../statics/pro/logo_promedios.png" style="max-width: 500px; height: 70px;">
              </div>
            </q-card-section>
            <q-card-section class="text-h3">
              Somos la Fuerza
            </q-card-section>
            <q-card-section class="text-h3 text-secondary">
              de la innovación y
            </q-card-section>
            <q-card-section class="text-h3 text-secondary">
              transformación digital
            </q-card-section>
            <q-card-section class="text-h6">
              Now that there is the Tec-9, a crappy spray gun from South Miami. This gun  is
              advertised as the most popular gun in American crime. do you believe that
              shit? It actually says that in the little book that comes whit it: the most popular.
            </q-card-section>
            <q-card-section class="q-mt-xl">
              <q-btn flat ><img src="../statics/pro/llamanos_ya.svg" style="max-width: 500px; height: 50px;"></q-btn>
            </q-card-section>
          </div>
          <div class="col-1"></div>
          <div class="col-7">
            <q-card-section class="bg-positive">
              <q-btn flat ><img src="../statics/pro/cell_header_pm.png" style="max-width: 550px; height: 660px;"></q-btn>
            </q-card-section>
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
export default {
  name: 'MainLayout',
  data () {
    return {
      slide: 1
    }
  }
}
</script>
