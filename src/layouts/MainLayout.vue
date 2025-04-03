<template>
  <q-layout view="hHh lpR fFf">
    <!-- HEADER -->
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>GuardianLink</q-toolbar-title>
        <q-space />
        <q-btn flat label="Accueil" to="/" />
        <!-- <q-btn flat label="Fonctionnalités" @click="scrollTo('features')" />-->
        <!-- <q-btn flat label="Témoignages" @click="scrollTo('testimonials')" />-->
        <q-btn flat label="Réglementation" to="/reglementation" />
        <q-btn flat label="FAQ" to="/faq" />
        <q-btn flat label="Contact" to="/contact" />
        <q-btn flat label="Connexion / Inscription" :to="{ path: '/login' }" />
      </q-toolbar>
    </q-header>

    <!-- CONTENU PRINCIPAL -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
export default {
  methods: {
    scrollTo(sectionId: string) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>
