<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 1000px; margin: 0 auto">
      <!-- Carte avec fond turquoise -->
      <q-card bordered class="bg-turquoise text-white shadow-5 custom-card">
        <q-card-section class="text-center">
          <div class="text-h4">S'inscrire</div>
        </q-card-section>

        <!-- Formulaire d'inscription -->
        <q-card-section class="q-pa-md">
          <q-input
            v-model="email"
            label="Email"
            outlined
            dense
            class="q-mb-lg"
            :rules="[(val) => (val && val.length > 0) || 'Ce champ est requis']"
          />
          <q-input
            v-model="username"
            label="Nom d'utilisateur"
            outlined
            dense
            class="q-mb-lg"
            :rules="[(val) => (val && val.length > 0) || 'Ce champ est requis']"
          />
          <q-input
            v-model="password"
            label="Mot de passe"
            outlined
            dense
            type="password"
            class="q-mb-lg"
            :rules="[
              (val) =>
                (val && val.length >= 6) || 'Le mot de passe doit avoir au moins 6 caractères',
            ]"
          />
          <q-input
            v-model="confirmPassword"
            label="Confirmer le mot de passe"
            outlined
            dense
            type="password"
            class="q-mb-lg"
            :rules="[(val) => val === password || 'Les mots de passe doivent correspondre']"
          />

          <!-- Choix du type d'utilisateur (Etudiant ou Garant) -->
          <q-checkbox
            v-model="isStudent"
            label="Je suis un étudiant"
            class="q-mb-lg"
            color="primary"
            :true-value="true"
            :false-value="false"
          />
          <q-checkbox
            v-model="isGarant"
            label="Je suis un garant"
            class="q-mb-lg"
            color="primary"
            :true-value="true"
            :false-value="false"
          />
        </q-card-section>

        <!-- Actions -->
        <q-card-actions class="q-pa-md">
          <q-btn label="S'inscrire" color="black" @click="register" class="full-width custom-btn" />
        </q-card-actions>

        <!-- Lien pour redirection vers la connexion si déjà un compte -->
        <q-card-section class="text-center text-black">
          <div>
            Déjà un compte ?
            <q-btn flat label="Se connecter" @click="redirectToLogin" class="q-ml-xs" />
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
      username: '',
      password: '',
      confirmPassword: '',
      isStudent: false, // Valeur par défaut pour l'étudiant
      isGarant: false, // Valeur par défaut pour le garant
    };
  },
  methods: {
    register() {
      if (this.email && this.username && this.password && this.confirmPassword) {
        if (this.password === this.confirmPassword) {
          // Logique d'inscription
          console.log(
            'Inscription avec:',
            this.email,
            this.username,
            this.password,
            this.isStudent,
            this.isGarant,
          );
        } else {
          console.error('Les mots de passe ne correspondent pas.');
        }
      } else {
        console.error('Tous les champs doivent être remplis.');
      }
    },
    redirectToLogin() {
      this.$router.push('/login'); // Rediriger vers la page de connexion
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

/* Style de la carte agrandie */
.custom-card {
  border-radius: 16px; /* Coins arrondis pour la carte */
  width: 120%; /* Prendre 100% de la largeur définie dans le parent */
  max-width: 1000px; /* Limiter la taille à 1000px */
  min-height: 600px; /* Augmenter la hauteur de la carte */
  padding: 30px; /* Ajouter un peu de padding autour du contenu */
}

/* Style des champs d'entrée (Input) */
.q-input {
  background-color: white; /* Fond blanc pour les champs */
  color: black; /* Texte noir */
  border-radius: 8px; /* Coins arrondis */
  padding: 10px;
}

/* Style du bouton principal */
.custom-btn {
  border-radius: 8px; /* Coins arrondis pour le bouton */
  background-color: black; /* Fond noir */
  color: white; /* Texte blanc sur le bouton */
  font-weight: bold;
}

/* Style du bouton pour redirection vers la page de connexion */
.q-btn.flat {
  color: black;
  font-weight: normal;
}

/* Marges et espacements pour une meilleure présentation */
.q-mb-lg {
  margin-bottom: 20px !important; /* Espace entre les champs */
}

.q-pa-md {
  padding: 20px; /* Ajuster les espacements de la card */
}
</style>
