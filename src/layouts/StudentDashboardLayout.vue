<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title class="text-h6">GuardianLink</q-toolbar-title>

        <q-space />

        <q-btn flat label="Dashboard" to="/dashboard-etudiant" />
        <q-btn flat label="Je cherche un garant" to="/dahsboard-etudiant/match" />
        <q-btn flat label="Tous les garants" to="/dashboard-etudiant/garants" />
        <q-btn flat label="Loisirs" to="/dashboard-etudiant/loisirs" />
        <q-btn flat label="Mes demandes" to="/dashboard-etudiant/mes-demandes" />

        <!-- BOUTON DECONNEXION DIRECT -->
        <q-btn
          flat
          icon="logout"
          @click="logout"
        />
      </q-toolbar>
    </q-header>

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