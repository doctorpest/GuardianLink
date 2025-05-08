<template>
  <q-page class="q-pa-md">
    <div class="text-h4 text-center text-weight-bold q-mb-lg text-dark">
      Bienvenue sur votre tableau de bord étudiant
    </div>

    <q-card class="q-pa-lg shadow-4" style="background-color: #e0f7f5">
      <div class="q-gutter-md q-mb-md row items-stretch justify-around">
        <!-- Bouton : Chercher un garant -->
        <q-btn
          label="Chercher un garant"
          icon="search"
          color="primary"
          to="/dahsboard-etudiant/match"
          class="q-pa-lg"
          style="min-width: 250px"
          unelevated
        />

        <!-- Bouton : Voir tous les garants -->
        <q-btn
          label="Tous les garants"
          icon="group"
          color="secondary"
          to="/dashboard-etudiant/garants"
          class="q-pa-lg"
          style="min-width: 250px"
          unelevated
        />
        <!-- Bouton : Mes demandes -->
        <q-btn
          label="Mes demandes"
          icon="assignment"
          color="accent"
          to="/dashboard-etudiant/mes-demandes"
          class="q-pa-lg"
          style="min-width: 250px"
          unelevated
        />

        <!-- Bouton : Loisirs / Club -->
        <q-btn
          label="Espace loisirs"
          icon="sports_esports"
          color="deep-purple"
          to="/dashboard-etudiant/loisirs"
          class="q-pa-lg"
          style="min-width: 250px"
          unelevated
        />

        <!-- Bouton : Transférer des documents -->
        <q-btn
          label="Transférer des documents"
          icon="attach_file"
          color="dark"
          to="/dashboard-etudiant/docuemnts"
          class="q-pa-lg"
          style="min-width: 250px"
          unelevated
        />
      </div>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
// Pas de logique nécessaire ici pour l’instant
</script>

<style scoped>
.text-dark {
  color: #0d1b1e;
}
</style>
