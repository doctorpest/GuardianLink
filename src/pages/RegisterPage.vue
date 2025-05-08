<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 1000px; margin: 0 auto">
      <q-card bordered class="bg-turquoise text-white shadow-5 custom-card">
        <q-card-section class="text-center">
          <div class="text-h4">S'inscrire</div>
        </q-card-section>

        <q-card-section class="q-pa-md">
          <q-input
            v-model="email"
            label="Email"
            outlined
            dense
            class="q-mb-lg"
            :rules="[(val) => !!val || 'Ce champ est requis']"
          />
          <q-input
            v-model="username"
            label="Nom d'utilisateur"
            outlined
            dense
            class="q-mb-lg"
            :rules="[(val) => !!val || 'Ce champ est requis']"
          />
          <q-input
            v-model="password"
            label="Mot de passe"
            type="password"
            outlined
            dense
            class="q-mb-lg"
            :rules="[(val) => val.length >= 6 || 'Au moins 6 caractères']"
          />
          <q-input
            v-model="confirmPassword"
            label="Confirmer le mot de passe"
            type="password"
            outlined
            dense
            class="q-mb-lg"
            :rules="[(val) => val === password || 'Les mots de passe doivent correspondre']"
          />

          <q-checkbox
            v-model="isStudent"
            label="Je suis un étudiant"
            class="q-mb-lg"
            color="primary"
            @update:model-value="
              (val) => {
                if (val) isGarant = false;
              }
            "
          />
          <q-checkbox
            v-model="isGarant"
            label="Je suis un garant"
            class="q-mb-lg"
            color="primary"
            @update:model-value="
              (val) => {
                if (val) isStudent = false;
              }
            "
          />
        </q-card-section>

        <q-card-actions class="q-pa-md">
          <q-btn label="S'inscrire" color="black" @click="register" class="full-width custom-btn" />
        </q-card-actions>

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

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const email = ref('');
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const isStudent = ref(false);
const isGarant = ref(false);
const router = useRouter();

const register = async () => {
  try {
    if (!email.value || !username.value || !password.value || !confirmPassword.value) {
      console.error('Tous les champs doivent être remplis.');
      return;
    }

    if (password.value !== confirmPassword.value) {
      console.error('Les mots de passe ne correspondent pas.');
      return;
    }

    if (isStudent.value && isGarant.value) {
      console.error('Veuillez choisir un seul rôle.');
      return;
    }

    const role = isStudent.value ? 'etudiant' : isGarant.value ? 'garant' : null;
    if (!role) {
      console.error('Veuillez sélectionner un rôle.');
      return;
    }

    await axios.post('http://localhost:5050/api/users/register', {
      email: email.value,
      name: username.value,
      password: password.value,
      role: role,
    });

    await router.push('/login');
  } catch (err) {
    const error = err as { response?: { data?: { message?: string } } };
    console.error(
      'Erreur lors de l’inscription:',
      error.response?.data?.message || 'Une erreur inconnue est survenue',
    );
  }
};

const redirectToLogin = async () => {
  await router.push('/login');
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
  background-color: #12b5a6;
}

.custom-card {
  border-radius: 16px;
  width: 120%;
  max-width: 1000px;
  min-height: 600px;
  padding: 30px;
}

.q-input {
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 10px;
}

.custom-btn {
  border-radius: 8px;
  background-color: black;
  color: white;
  font-weight: bold;
}

.q-btn.flat {
  color: black;
  font-weight: normal;
}

.q-mb-lg {
  margin-bottom: 20px !important;
}

.q-pa-md {
  padding: 20px;
}
</style>
