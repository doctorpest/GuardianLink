<template>
  <q-page class="info-page">
    <!-- Titre centré et stylisé -->
    <div class="text-center title">
      <h1 class="text-h3 text-bold">Pourquoi devenir garant sur GuardianLink ?</h1>
      <p class="text-subtitle2 text-dark">
        En tant que garant, aidez un étudiant à trouver un logement.
      </p>
    </div>

    <!-- Bouton centré et stylisé -->
    <div class="text-center">
      <q-btn color="black" label="S'inscrire" to="/register" class="custom-btn" />
    </div>
  </q-page>
</template>

<script lang="ts">
export default {
  name: 'InfoPage',
};
</script>

<style scoped>
/* Style de la page pour centrer tout le contenu */
.info-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh; /* Remplir toute la hauteur de l'écran */
  padding: 20px;
}

/* Style du titre */
.title h1 {
  font-size: 2.5rem; /* Taille du titre */
  color: #12b5a6; /* Couleur turquoise pour rester dans le thème de l'application */
  margin-bottom: 10px;
}

.title p {
  font-size: 1.1rem;
  color: #333; /* Gris sombre pour le texte */
  margin-bottom: 20px;
}

/* Style du bouton personnalisé */
.custom-btn {
  border-radius: 8px; /* Coins arrondis */
  background-color: black; /* Fond noir pour le bouton */
  color: white; /* Texte blanc sur le bouton */
  font-weight: bold;
  padding: 10px 20px; /* Plus de padding pour un bouton plus grand */
  font-size: 1rem; /* Taille du texte du bouton */
  width: 200px; /* Largeur du bouton */
  margin-top: 20px;
}

/* Ajouter une légère ombre au bouton pour l'accentuer */
.custom-btn:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
