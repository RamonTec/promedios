<template>
  <div>
    <div class="xs-hide sm-hide row q-mt-xl" style="margin-botton:-100px;">
      <div class="col-11" style="background: #2b3035; border-radius: 0 25px 25px 0; heigth: 120px">
       <!-- Content 02
        ====================================================== -->
        <section class="uix-spacing--m">
          <div class="container uix-t-c">
            <div class="row justify-between">
              <div class="col-12">
                <div class="uix-tabs uix-tabs--rotation" data-rotation="true" data-rotation-display="10" data-rotation-radius="130" data-rotation-wrapper-angle="130">
                  <div class="row">
                    <div class="col-5 q-mt-md q-mb-md">
                    <div class="uix-tabs__nav">
                      <ul>
                        <div>
                          <img src="../statics/Promedios/pro_med.png" style="width: 120px; height: 120px; position:relative; top:50px; left:70px; transform: rotate(231deg)">
                        </div>
                        
                        <li class="active a" v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color10 = false; ">
                          <a href="javascript:void(0);" :style=" color9 == true ? 'background-color: #2bfdb1;' : 'background-color: #2b3035;' ">C</a>
                        </li>

                        <li v-on:click="color1 = true; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false; color10=false;">
                          <a href="javascript:void(0);" :style=" color1 == true ? 'background-color: #429dff;' : 'background-color: #2b3035;' ">A-W</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = true; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false; color10=false;" >
                          <a href="javascript:void(0); text-whtie" :style=" color2 == true ? 'background-color: #ff4343;' : 'background-color: #2b3035;' ">E-C</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = true; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false; color10=false;">
                          <a href="javascript:void(0); text-whtie" :style=" color3 == true ? 'background-color: #48ffe0;' : 'background-color: #2b3035;' ">S</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = true; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false; color10=false;">
                          <a href="javascript:void(0); text-whtie" :style=" color4 == true ? 'background-color: #be43ff;' : 'background-color: #2b3035;' ">A</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = true; color6 = false; color7 = false; color8 = false; color9 = false; color10=false;">
                          <a href="javascript:void(0); text-whtie" :style=" color5 == true ? 'background-color: #ff45fb;' : 'background-color: #2b3035;' ">S</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = true; color7 = false; color8 = false; color9 = false; color10=false;">
                          <a href="javascript:void(0); text-whtie" :style=" color6 == true ? 'background-color: #ffad4a;' : 'background-color: #2b3035;' ">M-D</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = true; color8 = false; color9 = false; color10=false;">
                          <a href="javascript:void(0); text-whtie" :style=" color7 == true ? 'background-color: #f0c54f;' : 'background-color: #2b3035;' ">B</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = true; color9 = false; color10=false;">
                          <a href="javascript:void(0); text-whtie" :style=" color8 == true ? 'background-color: #45ff45;' : 'background-color: #2b3035;' ">3-D</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false; color10=true;">
                          <a href="javascript:void(0); text-whtie" :style=" color10 == true ? 'background-color: #45ff45;' : 'background-color: #2b3035;' ">D-S</a>
                        </li>

                      </ul>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="uix-tabs__content active">
                      <span class="texto1 text-h4 text-weight-bold" style="color: #2bfdb1;">Consultoria</span>
                      <p class="texto3 q-mt-md">
                        El mundo hoy esta en un inminente cambio, por eso, es necesario
                        re-inventarnos. La innovación en los modelos de negocio actuales son la clave
                        para llevarlos y entrar en la transformación digital y dirigirlos al éxito,
                        debemos enfocar la tecnología como un facilitador entre negocios y usuarios;
                        Operar un negocio digital se ha convertido en un gran reto para las empresas
                        y más en un mundo tan cambiante como al día de hoy. 
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row text-justify q-gutter-sm">
                        <q-btn outline style="color: #fdfdfd; width:30%; border-radius: 10px;" label="Transformación Digital" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; width:30%; border-radius: 10px;" label="Digitalización de Procesos" class="col-4" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; width:30%; border-radius: 10px;" label="Automatización de Procesos" class="col-4" size="md" no-caps />
                      </div>
                      <div class="texto3 row text-justify q-gutter-sm q-mt-xs">
                        <q-btn outline style="color: #fdfdfd; width:30%; border-radius: 10px;" label="Optimización de Procesos" class="col-sm-3 col-md-1" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; width:30%; border-radius: 10px;" label="Canales de Comunicación" class="col-sm-3 col-md-1" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; width:30%; border-radius: 10px;" label="Asesoria Especializada" class="col-sm-3 col-md-1" size="md" no-caps />
                      </div>
                    </div>
                    <div class="uix-tabs__content">
                      <span class="text-h4 text-weight-bold" style="color: #429dff;">Api Whatsapp</span>
                      <p class="texto3 q-mt-md">
                        Whatsapp hoy en día es el medio de comunicación numero uno en el mundo,
                        de aquí parte el desarrollo de procesos y aplicativos integrados a este para
                        lograr diferentes objetivos a través de él.
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row text-justify q-gutter-sm">
                        <q-btn outline style="color: #fdfdfd; width:30%; border-radius: 10px;" label="Puentes de comunicación" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; width:30%; border-radius: 10px;" label="Comunicación directa" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; width:30%; border-radius: 10px;" label="Integranción de Procesos" class="col-3" size="md" no-caps />
                      </div>
                      <div class="texto3 row text-justify q-gutter-sm q-mt-xs">
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Venta Simplificada" class="col-3" size="md" no-caps />
                      </div>
                    </div>
                    <div class="uix-tabs__content">
                      <span class="texto1 text-h4 text-weight-bold" style="color: #ff4343;">E-Commerce</span>
                      <p class="texto3 q-mt-md">
                        El cambio que vive el mundo el día de hoy esta impulsando el comercio
                        electrónico, vemos los crecientes indices y la constante tendencia que esta
                        llevando el mercado a la compra de productos y servicios en internet, sumando
                        el alcance en ventas que se logra tener gracias a los clientes que acuden a él. 
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row text-justify q-gutter-sm">
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Automatización de Ventas" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Aumento de Ventas" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Ventas por Conversiones" class="col-3" size="md" no-caps />
                      </div>
                    </div> 
                    <div class="uix-tabs__content">
                      <span class="texto1 text-h4 text-weight-bold" style="color: #48ffe0;">Sistemas</span>
                      <p class="texto3 q-mt-md">
                        Los sistemas hoy en día son la fuente de la transformación digital, quienes
                        permiten desarrollar los entornos digitales que conocemos hoy en día, y nos
                        permiten alcanzar el éxito al lograr toda esta evolución con el único fin de
                        construir productos que realmente respondan a problemas y necesidades
                        globales que puedan ser innovadoras en el mercado.
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row text-justify q-gutter-sm">
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Transformación Digital" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:33%; border-radius: 10px;" label="Digitalización de Procesos" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:33%; border-radius: 10px;" label="Automatización de Procesos" class="col-3" size="md" no-caps />
                      </div>
                      <div class="texto3 row text-justify q-gutter-sm q-mt-xs">
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Optimazación de Procesos" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:33%; border-radius: 10px;" label="Arquitectura de información" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:33%; border-radius: 10px;" label="Flujo de Información" class="col-3" size="md" no-caps />
                      </div>
                    </div>
                    <div class="uix-tabs__content">
                      <span class="texto1 text-h4 text-weight-bold" style="color: #be43ff;">Apps</span>
                      <p class="texto3 text-body1 q-mt-md">
                        Las Aplicaciones móviles juegan un papel importante en nuestras vidas, hoy
                        en día pasamos gran parte de nuestro tiempo en ella y nos facilitan la vida, he
                        aquí el éxito de este modelo y el futuro en el. 
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row text-justify q-gutter-sm">
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:33%; border-radius: 10px;" label="Android" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="IOS" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:33%; border-radius: 10px;" label="Hibridas" class="col-3" size="md" no-caps />
                      </div>
                      <div class="texto3 row text-justify q-gutter-sm q-mt-xs">
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:33%; border-radius: 10px;" label="Nativas" class="col-3" size="md" no-caps />
                      </div>
                    </div>   
                    <div class="uix-tabs__content">
                      <span class="texto1 text-h4 text-weight-bold" style="color: #ff45fb;">Servidores</span>
                      <p class="texto3 q-mt-md">
                        Todo proyecto digital necesita un lugar en donde vivir 
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row text-justify q-gutter-sm">
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Administración" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Monitoreo" class="col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Cloud" class="col-3" size="md" no-caps />
                      </div>
                      <div class="texto3 row text-justify q-gutter-sm">
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Dedicados" class="col-3 q-mt-md" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Hosting" class="col-3 q-mt-md" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Hosting" class="col-3 q-mt-md" size="md" no-caps />
                      </div>
                    </div>   
                    <div class="uix-tabs__content">
                      <span class="texto1 text-h4 text-weight-bold" style="color: #ffad4a;">Marketing Digital</span>
                      <p class="texto3 q-mt-md">
                        Las campañas de marketing digital juegan un papel importante en la
                        transformación digital, son la herramienta que nos permite llegar a neutros
                        clientes objetivos, y hacen parte del ecosistema tecnológico para lograr todas
                        nuestras metas y objetivos
                      </p>
                      <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      <div class="texto3 row justify-start">
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="FacebookAdd" class="col-3 q-mr-md" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="GoogleAdd" class="col-3" size="md" no-caps />
                      </div>
                    </div>   
                      <div class="uix-tabs__content">
                        <span class="texto1 text-h4 text-weight-bold" style="color: #f0c54f;">Branding</span>
                        <p class="texto3 q-mt-md">
                          La forma como el mundo te ve y te percibe es decisivo
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                        <div class="texto3 row text-justify q-gutter-sm">
                          <q-btn outline style="color: #fdfdfd; max-width:30%; width:33%; border-radius: 10px;" label="Diseño Publicitario" class="col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Construcción de Marca" class="col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; max-width:30%; width:33%; border-radius: 10px;" label="Portafolio Grafico" class="col-3" size="md" no-caps />
                        </div>
                      </div>    
                     <div class="uix-tabs__content">
                        <span class="texto1 text-h4 text-weight-bold" style="color: #45ff45;">3D</span>
                        <p class="texto3 q-mt-md">
                          Llegar una a impacto publicitario mas alto es la mejor opción
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                        <div class="texto3 row text-justify q-gutter-sm">
                          <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Modelado" class="col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Render" class="col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Animación" class="col-3" size="md" no-caps />
                        </div>
                      </div>
                      <div class="uix-tabs__content">
                        <span class="texto1 text-h4 text-weight-bold" style="color: #45ff45;">D-S</span>
                        <p class="texto3 q-mt-md">
                          Llegar una a impacto publicitario mas alto es la mejor opción
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                        <div class="texto3 row text-justify q-gutter-sm">
                          <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Modelado" class="col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Render" class="col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; max-width:30%; width:30%; border-radius: 10px;" label="Animación" class="col-3" size="md" no-caps />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>                  
              </div>
            </div>
                  <!-- .row end -->
            
                  
          </div>
          <!-- .container end -->
 
        </section> 
      </div>
    </div>

    <div class="row justify-center q-mt-xl">
      <div class="xs-hide col-sm-12 md-hide lg-hide xl-hide" style="background: #2b3035;">
       <!-- Content 02
        ====================================================== -->
        <section class="uix-spacing--m">
          <div class="uix-t-c">
            <div class="row justify-center">
              <div class="col-sm-12">
                <div class="uix-tabs uix-tabs--rotation" 
                data-rotation="true" 
                data-rotation-display="9" 
                data-rotation-radius="130" 
                data-rotation-wrapper-angle="130">
                  <div class="row justify-center">
                    <div class="col-sm-6">
                    <div class="uix-tabs__nav">
                      <ul :style="style">
                        <div>
                          <img src="../statics/Promedios/pro_med.png" style="width: 45%; height: 120px; position:relative; top:60px; left:75px; transform: rotate(231deg)">
                        </div>
                        <li class="active a" v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = true;">
                          <a href="javascript:void(0);" :style=" color9 == true ? 'background-color: #2bfdb1;' : 'background-color: #2b3035;' ">C</a>
                        </li>

                        <li v-on:click="color1 = true; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0);" :style=" color1 == true ? 'background-color: #429dff;' : 'background-color: #2b3035;' ">A-W</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = true; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;" >
                          <a href="javascript:void(0); text-whtie" :style=" color2 == true ? 'background-color: #ff4343;' : 'background-color: #2b3035;' ">E-C</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = true; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color3 == true ? 'background-color: #48ffe0;' : 'background-color: #2b3035;' ">S</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = true; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color4 == true ? 'background-color: #be43ff;' : 'background-color: #2b3035;' ">A</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = true; color6 = false; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color5 == true ? 'background-color: #ff45fb;' : 'background-color: #2b3035;' ">S</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = true; color7 = false; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color6 == true ? 'background-color: #ffad4a;' : 'background-color: #2b3035;' ">M-D</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = true; color8 = false; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color7 == true ? 'background-color: #f0c54f;' : 'background-color: #2b3035;' ">B</a>
                        </li>

                        <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = true; color9 = false;">
                          <a href="javascript:void(0); text-whtie" :style=" color8 == true ? 'background-color: #45ff45;' : 'background-color: #2b3035;' ">3-D</a>
                        </li>
                      </ul>
                    </div><!-- /.uix-tabs__nav -->
                  </div>
                  <div class="col-xs-12 col-sm-12">                   

                    <div class="q-mt-xl uix-tabs__content active">
                      <q-card-section class=" row q-mx-sm">
                        <span class="texto1 text-h4 text-weight-bold" style="color: #2bfdb1;">Consultoria</span>
                          <p class="texto3 q-mt-md text-justify" style="font-size:17px;">
                            El mundo hoy esta en un inminente cambio, por eso, es necesario
                            re-inventarnos. La innovación en los modelos de negocio actuales son la clave
                            para llevarlos y entrar en la transformación digital y dirigirlos al éxito,
                            debemos enfocar la tecnología como un facilitador entre negocios y usuarios;
                            Operar un negocio digital se ha convertido en un gran reto para las empresas
                            y más en un mundo tan cambiante como al día de hoy. 
                          </p>
                          <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Transformación Digital" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Automatización de Procesos" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Digitalización de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Optimización de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Canales de Comunicación" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Asesoria Especializada" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                      </div>
                    </div>
                    <div class="q-mt-xl q-ml uix-tabs__content">
                      <q-card-section class=" row q-mx-sm">
                        <span class="texto1 text-h4 q-mt-xl text-weight-bold" style="color: #429dff;">Api Whatsapp</span>
                        <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                          Whatsapp hoy en día es el medio de comunicación numero uno en el mundo,
                          de aquí parte el desarrollo de procesos y aplicativos integrados a este para
                          lograr diferentes objetivos a través de él.
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Puentes de comunicación" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Comunicación directa" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Integranción de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Venta Simplificada" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                    </div>
                    <div class="q-mt-xl uix-tabs__content">
                      <q-card-section class=" row q-mx-sm">
                        <span class="texto1 text-h4 text-weight-bold" style="color: #ff4343;">E-Commerce</span>
                          <p class=" text-justify texto3 q-mt-md" style="font-size:17px;">
                            El cambio que vive el mundo el día de hoy esta impulsando el comercio
                            electrónico, vemos los crecientes indices y la constante tendencia que esta
                            llevando el mercado a la compra de productos y servicios en internet, sumando
                            el alcance en ventas que se logra tener gracias a los clientes que acuden a él. 
                          </p>
                          <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Automatización de Ventas" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Aumento de Ventas" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Ventas por Conversiones" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                    </div> 
                    <div class="q-mt-xl uix-tabs__content">
                      <q-card-section class=" row q-mx-sm">
                        <span class="texto1 text-h4 text-weight-bold" style="color: #48ffe0;">Sistemas</span>
                        <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                          Los sistemas hoy en día son la fuente de la transformación digital, quienes
                          permiten desarrollar los entornos digitales que conocemos hoy en día, y nos
                          permiten alcanzar el éxito al lograr toda esta evolución con el único fin de
                          construir productos que realmente respondan a problemas y necesidades
                          globales que puedan ser innovadoras en el mercado.
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Transformación Digital" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Digitalización de Procesos" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Automatización de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Optimazación de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Arquitectura de información" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Flujo de Información" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                    </div>
                    <div class="q-mt-xl uix-tabs__content">
                      <q-card-section class=" row q-mx-sm">
                        <span class="texto1 text-h4 text-weight-bold" style="color: #be43ff;">Apps</span>
                        <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                          Las Aplicaciones móviles juegan un papel importante en nuestras vidas, hoy
                          en día pasamos gran parte de nuestro tiempo en ella y nos facilitan la vida, he
                          aquí el éxito de este modelo y el futuro en el. 
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Android" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="IOS" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Hibridas" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Nativas" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                    </div>   
                    <div class="q-mt-xl uix-tabs__content">
                      <q-card-section class=" row q-mx-sm">
                        <span class="texto1 text-h4 text-weight-bold" style="color: #ff45fb;">Servidores</span>
                        <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                          Todo proyecto digital necesita un lugar en donde vivir 
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Administración" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Monitoreo" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Cloud" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Dedicados" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Hosting" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Hosting" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                    </div>   
                    <div class="q-mt-xl uix-tabs__content">
                      <q-card-section class=" row q-mx-sm">
                        <span class="texto1 text-h4 text-weight-bold" style="color: #ffad4a;">Marketing Digital</span>
                        <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                          Las campañas de marketing digital juegan un papel importante en la
                          transformación digital, son la herramienta que nos permite llegar a neutros
                          clientes objetivos, y hacen parte del ecosistema tecnológico para lograr todas
                          nuestras metas y objetivos
                        </p>
                        <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                      </q-card-section>
                      <div class="texto3 row justify-center">
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="FacebookAdd" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="GoogleAdd" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                      </div>
                    </div>   
                      <div class="q-mt-xl uix-tabs__content">
                        <q-card-section class=" row q-mx-sm">
                          <span class="texto1 text-h4 text-weight-bold" style="color: #ffad4a;">Branding</span>
                          <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                            La forma como el mundo te ve y te percibe es decisivo
                          </p>
                          <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                        </q-card-section>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Diseño Publicitario" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Construcción de Marca" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Portafolio Grafico" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                      </div>    
                     <div class="q-mt-xl uix-tabs__content">
                        <q-card-section class=" row q-mx-sm">
                          <span class="texto1 text-h4 text-weight-bold" style="color: #45ff45;">3D</span>
                          <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                            Llegar una a impacto publicitario mas alto es la mejor opción
                          </p>
                          <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                        </q-card-section>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Modelado" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Render" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Animación" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                      </div>  
                  </div>
                  </div>
                </div>                  
              </div>
            </div>
                  <!-- .row end -->
            
                  
          </div>
          <!-- .container end -->
 
        </section> 
      </div>
    </div>

    <div class="row justify-center">
      <div class="col-xs-12 sm-hide md-hide lg-hide xl-hide" style="background: #2b3035;">
       <!-- Content 02
        ====================================================== -->
        <section class="uix-spacing--m">
          <div class="uix-t-c">
            <div class="row justify-center">
              <div class="col-xs-12">
                <div class="uix-tabs uix-tabs--rotation" 
                data-rotation="true" 
                data-rotation-display="9"
                data-rotation-radius="130" 
                data-rotation-wrapper-angle="130">
                  <div class="row justify-center q-ml-xl">
                    <div class="col-xs-10" :style="styleSelect">
                      <div class="uix-tabs__nav">
                        <ul :style="style">
                          <div>
                            <img src="../statics/Promedios/pro_med.png" style="width: 120px; height: 120px; position:relative; top:60px; left:75px; transform: rotate(231deg)">
                          </div>
                          <li class="active a" v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = true;">
                            <a href="javascript:void(0);" :style=" color9 == true ? 'background-color: #2bfdb1;' : 'background-color: #2b3035;' ">C</a>
                          </li>

                          <li v-on:click="color1 = true; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;">
                            <a href="javascript:void(0);" :style=" color1 == true ? 'background-color: #429dff;' : 'background-color: #2b3035;' ">A-W</a>
                          </li>

                          <li v-on:click="color1 = false; color2 = true; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;" >
                            <a href="javascript:void(0); text-whtie" :style=" color2 == true ? 'background-color: #ff4343;' : 'background-color: #2b3035;' ">E-C</a>
                          </li>

                          <li v-on:click="color1 = false; color2 = false; color3 = true; color4 = false; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;">
                            <a href="javascript:void(0); text-whtie" :style=" color3 == true ? 'background-color: #48ffe0;' : 'background-color: #2b3035;' ">S</a>
                          </li>

                          <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = true; color5 = false; color6 = false; color7 = false; color8 = false; color9 = false;">
                            <a href="javascript:void(0); text-whtie" :style=" color4 == true ? 'background-color: #be43ff;' : 'background-color: #2b3035;' ">A</a>
                          </li>

                          <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = true; color6 = false; color7 = false; color8 = false; color9 = false;">
                            <a href="javascript:void(0); text-whtie" :style=" color5 == true ? 'background-color: #ff45fb;' : 'background-color: #2b3035;' ">S</a>
                          </li>

                          <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = true; color7 = false; color8 = false; color9 = false;">
                            <a href="javascript:void(0); text-whtie" :style=" color6 == true ? 'background-color: #ffad4a;' : 'background-color: #2b3035;' ">M-D</a>
                          </li>

                          <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = true; color8 = false; color9 = false;">
                            <a href="javascript:void(0); text-whtie" :style=" color7 == true ? 'background-color: #f0c54f;' : 'background-color: #2b3035;' ">B</a>
                          </li>

                          <li v-on:click="color1 = false; color2 = false; color3 = false; color4 = false; color5 = false; color6 = false; color7 = false; color8 = true; color9 = false;">
                            <a href="javascript:void(0); text-whtie" :style=" color8 == true ? 'background-color: #45ff45;' : 'background-color: #2b3035;' ">3-D</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-center">
                    <div class="col-xs-12">
                      <div class="q-mt-xl uix-tabs__content active">
                        <q-card-section class=" row q-mx-sm">
                          <span class="texto1 text-h4 text-weight-bold" style="color: #2bfdb1;">Consultoria</span>
                            <p class="texto3 q-mt-md text-justify" style="font-size:17px;">
                              El mundo hoy esta en un inminente cambio, por eso, es necesario
                              re-inventarnos. La innovación en los modelos de negocio actuales son la clave
                              para llevarlos y entrar en la transformación digital y dirigirlos al éxito,
                              debemos enfocar la tecnología como un facilitador entre negocios y usuarios;
                              Operar un negocio digital se ha convertido en un gran reto para las empresas
                              y más en un mundo tan cambiante como al día de hoy. 
                            </p>
                            <span class="texto1 text-h6 text-grey-8">Nuestras habilidades</span>
                        </q-card-section>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Transformación Digital" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Automatización de Procesos" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Digitalización de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Optimización de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Canales de Comunicación" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Asesoria Especializada" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="sm" no-caps />
                        </div>
                      </div>
                      <div class="q-mt-xl q-ml uix-tabs__content">
                        <q-card-section class=" row q-mx-sm">
                          <span class="texto1 text-h4 text-weight-bold" style="color: #429dff;">Api Whatsapp</span>
                          <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                            Whatsapp hoy en día es el medio de comunicación numero uno en el mundo,
                            de aquí parte el desarrollo de procesos y aplicativos integrados a este para
                            lograr diferentes objetivos a través de él.
                          </p>
                          <span class="texto1 text-h6 text-grey-8">Nuestras habilidades</span>
                        </q-card-section>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Puentes de comunicación" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Comunicación directa" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Integranción de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Venta Simplificada" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                      </div>
                      <div class="q-mt-xl uix-tabs__content">
                        <q-card-section class=" row q-mx-sm">
                          <span class="texto1 text-h4 text-weight-bold" style="color: #ff4343;">E-Commerce</span>
                            <p class=" text-justify texto3 q-mt-md" style="font-size:17px;">
                              El cambio que vive el mundo el día de hoy esta impulsando el comercio
                              electrónico, vemos los crecientes indices y la constante tendencia que esta
                              llevando el mercado a la compra de productos y servicios en internet, sumando
                              el alcance en ventas que se logra tener gracias a los clientes que acuden a él. 
                            </p>
                            <span class="texto1 text-h6 text-grey-8">Nuestras habilidades</span>
                        </q-card-section>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Automatización de Ventas" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Aumento de Ventas" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Ventas por Conversiones" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                      </div> 
                      <div class="q-mt-xl uix-tabs__content">
                        <q-card-section class=" row q-mx-sm">
                          <span class="texto1 text-h4 text-weight-bold" style="color: #48ffe0;">Sistemas</span>
                          <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                            Los sistemas hoy en día son la fuente de la transformación digital, quienes
                            permiten desarrollar los entornos digitales que conocemos hoy en día, y nos
                            permiten alcanzar el éxito al lograr toda esta evolución con el único fin de
                            construir productos que realmente respondan a problemas y necesidades
                            globales que puedan ser innovadoras en el mercado.
                          </p>
                          <span class="texto1 text-h6 text-grey-8">Nuestras habilidades</span>
                        </q-card-section>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Transformación Digital" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Digitalización de Procesos" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Automatización de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Optimazación de Procesos" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Arquitectura de información" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Flujo de Información" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                      </div>
                      <div class="q-mt-xl uix-tabs__content">
                        <q-card-section class=" row q-mx-sm">
                          <span class="texto1 text-h4 text-weight-bold" style="color: #be43ff;">Apps</span>
                          <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                            Las Aplicaciones móviles juegan un papel importante en nuestras vidas, hoy
                            en día pasamos gran parte de nuestro tiempo en ella y nos facilitan la vida, he
                            aquí el éxito de este modelo y el futuro en el. 
                          </p>
                          <span class="texto1 text-h6 text-grey-8">Nuestras habilidades</span>
                        </q-card-section>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Android" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="IOS" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Hibridas" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Nativas" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                      </div>   
                      <div class="q-mt-xl uix-tabs__content">
                        <q-card-section class=" row q-mx-sm">
                          <span class="texto1 text-h4 text-weight-bold" style="color: #ff45fb;">Servidores</span>
                          <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                            Todo proyecto digital necesita un lugar en donde vivir 
                          </p>
                          <span class="texto1 text-h6 text-grey-8">Nuestras habilidades</span>
                        </q-card-section>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Administración" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Monitoreo" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Cloud" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Dedicados" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Hosting" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Hosting" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                      </div>   
                      <div class="q-mt-xl uix-tabs__content">
                        <q-card-section class=" row q-mx-sm">
                          <span class="texto1 text-h4 text-weight-bold" style="color: #ffad4a;">Marketing Digital</span>
                          <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                            Las campañas de marketing digital juegan un papel importante en la
                            transformación digital, son la herramienta que nos permite llegar a neutros
                            clientes objetivos, y hacen parte del ecosistema tecnológico para lograr todas
                            nuestras metas y objetivos
                          </p>
                          <span class="texto1 text-h6 text-grey-8">Nuestras habilidades</span>
                        </q-card-section>
                        <div class="texto3 row justify-center">
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="FacebookAdd" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="GoogleAdd" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                        </div>
                      </div>   
                        <div class="q-mt-xl uix-tabs__content">
                          <q-card-section class=" row q-mx-sm">
                            <span class="texto1 text-h4 text-weight-bold" style="color: #ffad4a;">Branding</span>
                            <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                              La forma como el mundo te ve y te percibe es decisivo
                            </p>
                            <span class="texto1 text-h6 text-grey-8 q-mb-md">Nuestras habilidades</span>
                          </q-card-section>
                          <div class="texto3 row justify-center">
                            <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Diseño Publicitario" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                            <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Construcción de Marca" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          </div>
                          <div class="texto3 row justify-center">
                            <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Portafolio Grafico" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          </div>
                        </div>    
                      <div class="q-mt-xl uix-tabs__content">
                          <q-card-section class=" row q-mx-sm">
                            <span class="texto1 text-h4 text-weight-bold" style="color: #45ff45;">3D</span>
                            <p class="text-justify texto3 q-mt-md" style="font-size:17px;">
                              Llegar una a impacto publicitario mas alto es la mejor opción
                            </p>
                            <span class="texto1 text-h6 text-grey-8">Nuestras habilidades</span>
                          </q-card-section>
                          <div class="texto3 row justify-center">
                            <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Modelado" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                            <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Render" class="q-mr-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          </div>
                          <div class="texto3 row justify-center">
                            <q-btn outline style="color: #fdfdfd; border-radius: 10px;" label="Animación" class="q-mr-sm q-mt-sm col-xs-5 col-sm-5 col-3" size="md" no-caps />
                          </div>
                        </div>  
                    </div>
                  </div>
                </div>                  
              </div>
            </div>
                  <!-- .row end -->
            
                  
          </div>
          <!-- .container end -->
 
        </section> 
      </div>
    </div>

  </div>
</template>

<script>
require("../../node_modules/@mdi/font/css/materialdesignicons.css");
import { Hooper, Slide, Navigation as HooperNavigation} from 'hooper';
import $ from 'jquery'
import 'hooper/dist/hooper.css';
export default {
  name: 'CarouselServicios',
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  data () {
    return {
      value: '',
      styles: '',
      slide: 1,
      color1: false,
      color2: false,
      color3: false,
      color4: false,
      color5: false,
      color6: false,
      color7: false,
      color8: false,
      color9: true,
      text:"",
      hooperSettings: {
      infiniteScroll: true,
      centerMode: false,
      autoPlay: false,
      playSpeed: 3000,
      breakpoints: {
          2400: {
              itemsToShow: 7
          },
          1800: {
              itemsToShow: 6
          },
          1500: {
              itemsToShow: 5
          },
          1100: {
              itemsToShow: 4
          },
          764: {
              itemsToShow: 2
          },
          420: {
              itemsToShow: 2
          },
          0: {
              itemsToShow: 1
          }
        }
      }  
    }
  },
  mounted(){
    $(function() {

      var $body = $(document);
      $body.bind('scroll', function() {
          // "Desactivar" el scroll horizontal
          if ($body.scrollLeft() !== 0) {
              $body.scrollLeft(0);
          }
      });

    }); 
    ( function( $ ) {
    "use strict";
    
      $( function() {
      console.log('hola')

      $( '.uix-tabs' ).each( function( id ) {
        var $this             = $( this ),
            $li               = $this.find( 'ul > li' ),
          liWidth           = $li.first().outerWidth(),
          liHeight          = $li.first().outerHeight(),
          liNum             = $li.length,
          $contentbox       = $this.find( '.uix-tabs__content' ),
          ulWidth           = $this.data( 'width' ),
          fullwidth         = $this.data( 'fullwidth' ),
          rotation          = $this.data( 'rotation' ),
          rotationRadius    = $this.data( 'rotation-radius' ),
          rotationWapperDeg = $this.data( 'rotation-wrapper-angle' ),
          rotationDisplay   = $this.data( 'rotation-display' ),
          
          
          
          tabBoxID          = id,
          isNumeric         = /^[-+]?(\d+|\d+\.\d*|\d*\.\d+)$/;
        
        if( typeof fullwidth != typeof undefined && fullwidth == 1 ) {
          $li.css( 'width', ( 100 / liNum ) + '%' );
        }
        
            
        
        if( typeof rotation === typeof undefined ) {
          rotation = false;
        }	
        
        
        if( typeof rotationWapperDeg === typeof undefined ) {
          rotationWapperDeg = 0;
        }	
        
        if( typeof rotationDisplay === typeof undefined ) {
          rotationDisplay = 5;
        }		
        
        
        
        $li.each( function( index ) {
          index = index + 1;
          $( this ).attr( 'href', 'javascript:' );
          $( this ).attr( 'data-tab', tabBoxID + '-tabs-show' + index );
        });
        $( $contentbox ).each( function( index ) {
          index = index + 1;
          $( this ).attr( 'id', tabBoxID + '-tabs-show' + index );
        });
        
        
        // Tab Rotation Effect
        if ( rotation ) {
      
          $this.find( '.uix-tabs__nav' ).css( {
            'width'      : rotationRadius * 2 + 'px'
          } );

      
          $this.find( 'ul' ).css( {
            'width'     : rotationRadius * 2 + 'px',
            'height'    : rotationRadius * 2 + 'px',
            'transform' : 'rotate('+parseFloat(rotationWapperDeg)+'deg)'
          } );

          

          //Layout components in a circle layout
          var angle           = 0,
            step            = 2 * Math.PI / rotationDisplay,
            transitionDelay = 0,
            pad             = $this.find( 'ul' ).width();


          $this.find( 'ul > li' ).each( function() { //Can'nt use arrow function here!!!
            // 'this' works differently with arrow fucntions
            var el          = $( this ),
              x           = rotationRadius * Math.cos(angle) - liWidth / 2,
              y           = rotationRadius * Math.sin(angle) - liHeight / 2;


            el.css({
              'transform'        : 'translate('+parseFloat( x )+'px,'+parseFloat( pad/2 + y )+'px)',
              'transition-delay' : transitionDelay + "s"
            })
            .find( '> a' )
            .css({
              'transform'        : 'rotate('+parseFloat(-rotationWapperDeg)+'deg)'
            });


            angle += step;
            transitionDelay += 0.15;
            
            
            
            //Click on the rotation effect
            //----------------------- begin ----------------------
            el.on( 'click', function( e ) {
              
              var increase   = Math.PI * 2 / rotationDisplay,
                n          = $( this ).index(),
                endAngle   = n % rotationDisplay * increase; 


              ( function turn() {
                if (Math.abs(endAngle - angle) > 1 / 8) {
                  var sign = endAngle > angle ? 1 : -1;
                  angle = angle + sign / 8;
                  setTimeout(turn, 20);
                } else {
                  angle = endAngle;
                }
                
                
              
                $this.find( 'ul > li' ).each( function( index ) {
                  var x2           = Math.cos( - Math.PI / 2 + index * increase - angle) * rotationRadius - liWidth / 2,
                    y2           = Math.sin( - Math.PI / 2 + index * increase - angle) * rotationRadius + liHeight;

                
                  $( this ).css({
                    'transform'        : 'translate('+parseFloat( x2 )+'px,'+parseFloat( y2 )+'px)',
                    'transition'       : 'none',
                    'transition-delay' : 0
                  })
                  .find( '> a' )
                  .css({
                    'transform'        : 'rotate('+parseFloat(-rotationWapperDeg)+'deg)'
                  });

                });

                              
              })();	
              
            });
            //----------------------- end ----------------------
            
            
          });	


          
        }
        
        
        // Tab Sliding Effext
        if ( $this.find( 'ul li:first .uix-tabs__marker' ).length == 0 ) {
          $this.find( 'ul li:first' ).prepend( '<div class="uix-tabs__marker"></div>' );
        }
        
        
        // Tab Fade Effect
        $this.on( 'click', 'li', function( e ) {
          
          var tabID = $( this ).attr( 'data-tab' ),
            index = parseFloat( $( this ).index() - 1 );
          
          
          $this.find( 'li' ).removeClass( 'active' );
          $this.find( '.uix-tabs__content' ).removeClass( 'active' );
      
          $( this ).addClass( 'active' );
          $( '#' + tabID ).addClass( 'active' );
          

          //sliding marker
          var translateX = $( this ).index() * 100,
            liHeight   = $this.find( 'ul li:first' ).outerHeight(),
            translateY = $( this ).index() * liHeight;
          
          if ( $( window ).width() <= 768 ) {
            $this.find( '.uix-tabs__marker' ).css({
              'transform'          : 'translateY( '+translateY+'px )'	
            });	
          } else {
            $this.find( '.uix-tabs__marker' ).css({
              'transform'          : 'translateX( '+translateX+'% )'	
            });	
          }

      
          
          return false;
          
          
        });
        
        // Init
        $this.find( 'ul > li.active' ).trigger( 'click' );
        
        //Active current tab
        var url    = window.location.href,
          locArr,
            loc, 
          curTab;
        
        if ( url.indexOf( '#' ) >= 0 ) {
          
          locArr = url.split( '#' );
            loc    = locArr[1];
          curTab = $( '.uix-tabs' ).find( 'ul > li:eq('+loc+')' );
          curTab.trigger( 'click' );	
        }
          
        
          
        
      });
      
      
      
      } );
      
      
  } ) ( $ );
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    }
  },
  computed: {
    styleSelect(){
      console.log('hola')
      let value = ''
      if(this.$q.screen.sm){
        value = 'left:-20px; position:absolute; font-size: 0.8em'
      } else if(this.$q.screen.width === 411){
        value = 'margin-left:-25%;'
      } else if(this.$q.screen.width === 419){
        value = 'margin-left:auto;'
      } else if(this.$q.screen.width === 424){
        value = 'margin-left:auto;'
      } else if(this.$q.screen.width === 320){
        value = 'margin-left:-38%;'
      } else if(this.$q.screen.width === 375){
        value = 'margin-left:-30%;'
      } else if(this.$q.screen.width === 414){
        value = 'margin-left:-25%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 431){
        value = 'margin-left:auto;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 438){
        value = 'margin-left:18%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 459){
        value = 'margin-left:20%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 466){
        value = 'margin-left:25%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 477){
        value = 'margin-left:25%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 459){
        value = 'margin-left:25%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 478){
        value = 'margin-left:25%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 444){
        value = 'margin-left:19%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 360){
        value = 'margin-left:-28%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 577){
        value = 'margin-left:25%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 575){
        value = 'margin-left:25%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 574){
        value = 'margin-left:20%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 573){
        value = 'margin-left:21%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 553){
        value = 'margin-left:17%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 546){
        value = 'margin-left:14%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 533){
        value = 'margin-left:15%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 513){
        value = 'margin-left:10%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 496){
        value = 'margin-left:10%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 476){
        value = 'margin-left:5%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 379){
        value = 'margin-left:-15%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 372){
        value = 'margin-left:-15%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 365){
        value = 'margin-left:-18%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 345){
        value = 'margin-left:-28%;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 589){
        value = 'margin-left:28%;'
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
        value = 'top:-50px; height: 381px; border-radius:0 0 0 50px; width: 100%; margin-left:30px;'
      }  else if(this.$q.screen.xs && this.$q.screen.width === 375){
        value = 'top:-50px; height: 380px; border-radius:0 0 0 50px; width: 90%; margin-left:45px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 414){
        value = 'top:-50px; height: 382.1px; border-radius:0 0 0 50px; width: 90%; margin-left:55px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 411){
        value = 'top:-50px; height: 380px; border-radius:0 0 0 50px; width: 90%; margin-left:55px;'
      } else if(this.$q.screen.xs && this.$q.screen.width === 493){
        value = 'top:-50px; height: 380px; border-radius:0 0 0 50px; width: 100%; margin-left:45px;'
      } else if(this.$q.screen.xs){
        value ='top:-50px; height: 380px; border-radius:0 0 0 50px; width: 100%; margin-left:30px;'
      }
      return value
    },

    style(){
      let style = ''
      if(this.$q.screen.sm){
        style = 'left:15px'
      }
      else if(this.$q.screen.sm && this.$q.screen.width <= 800){
        style = 'left:0px'
      }
      else if(this.$q.screen.width === 600){
        style = 'left:20px;'
      }else if(this.$q.screen.xs && this.$q.screen.width === 540){
         style = 'left:80px'
      }
      else if(this.$q.screen.xs && this.$q.screen.width === 360){
         style = 'left:10px'
      }
      else if(this.$q.screen.xs && this.$q.screen.width === 375){
         style = 'left:15px'
      }
      else if(this.$q.screen.xs && this.$q.screen.width === 411){
         style = 'left:30px'
      }
       else if(this.$q.screen.xs && this.$q.screen.width === 414){
         style = 'left:30px'
      }
      return style
    }
  }
}
</script>

<style>

</style>