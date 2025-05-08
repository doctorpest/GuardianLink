<template>
  <q-page class="q-pa-md">
    <div class="text-h4 text-center text-weight-bold q-mb-lg text-dark">
      Bienvenue sur votre tableau de bord garant
    </div>

    <q-card class="q-pa-lg shadow-4" style="background-color: #f0f4ff">
      <div class="q-gutter-md q-mb-md row items-stretch justify-around">
        <!-- Bouton : Demandes reçues -->
        <q-btn
          label="Demandes reçues"
          icon="inbox"
          color="primary"
          to="/dashboard-garant/demandes"
          class="q-pa-lg"
          style="min-width: 250px"
          unelevated
        />

        <!-- Bouton : Demandes acceptées -->
        <q-btn
          label="Demandes acceptées"
          icon="check_circle"
          color="positive"
          to="/dashboard-garant/demandes-acceptees"
          class="q-pa-lg"
          style="min-width: 250px"
          unelevated
        />

        <!-- Bouton : Transférer des documents -->
        <q-btn
          label="Transférer des documents"
          icon="attach_file"
          color="secondary"
          to="/dashboard-garant/documents"
          class="q-pa-lg"
          style="min-width: 250px"
          unelevated
        />

        <!-- Bouton : Espace loisirs -->
        <q-btn
          label="Espace loisirs"
          icon="emoji_events"
          color="deep-purple"
          to="/dashboard-garant/loisirs"
          class="q-pa-lg"
          style="min-width: 250px"
          unelevated
        />


      </div>
    </q-card>
  </q-page>
</template>

<script lang="ts" setup>
// Pas de logique ici pour l’instant
</script>

<style scoped>
.text-dark {
  color: #0d1b1e;
}
</style>