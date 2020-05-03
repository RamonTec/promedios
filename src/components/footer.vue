<style lang="scss">
.img_group{
  background-image: radial-gradient(
      rgba(0, 0, 0, 0.329),
      rgba(0, 0, 0, 0.5)
    ),
  url("../statics/pro/Group9.jpeg");
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

</style>
<template>
  <div>

    <div class="xs-hide bg-negative row justify-center q-mt-xl">
      <div class="text-center">
        <q-card-section class="col-gutter-xs col-xs-12 col-sm-12 col-md-2 q-mt-sm q-mb-sm">
          <img src="../statics/pro/logo.png" class="" style="height: 60px;"/>
        </q-card-section>
      </div>
      <q-separator style="width:2px; height:25px; margin-top:40px;" class="xs-hide" color="white" vertical inset />
      <div>
        <q-card-section class="texto3 text-center text-h6 col-gutter-xs col-xs-12 col-sm-12 col-md-3 q-mb-md" style="margin-top:20px;">
          2020 Todos los derechos reservados.
        </q-card-section>
      </div>
    </div>

    <div class="sm-hide md-hide lg-hide xl-hide bg-negative row justify-center q-mt-xl">
      <div class="text-center">
        <q-card-section class="col-xs-12 col-sm-12 col-md-2 q-mt-sm">
          <img src="../statics/pro/logo.png" class="" style="height: 40px;"/>
        </q-card-section>
        <q-card-section class="texto3 text-center col-xs-12 col-sm-12 col-md-3" style="margin-top:-20px; font-size:16px;">
          2020. Todos los derechos reservados.
        </q-card-section>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style>

</style>