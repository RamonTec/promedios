<style scoped>
.text-footer{
  font-size: 1.2em;
  color:red
}
</style>
<style lang="scss">
.img_group{
  background-image: radial-gradient(
      rgba(0, 0, 0, 0.329),
      rgba(0, 0, 0, 0.5)
    ),
  url("../statics/pro/Groupo_1.jpg");
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
  url("../statics/pro/Group11.jpg");
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

.texto4{
  font-family: open-sans;
  color:white;
}

.textarea{
  width: 300px;
  height: 150px;
}

</style>
<template>
  <div>
    <div class="img_group2 row justify-around">
      <div class="col-md-8">
        <div>
          <div class="xs-hide sm-hide row">
            <div class="col-md-12 bg-none q-mt-md">
              <q-card-section>
                <q-toolbar-title class="texto1 q-ml-md text-h2"
                :style=" 
                this.$q.screen.width == 1024 ? 
                'white-space: initial; line-height: 50pt;' : 'white-space: initial; line-height: 50pt;' "
                >
                  Listo para entrar en la
                  transformación digital?
                </q-toolbar-title>
              </q-card-section>
            </div>
          </div>
        </div>
        <div class="xs-hide sm-hide row">
          <div class="col-md-10">
            <q-card-section class="q-ml-xl">
              <q-toolbar-title class="texto2 text-h4" 
              :style=" 
              this.$q.screen.width == 1024 ? 
              'white-space: initial; line-height: 25pt;' : 'white-space: initial; line-height: 20pt;' "
              >
                Solo tendras exito si crees que puedes!
              </q-toolbar-title>
            </q-card-section>
          </div>
          <div class="col-md-10">
            <q-card-section class="texto3 q-ml-sm">
              <q-toolbar-title class="q-ml-xl" 
              :style=" 
              this.$q.screen.width == 1024 ? 
              'white-space: initial; line-height: 20pt; margin-top:-10px;' : 'white-space: initial; line-height: 20pt;' "
              >
                Trabajemos juntos para ser más grandes.
              </q-toolbar-title>
            </q-card-section>
            <q-card-section class="col-md-1">
              <img 
              :style=" 
              this.$q.screen.width == 1024 ? 
              'width: 40%; height: 150%; margin-left:80%; margin-top:-100px; margin-botton:500px;' : 'width: 40%; height: 150%; margin-left:80%; margin-top:-100px;' "

              src="../statics/pro/flecha.svg">
            </q-card-section>
          </div>
        </div>

        <div class="xs-hide sm-hide row q-ml-xl" 
        :style="this.$q.screen.width == 1024 ? 
        'margin-top:2%;' : 'margin-top:9%;'">
          <div class="col-xs-5 col-sm-6 col-md-6">
            <q-card-section class="texto1">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/col.svg" style="width: 40px; height: 28px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h3" style="white-space: initial;">Bogotá</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/marcador.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" style="white-space: initial; line-height: 25px;" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'font-size:1.2em; white-space: initial; line-height: 25px;'">Carrera 13 #93-35, Piso 6 Counity Coworking</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/mensaje.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'font-size:1.2em; white-space: initial; line-height: 25px;'" style="word-break: break-all;white-space: initial; line-height: 25px;">hola@promediosdigitales.com</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/llamada.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'font-size:1.2em; white-space: initial; line-height: 25px;'" style="white-space: initial;">+ 57 315 839 4620</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/whatsapp.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'font-size:1.2em; white-space: initial; line-height: 25px;'" style="white-space: initial; line-height: 25px;">Contáctanos vía whatsapp</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
          </div>

          <div class="col-xs-5 col-sm-6 col-md-6">
            <q-card-section class="texto1">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/cad.svg" style="width: 40px; height: 28px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h3" style="white-space: initial;">Montreal</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/marcador.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" style="white-space: initial; line-height: 25px;" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'font-size:1.2em; white-space: initial; line-height: 25px;'">3 Place Ville Marie, Suite 400,
Montreal, QC H3B 2E3
WeWork</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/mensaje.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'font-size:1.2em; white-space: initial; line-height: 25px;'" style="word-break: break-all;white-space: initial; line-height: 25px;">commercial@promediosdigitales.com</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/llamada.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'font-size:1.2em; white-space: initial; line-height: 25px;'" style="white-space: initial;">+ 1 438 368 4041</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/whatsapp.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'font-size:1.2em; white-space: initial; line-height: 25px;'" style="white-space: initial; line-height: 25px;">Contáctanos vía whatsapp</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
          </div>

        </div>

        <div class="col-sm-9 row justify-center q-mt-md q-mb-sm xs-hide md-hide xl-hide lg-hide">
          <div class="col-sm-5">
            <q-card-section class="texto1">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/col.svg" style="width: 40px; height: 28px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h3" style="white-space: initial;">Bogotá</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/marcador.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" style="white-space: initial; line-height: 25px;" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'">Carrera 13 #93-35, Piso 6 Counity Coworking</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/mensaje.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'" style="word-break: break-all;white-space: initial; line-height: 25px;">hola@promediosdigitales.com</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/llamada.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'" style="white-space: initial;">+ 57 315 839 4620</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/whatsapp.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'" style="white-space: initial; line-height: 25px;">Contáctanos vía whatsapp</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
          </div>

          <div class="col-sm-5">
            <q-card-section class="texto1">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/cad.svg" style="width: 40px; height: 28px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h3" 
                  :style=" 
                  this.$q.screen.width == 1024 ? 
                  'font-size:40px; white-space: initial;' : 'white-space: initial;' "
                  >Montreal</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/marcador.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'">3 Place Ville Marie, Suite 400,
Montreal, QC H3B 2E3
WeWork</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/mensaje.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span 
                  class="text-h6" 
                  :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'" style="word-break: break-all;white-space: initial; line-height: 25px;">commercial@promediosdigitales.com</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/llamada.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'" style="white-space: initial;">+ 1 438 368 4041</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/whatsapp.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" style="white-space: initial; line-height: 25px;" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'">Contáctanos vía whatsapp</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
          </div>

        </div>

      </div>

      <div class="xs-hide sm-hide col-md-3 q-mt-md q-mb-xl" 
      :style=" 
      this.$q.screen.width == 1024 ? 
      'margin-top:150px; width: 320px; margin-left:18 px;' : 'margin-top:130px; width: 32%; margin-left:18 px;' "
      >
        <q-card flat bordered class="col-xs-11 col-sm-4 bg-white" style="border-radius:15px;">
          <div class="col-xs-10 col-sm-10">
            <q-card-section class="q-ml-sm q-mt-sm">
              <span class="texto1 text-black" style="font-size:20px;">Cuéntanos acerca de ti</span> <br>
              <span class="text-black text-weight-light" style="font-size:16px;">Sobre la empresa ó el proyecto</span>
            </q-card-section>
            <div class="row justify-center texto3" style="margin-top:-15px;">
              <div class="col-xs-11 col-sm-11">
                <q-input class="q-mt-sm" outlined v-model="nameBussisnes"
                :rules="[
                  val => !!val || 'Este campo es obligatorio',
                  val => val.length <= 40 || 'Máximo 40 caracteres'
                ]"
                label="Nombre de la empresa ó proyecto" style="border-radius:10px" dense />
                <q-select class="q-mt-sm" outlined :options="sector" v-model="sectorForm"
                :rules="[
                  val => !!val || 'Este campo es obligatorio'
                ]"
                label="Sector al que pertenece" style="border-radius:10px" dense />
                <q-select class="q-mt-sm" outlined :options="services" v-model="servicesForm"
                :rules="[
                  val => !!val || 'Este campo es obligatorio'
                ]"
                label="En que servicio esta interesado?" style="border-radius:10px" dense />
                <q-select class="q-mt-sm" outlined :options="negocios" v-model="negocioForm"
                :rules="[
                  val => !!val || 'Este campo es obligatorio'
                ]"
                label="Tipo de negocio ó proyecto" style="border-radius:10px" dense />
              </div>
            </div>
          </div>
          <div class="col-xs-10 col-sm-10">
            <q-card-section class="q-ml-sm">
              <span class="text-black text-weight-light" style="font-size:16px;">Datos de contacto</span>
            </q-card-section>
            <div class="row justify-center texto4" style="margin-top:-15px;">
              <div class="col-11">
                <div class="row justify-center">
                  <div class="col-6">
                    <q-input class="q-mt-sm q-mr-sm" outlined v-model="name" 
                    :rules="[
                      val => !!val || 'Este campo es obligatorio',
                      val => val.length >= 3 || 'Mínimo 3 caracteres',
                      val => val.length <= 40 || 'Máximo 40 caracteres',
                      val => /^([a-zA-Z]{3,40})*$/.test(val) || 'Solo se permiten caracteres'
                    ]"
                    label="Nombres" style="border-radius:50px" dense />
                  </div>
                  <div class="col-6">
                    <q-input class="q-mt-sm " outlined v-model="lastName" label="Apellidos"
                    :rules="[
                      val => !!val || 'Este campo es obligatorio',
                      val => val.length >= 3 || 'Mínimo 3 caracteres',
                      val => val.length <= 40 || 'Máximo 40 caracteres',
                      val => /^([a-zA-Z]{3,40})*$/.test(val) || 'Solo se permiten caracteres'
                    ]"
                    style="border-radius:10px" dense />
                  </div>
                </div>
                <div class="row justify-center">
                  <div class="col-6">
                    <q-input class="q-mt-sm q-mr-sm" outlined v-model="email" label="E - Mail"
                    :rules="[
                      val => !!val || 'Este campo es obligatorio',
                      val => val.length <= 40 || 'Máximo 40 caracteres',
                      val =>
                        /^([a-zA-Z0-9._-]{3,}[@][a-zA-Z0-9.]{3,}[.][a-zA-Z0-9.]{2,5})*$/.test(
                          val
                        ) || 'Formato de correo inválido'
                    ]"
                    style="border-radius:10px" dense />
                  </div>
                  <div class="col-6">
                    <q-input class="q-mt-sm " outlined v-model="phone" label="Celular"
                    mask="############"
                    :rules="[
                    val => !!val || 'Este campo es obligatorio',
                    val => (val.length > 9) || 'Debe contener mínimo 10 dígitos']"
                    style="border-radius:10px" dense />
                  </div>
                </div>
                <div class="row">
                  <q-input
                    class="q-mt-sm col-12"
                    v-model="description"
                    :rules="[
                      val => !!val || 'Este campo es obligatorio',
                      val => val.length <= 40 || 'Máximo 40 caracteres'
                    ]"
                    outlined
                    label="Cuéntanos que expectativa tienes"
                    type="textarea"
                  />
                </div>
                <div class="row justify-between">
                  <div class="col-xs-5 col-4 q-mb-md q-mt-md texto3">
                    <q-btn color="positive"  class="full-width" 
                    :style="this.$q.screen.width == 1024 ? 'height:50px;' : 'height:96%;'">
                      <q-img src="../statics/pro/enviar.svg" style="width:150px;"></q-img>
                    </q-btn>
                  </div>
                  <div class="col-xs-6 q-mt-md texto3">
                    <p 
                    class="text-grey-7" 
                    style="line-height: 15px; font-size:12px;">
                      Los datos ingresados serán tratados de manera confidencial como lo dispone la ley habeas data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card>
        
      </div>
      
    </div>

    <div class="img_group2 sm-hide md-hide lg-hide xl-hide">
      <div class="col-xs-10 row q-mb-sm  md-hide xl-hide lg-hide">
          <div class="col-xs-10">
            <q-card-section class="texto1">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/col.svg" style="width: 40px; height: 28px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h3" style="white-space: initial;">Bogotá</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/marcador.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" style="white-space: initial; line-height: 25px;" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'">Carrera 13 #93-35, Piso 6 Counity Coworking</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/mensaje.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'" style="word-break: break-all;white-space: initial; line-height: 25px;">hola@promediosdigitales.com</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/llamada.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'" style="white-space: initial;">+ 57 315 839 4620</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/whatsapp.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'" style="white-space: initial; line-height: 25px;">Contáctanos vía whatsapp</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
          </div>

          <div class="col-xs-10">
            <q-card-section class="texto1">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/cad.svg" style="width: 40px; height: 28px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h3" 
                  :style=" 
                  this.$q.screen.width == 1024 ? 
                  'font-size:40px; white-space: initial;' : 'white-space: initial;' "
                  >Montreal</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/marcador.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" 
                  :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'">3 Place Ville Marie, Suite 400,
Montreal, QC H3B 2E3
WeWork</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/mensaje.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span 
                  class="text-h6" 
                  :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'" style="word-break: break-all;white-space: initial; line-height: 25px;">commercial@promediosdigitales.com</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/llamada.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'" style="white-space: initial;">+ 1 438 368 4041</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
            <q-card-section style="margin-top:-30px;" class="texto3">
              <q-item>
                <q-item-section side>
                  <q-avatar>
                    <q-img src="../statics/pro/whatsapp.svg" style="width: 40px; height: 40px;"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <span class="text-h6" style="white-space: initial; line-height: 25px;" :style="this.$q.screen.width == 1024? 'font-size:1.2em; white-space: initial; line-height: 25px;': 'white-space: initial; line-height: 25px;'">Contáctanos vía whatsapp</span>
                </q-item-section>
              </q-item>                
            </q-card-section>
          </div>

        </div>
    </div>

    <div class="md-hide lg-hide xl-hide row justify-center q-mt-md q-mb-md">
      <div class="texto1 col-xs-10 col-sm-10 text-h4">
        ¿Listo para entrar en la
        transformación digital?
      </div>
      <div class="texto3 col-xs-10 col-sm-10 text-h6">
        Solo tendras exito si crees que puedes!
        Trabajemos juntos para ser más grandes.
      </div>
    </div>

    <div class="md-hide lg-hide xl-hide">
      <div class="row justify-center">
        <q-card flat bordered class="col-xs-11 col-sm-11 bg-white" style="border-radius:15px;">
          <div class="col-xs-10 col-sm-10">
            <q-card-section class="q-ml-sm">
              <span class="texto1 text-black" style="font-size:20px;">Cuéntanos acerca de ti</span> <br>
              <span class="text-black text-weight-light" style="font-size:16px;">Sobre la empresa ó el proyecto</span>
            </q-card-section>
            <div class="row justify-center texto3" style="margin-top:-15px;">
              <div class="col-xs-11 col-sm-11">
                <q-input class="q-mt-sm" outlined v-model="nameBussisnes"
                :rules="[
                  val => !!val || 'Este campo es obligatorio',
                  val => val.length <= 40 || 'Máximo 40 caracteres'
                ]"
                label="Nombre de la empresa ó proyecto" style="border-radius:10px" dense />
                <q-select class="q-mt-sm" outlined :options="sector" v-model="sectorForm"
                :rules="[
                  val => !!val || 'Este campo es obligatorio'
                ]"
                label="Sector al que pertenece" style="border-radius:10px" dense />
                <q-select class="q-mt-sm" outlined :options="services" v-model="servicesForm"
                :rules="[
                  val => !!val || 'Este campo es obligatorio'
                ]"
                label="En que servicio esta interesado?" style="border-radius:10px" dense />
                <q-select class="q-mt-sm" outlined :options="negocios" v-model="negocioForm"
                :rules="[
                  val => !!val || 'Este campo es obligatorio'
                ]"
                label="Tipo de negocio ó proyecto" style="border-radius:10px" dense />
              </div>
            </div>
          </div>
          <div class="col-xs-10 col-sm-10">
            <q-card-section class="q-ml-sm">
              <span class="text-black text-weight-light" style="font-size:16px;">Datos de contacto</span>
            </q-card-section>
            <div class="row justify-center texto4" style="margin-top:-15px;">
              <div class="col-11">
                <div class="row justify-center">
                  <div class="col-6">
                    <q-input class="q-mt-sm q-mr-sm" outlined v-model="name"
                    :rules="[
                      val => !!val || 'Este campo es obligatorio',
                      val => val.length >= 3 || 'Mínimo 3 caracteres',
                      val => val.length <= 40 || 'Máximo 40 caracteres',
                      val => /^([a-zA-Z]{3,40})*$/.test(val) || 'Solo se permiten caracteres'
                    ]"
                    label="Nombres" style="border-radius:10px" dense />
                  </div>
                  <div class="col-6">
                    <q-input class="q-mt-sm " outlined v-model="lastName"
                    :rules="[
                      val => !!val || 'Este campo es obligatorio',
                      val => val.length >= 3 || 'Mínimo 3 caracteres',
                      val => val.length <= 40 || 'Máximo 40 caracteres',
                      val => /^([a-zA-Z]{3,40})*$/.test(val) || 'Solo se permiten caracteres'
                    ]"
                    label="Apellidos" style="border-radius:10px" dense />
                  </div>
                </div>
                <div class="row justify-center">
                  <div class="col-6">
                    <q-input class="q-mt-sm q-mr-sm" outlined v-model="email" label="E - Mail" 
                    style="border-radius:10px" 
                    :rules="[
                      val => !!val || 'Este campo es obligatorio',
                      val => val.length <= 40 || 'Máximo 40 caracteres',
                      val =>
                        /^([a-zA-Z0-9._-]{3,}[@][a-zA-Z0-9.]{3,}[.][a-zA-Z0-9.]{2,5})*$/.test(
                          val
                        ) || 'Formato de correo inválido'
                    ]"
                    dense />
                  </div>
                  <div class="col-6">
                    <q-input class="q-mt-sm " outlined v-model="phone"
                    mask="############"
                    :rules="[
                    val => !!val || 'Este campo es obligatorio',
                    val => (val.length > 9) || 'Debe contener mínimo 10 dígitos']"
                    label="Celular" style="border-radius:10px" dense />
                  </div>
                </div>
                <div class="row">
                  <q-input
                    class="q-mt-sm col-12"
                    v-model="description"
                    :rules="[
                      val => !!val || 'Este campo es obligatorio',
                      val => val.length <= 40 || 'Máximo 40 caracteres'
                    ]"
                    outlined
                    label="Cuéntanos que expectativa tienes"
                    type="textarea"
                  />
                </div>
                <div class="row justify-between">
                  <div class="col-xs-5 col-4 q-mb-md q-mt-md texto3">
                    <q-btn color="positive" label="Enviar" size="lg"  class="full-width"></q-btn>
                  </div>
                  <div class="col-xs-6 q-mt-md texto3">
                    <p class="text-grey-7" style="line-height: 1em; font-size:12px;">Los datos ingresados serán tratados de manera confidencial como lo dispone la ley habeas data.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>

  </div>
</template>

<script>
import mail from 'mailgun.js'
export default {
  name: 'Formulario',
  data(){
    return{
      email: '',
      description: '',
      nameBussisnes:'',
      name: '',
      lastName: '',
      phone: '',
      servicesForm: '',
      sectorForm: '',
      negocioForm: '',
      negocios: [
        'Idea de negocio',
        'Emprendimiento',
        'Micro Empresa',
        'Pyme',
        'Empresa Grande '
      ],
      services: [
        'Consultoría',
        'Api Whatsapp',
        'Drop Shipping',
        'E-Commerce',
        'Sistemas',
        'Apps',
        'Servidores',
        'Marketing Digital',
        'Branding',
        '3D'
      ],
      sector: [
        'Agricultura',
        'Alimentación',
        'Belleza',
        'Comercio de productos',
        'Comercio de servicios',
        'Construcción',
        'Consultoría',
        'Educación',
        'Financiero',
        'Hotelero, restaurante y turismo',
        'Industrias químicas o farmacéuticas',
        'Logística y distribución',
        'Manufacturero',
        'Medios de comunicación',
        'Metalurgia',
        'Salud',
        'Servicios públicos',
        'Tecnología',
        'Telecomunicaciones',
        'Transporte',
        'Otro...'
      ],
      ipad: false,
      media: 0
    }
  },
  created(){
    console.log(this.$q.screen.width)
  }
}
</script>

<style>

</style>