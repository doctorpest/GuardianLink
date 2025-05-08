<template>
  <q-page class="q-pa-md">
    <div class="text-h5 text-center text-bold q-mb-lg">Tous les garants disponibles</div>

    <div class="row q-col-gutter-md">
      <q-card
        v-for="garant in garants"
        :key="garant.id"
        class="col-12 col-sm-6 col-md-4 bg-white"
        flat
        bordered
      >
        <q-card-section>
          <div class="text-subtitle1">{{ garant.nom }}</div>
          <div class="text-caption">Profession : {{ garant.profession }}</div>
          <div class="text-caption">Ville : {{ garant.ville }}</div>
          <div class="text-caption">Budget max : {{ garant.budget }} €</div>
        </q-card-section>
        <q-card-actions align="between">
          <q-btn flat round icon="close" color="red" @click="rejeterGarant(garant.id)" />
          <q-btn flat label="Voir profil" color="primary" @click="voirProfil(garant)" />
          <q-btn flat round icon="check" color="green" @click="accepterGarant(garant)" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

type Garant = {
  id: string;
  nom: string;
  ville: string;
  profession: string;
  budget: number;
};

const $q = useQuasar();
const garants = ref<Garant[]>([
  { id: '1', nom: 'Jean Dupont', ville: 'Paris', profession: 'Avocat', budget: 800 },
  { id: '2', nom: 'Claire Leroy', ville: 'Lyon', profession: 'Infirmière', budget: 750 },
  { id: '3', nom: 'Michel Martin', ville: 'Marseille', profession: 'Ingénieur', budget: 900 },
  { id: '4', nom: 'Sophie Dubois', ville: 'Toulouse', profession: 'Professeur', budget: 700 },
  { id: '5', nom: 'Pierre Lefevre', ville: 'Nice', profession: 'Médecin', budget: 950 },
  { id: '6', nom: 'Lucie Bernard', ville: 'Rennes', profession: 'Architecte', budget: 850 },
  { id: '7', nom: 'Julien Moreau', ville: 'Rennes', profession: 'Designer', budget: 800 },
  { id: '8', nom: 'Emma Brooke', ville: 'Rennes', profession: 'Journaliste', budget: 700 },
  { id: '9', nom: 'Antoine Garnier', ville: 'Rennes', profession: 'Développeur', budget: 900 },
  { id: '10', nom: 'Sabrina Quesada', ville: 'Rennes', profession: 'Photographe', budget: 750 },
]);

function voirProfil(garant: Garant) {
  $q.dialog({
    title: `Profil de ${garant.nom}`,
    message: `
      Profession : ${garant.profession}
      Ville : ${garant.ville}
      Budget max : ${garant.budget}€
    `,
    ok: 'Fermer',
  });
}

function rejeterGarant(id: string) {
  garants.value = garants.value.filter((g) => g.id !== id);
}

function accepterGarant(garant: Garant) {
  // Simulation de notification + ajout dans localStorage
  const stored = localStorage.getItem('demandes') || '[]';
  const demandes = JSON.parse(stored);
  demandes.push(garant);
  localStorage.setItem('demandes', JSON.stringify(demandes));

  $q.notify({
    type: 'positive',
    message: `Notification envoyée à ${garant.nom} !`,
    caption: `Une demande a été envoyée à ${garant.profession} de ${garant.ville}.`,
    timeout: 3000,
  });

  garants.value = garants.value.filter((g) => g.id !== garant.id);
}
</script>
