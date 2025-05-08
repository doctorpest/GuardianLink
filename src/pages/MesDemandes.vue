<template>
  <q-page class="q-pa-md">
    <div class="text-h5 text-center text-bold q-mb-lg">Mes demandes envoyées</div>

    <div v-if="demandes.length" class="q-gutter-md">
      <q-card v-for="demande in demandes" :key="demande.id" class="bg-white" flat bordered>
        <q-card-section>
          <div class="text-subtitle1">{{ demande.nom }}</div>
          <div class="text-caption">Profession : {{ demande.profession }}</div>
          <div class="text-caption">Ville : {{ demande.ville }}</div>
          <div class="text-caption">Budget max : {{ demande.budget }} €</div>
        </q-card-section>
      </q-card>
    </div>

    <div v-else class="text-center text-grey q-mt-xl">Aucune demande envoyée pour le moment.</div>
  </q-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

type Garant = {
  id: string;
  nom: string;
  ville: string;
  profession: string;
  budget: number;
};

const demandes = ref<Garant[]>([]);

onMounted(() => {
  const stored = localStorage.getItem('demandes');
  if (stored) {
    try {
      demandes.value = JSON.parse(stored);
    } catch {
      demandes.value = [];
    }
  }
});
</script>
