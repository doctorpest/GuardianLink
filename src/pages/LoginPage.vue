<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 600px; margin: 0 auto">
      <!-- Carte avec fond turquoise -->
      <q-card bordered class="bg-turquoise text-white shadow-5">
        <q-card-section class="text-center">
          <div class="text-h5">Se connecter</div>
        </q-card-section>

        <!-- Formulaire de connexion -->
        <q-card-section>
          <q-input
            v-model="email"
            label="Email"
            outlined
            dense
            class="q-mb-md"
            :rules="[(val) => (val && val.length > 0) || 'Ce champ est requis']"
          />
          <q-input
            v-model="password"
            label="Mot de passe"
            outlined
            dense
            type="password"
            class="q-mb-md"
            :rules="[
              (val) =>
                (val && val.length >= 6) || 'Le mot de passe doit avoir au moins 6 caractères',
            ]"
          />
        </q-card-section>

        <!-- Actions -->
        <q-card-actions>
          <q-btn label="Se connecter" color="black" @click="login" class="full-width" />
        </q-card-actions>

        <!-- Lien pour inscription si pas encore de compte -->
        <q-card-section class="text-center text-black">
          <div>
            Pas encore de compte ?
            <q-btn flat label="S'inscrire" @click="redirectToRegister" class="q-ml-xs" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Logique de connexion
      console.log('Connexion avec:', this.email, this.password);
    },
    redirectToRegister() {
      this.$router.push('/register'); // Rediriger vers la page d'inscription
    },
  },
};
</script>

<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.bg-turquoise {
  background-color: #12b5a6; /* turquoise */
}

/* Style de la carte */
.q-card {
  border-radius: 12px; /* Arrondir les coins de la carte */
  width: 100%; /* Prendre 100% de la largeur définie dans le parent */
  max-width: 900px; /* Limiter la taille à 600px */
  min-height: 400px; /* Augmenter la hauteur de la carte */
  padding: 20px; /* Ajouter un peu de padding autour du contenu */
}

/* Style des champs d'entrée (Input) */
.q-input {
  background-color: white; /* Fond blanc pour les champs */
  color: black; /* Texte noir */
  border-radius: 8px; /* Coins arrondis */
  padding: 10px;
}

/* Style du bouton principal */
.q-btn {
  border-radius: 8px; /* Arrondir les coins du bouton */
}

.q-btn.black {
  background-color: black; /* Bouton noir */
  color: white; /* Texte blanc sur le bouton */
}
</style>
