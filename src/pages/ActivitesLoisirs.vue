<template>
  <q-page class="q-pa-md">
    <div class="text-h5 text-center text-bold q-mb-lg">Activités proposées</div>

    <!-- Liste des activités -->
    <div class="q-gutter-md">
      <div v-for="activity in activities" :key="activity.id" class="q-card mb-3">
        <q-card-section>
          <div class="text-h6">{{ activity.title }}</div>
          <div class="text-caption">{{ activity.description }}</div>
        </q-card-section>

        <!-- Affichage de l'image -->
        <q-img :src="activity.imageUrl" alt="Activity Image" class="q-mb-md" />

        <q-card-actions align="center">
          <q-btn flat color="primary" label="Participer" @click="joinActivity(activity)" />
        </q-card-actions>
      </div>
    </div>

    <!-- Ajouter une activité -->
    <div class="text-center q-mt-lg">
      <q-btn label="Proposer une activité" color="primary" @click="openAddActivityDialog" />
    </div>

    <!-- Dialog pour proposer une nouvelle activité -->
    <q-dialog v-model="showAddActivityDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Proposer une nouvelle activité</div>
          <q-input v-model="newActivity.title" label="Titre de l'activité" />
          <q-input v-model="newActivity.description" label="Description" type="textarea" />
          <q-input v-model="newActivity.image" label="URL de l'image" />
        </q-card-section>
        <q-card-actions>
          <q-btn flat label="Annuler" @click="showAddActivityDialog = false" />
          <q-btn flat label="Ajouter" color="primary" @click="addActivity" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

// Définition d'une activité
type Activity = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageUrl: string;
};

const $q = useQuasar();

// Fonction pour charger dynamiquement l'image
const importImage = (image: string) => {
  return new URL(`../assets/images/${image}`, import.meta.url).href;
};

// Liste des activités proposées
const activities = ref<Activity[]>([
  {
    id: '1',
    title: 'Soirée Karaoké',
    description: 'Chantez vos chansons préférées lors de notre soirée karaoké.',
    image: 'karaoke.jpg',
    imageUrl: importImage('karaoke.jpg'), // Utilisation de importImage pour l'URL de l'image
  },
  {
    id: '2',
    title: 'Séance à la Salle',
    description: 'Rejoignez-nous pour une session intense de musculation.',
    image: 'gym.jpg',
    imageUrl: importImage('gym.jpg'),
  },
  {
    id: '3',
    title: 'Match de Foot',
    description: 'Participez à un match de foot amical avec des amis.',
    image: 'football.jpg',
    imageUrl: importImage('football.jpg'),
  },
  {
    id: '4',
    title: 'Partie de Padel',
    description: 'Venez défier vos amis lors d’une partie de padel.',
    image: 'paddel.jpg',
    imageUrl: importImage('paddel.jpg'),
  },
  {
    id: '5',
    title: 'Séance de Natation',
    description: 'Profitez d’une séance de natation en piscine.',
    image: 'natation.jpg',
    imageUrl: importImage('natation.jpg'),
  },
  {
    id: '6',
    title: 'Sortie à la Plage',
    description: 'Une journée de détente et de jeux à la plage.',
    image: 'beach.jpg',
    imageUrl: importImage('beach.jpg'),
  },
]);

// Nouveaux champs d'activité
const newActivity = ref({
  title: '',
  description: '',
  image: '',
});

// Dialog pour ajouter une activité
const showAddActivityDialog = ref(false);

// Fonction pour rejoindre une activité
const joinActivity = (activity: Activity) => {
  $q.notify({
    type: 'positive',
    message: `Vous avez rejoint l'activité "${activity.title}".`,
  });
};

// Fonction pour ajouter une nouvelle activité
const addActivity = () => {
  if (newActivity.value.title && newActivity.value.description && newActivity.value.image) {
    activities.value.push({
      id: `${activities.value.length + 1}`,
      title: newActivity.value.title,
      description: newActivity.value.description,
      image: newActivity.value.image,
      imageUrl: importImage(newActivity.value.image), // Ajouter l'URL de l'image pour la nouvelle activité
    });
    showAddActivityDialog.value = false; // Fermer le dialog
    $q.notify({
      type: 'positive',
      message: 'Nouvelle activité ajoutée !',
    });
  } else {
    $q.notify({
      type: 'negative',
      message: 'Veuillez remplir tous les champs.',
    });
  }
};

// Ouvrir le dialog pour ajouter une activité
const openAddActivityDialog = () => {
  showAddActivityDialog.value = true;
};
</script>
