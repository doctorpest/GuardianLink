<template>
  <q-page class="q-pa-md">
    <div class="text-h5 text-center text-bold q-mb-lg">Mes demandes reçues</div>

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

        <q-separator />

        <q-card-actions align="right">
          <q-btn color="positive" label="Accepter" @click="accepterDemande(demande.id)" />
          <q-btn color="negative" flat label="Refuser" @click="refuserDemande(demande.id)" />
        </q-card-actions>
      </q-card>
    </div>

    <div v-else class="text-center text-grey q-mt-xl">
      Aucune demande reçue pour le moment.
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

// Charger les données simulées ou depuis localStorage
onMounted(() => {
  const stored = localStorage.getItem('demandesRecues');
  let existingDemandes: Etudiant[] = [];

  if (stored) {
    try {
      existingDemandes = JSON.parse(stored);
    } catch {
      existingDemandes = [];
    }
  }

  // Simulation à ajouter
  const nouvellesDemandes: Etudiant[] = [
    {
      id: '1',
      nom: 'Sarah Ben Ali',
      ville: 'Paris',
      universite: 'Sorbonne Université',
      typeLogement: 'Studio',
      budget: 750,
    },
    {
      id: '2',
      nom: 'Mehdi Lounis',
      ville: 'Lyon',
      universite: 'Université Lyon 2',
      typeLogement: 'T2',
      budget: 680,
    },
    {
      id: '3',
      nom: 'Amina Bouzid',
      ville: 'Rennes',
      universite: 'Université de Rennes 1',
      typeLogement: 'Colocation',
      budget: 500,
    },
    {
      id: '4',
      nom: 'Youssef El Amrani',
      ville: 'Rennes',
      universite: 'Université de Rennes 2',
      typeLogement: 'Studio',
      budget: 600,
    },
    {
      id: '5',
      nom: 'Lina Khelifi',
      ville: 'Marseille',
      universite: 'Aix-Marseille Université',
      typeLogement: 'T1',
      budget: 700,
    },
  ];

  // Ajouter uniquement les nouvelles demandes non existantes
  nouvellesDemandes.forEach((nouvelle) => {
    if (!existingDemandes.find((d) => d.id === nouvelle.id)) {
      existingDemandes.push(nouvelle);
    }
  });

  demandes.value = existingDemandes;
  saveDemandes();
});

// Fonctions de gestion
function accepterDemande(id: string) {
  const accepted = demandes.value.find(d => d.id === id);
  if (!accepted) return;

  // Récupérer les anciennes demandes acceptées
  const stored = localStorage.getItem('demandesAcceptees');
  let demandesAcceptees: Etudiant[] = [];

  try {
    if (stored) {
      demandesAcceptees = JSON.parse(stored);
    }
  } catch {
    demandesAcceptees = [];
  }

  // Vérifier si la demande est déjà acceptée (par ID)
  const dejaAcceptee = demandesAcceptees.some(d => d.id === accepted.id);
  if (!dejaAcceptee) {
    demandesAcceptees.push(accepted);
    localStorage.setItem('demandesAcceptees', JSON.stringify(demandesAcceptees));
    alert('Demande acceptée ✅');
  } else {
    alert('Cette demande est déjà acceptée');
  }

  // Supprimer de la liste affichée
  demandes.value = demandes.value.filter(d => d.id !== id);
  saveDemandes();
}

function refuserDemande(id: string) {
  alert('Demande refusée ❌');
  demandes.value = demandes.value.filter((d) => d.id !== id);
  saveDemandes();
}

function saveDemandes() {
  localStorage.setItem('demandesRecues', JSON.stringify(demandes.value));
}
</script>