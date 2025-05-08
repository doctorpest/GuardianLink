<template>
  <q-layout view="hHh lpR fFf">
    <!-- HEADER -->
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <!-- LOGO -->
        <q-toolbar-title class="text-h6">GuardianLink</q-toolbar-title>

        <q-space />

        <!-- LIENS NAVIGATION GARANT -->
        <q-btn flat label="Dashboard" to="/dashboard-garant" />
        <q-btn flat label="Demandes reçues" to="/dashboard-garant/demandes" />
        <q-btn flat label="Demandes acceptées" to="/dashboard-garant/demandes-acceptees" />
        <q-btn flat label="Documents" to="/dashboard-garant/documents" />
        <q-btn flat label="Espace loisirs" to="/dashboard-garant/loisirs" />
        <!--<q-btn flat label="Profil" to="/dashboard-garant/profil" />-->

        <!-- BOUTON DECONNEXION -->
        <q-btn
          flat
          icon="logout"
          @click="logout"
        />
      </q-toolbar>
    </q-header>

    <!-- CONTENU -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = async () => {
  localStorage.removeItem('token');
  await router.push('/login');
};
</script>

<style scoped>
.q-header {
  z-index: 10;
}
</style>