<template>
  <div id="q-app">
    <router-view />
  </div>
  <!-- <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://metatags.io/">
  <meta property="twitter:title" content="Promedios Digitales">
  <meta property="twitter:description" content="Somos un equipo dedicado al crecimiento, desarrollo y optimización de los procesos en el ámbito digital, convertimos las ideas en realidad intangible para el mundo.">
  <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
 -->
</template>

<script >
export default {
  name: 'App',
  meta: {
    // meta tags
    meta: {
      description: { name: 'description', content: 'Somos un equipo dedicado al crecimiento, desarrollo y optimización de los procesos en el ámbito digital, convertimos las ideas en realidad intangible para el mundo.' },
      ogType: { property: 'og:type', content: 'website' },
      ogUrl: { property: 'og:url', content: 'http://promediosdigitales.com/#/' },
      ogTitle: { property: 'og:title', content: 'Promedios Digitales' },
      ogDescription: { property: 'og:description', content: 'Somos un equipo dedicado al crecimiento, desarrollo y optimización de los procesos en el ámbito digital, convertimos las ideas en realidad intangible para el mundo.' },
      ogImage: { property: 'og:image', content: '../statics/Promedios/pro_med.png' },
      twitterUrl: { property: 'twitter:url', content: 'http://promediosdigitales.com/#/' },
      twitterTitle: { property: 'twitter:title', content: 'Promedios Digitales' },
      twitterDescription: { property: 'twitter:description', content: 'Somos un equipo dedicado al crecimiento, desarrollo y optimización de los procesos en el ámbito digital, convertimos las ideas en realidad intangible para el mundo.' },
      twitterImage: { property: 'twitter:image', content: '../statics/Promedios/pro_med.png' }
    },
  }
}
</script>
