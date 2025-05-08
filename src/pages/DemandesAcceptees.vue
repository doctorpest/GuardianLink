<template>
  <q-page class="q-pa-md">
    <div class="text-h5 text-center text-bold q-mb-lg">Demandes acceptées</div>

    <div v-if="demandes.length" class="q-gutter-md">
      <q-card
        v-for="demande in demandes"
        :key="demande.id"
        class="bg-white"
        flat
        bordered
      >
        <q-card-section>
          <div class="text-subtitle1">{{ demande.nom }}</div>
          <div class="text-caption">Université : {{ demande.universite }}</div>
          <div class="text-caption">Ville : {{ demande.ville }}</div>
          <div class="text-caption">Logement souhaité : {{ demande.typeLogement }}</div>
          <div class="text-caption">Budget mensuel : {{ demande.budget }} €</div>
        </q-card-section>
      </q-card>
    </div>

    <div v-else class="text-center text-grey q-mt-xl">
      Aucune demande acceptée pour le moment.
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

type Etudiant = {
  id: string;
  nom: string;
  ville: string;
  universite: string;
  typeLogement: string;
  budget: number;
};

const demandes = ref<Etudiant[]>([]);

onMounted(() => {
  const stored = localStorage.getItem('demandesAcceptees');
  if (stored) {
    try {
      demandes.value = JSON.parse(stored);
    } catch {
      demandes.value = [];
    }
  }
});
</script>