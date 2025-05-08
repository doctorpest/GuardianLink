<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 600px; margin: 0 auto">
      <q-card bordered class="bg-turquoise text-white shadow-5">
        <q-card-section class="text-center">
          <div class="text-h5">Se connecter</div>
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="email"
            label="Email"
            outlined
            dense
            class="q-mb-md"
            :rules="[(val: string) => !!val || 'Ce champ est requis']"
          />
          <q-input
            v-model="password"
            label="Mot de passe"
            type="password"
            outlined
            dense
            class="q-mb-md"
            :rules="[(val: string) => val.length >= 6 || 'Au moins 6 caractères']"
          />
        </q-card-section>

        <q-card-actions>
          <q-btn label="Se connecter" color="black" @click="handleLogin" class="full-width" />
        </q-card-actions>

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

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5050/api',
});

const router = useRouter();

const email = ref('');
const password = ref('');

const handleLogin = async () => {
  try {
    const response = await api.post('/users/login', {
      email: email.value,
      password: password.value,
    });

    const token = response.data.token;
    const role = response.data.role;

    localStorage.setItem('token', token);
    localStorage.setItem('role', role); // facultatif

    if (role === 'etudiant') {
      await router.push('/dashboard-etudiant');
    } else if (role === 'garant') {
      await router.push('/dashboard-garant');
    } else {
      console.warn('Rôle inconnu, redirection par défaut');
      await router.push('/');
    }
  } catch (err: unknown) {
    const error = err as { response?: { data?: { message?: string } } };
    console.error(
      'Erreur lors de la connexion:',
      error.response?.data?.message || 'Une erreur inconnue est survenue',
    );
  }
};

const redirectToRegister = async () => {
  await router.push('/register');
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

.q-card {
  border-radius: 12px;
  width: 100%;
  max-width: 900px;
  min-height: 400px;
  padding: 20px;
}

.q-input {
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 10px;
}

.q-btn {
  border-radius: 8px;
}

.q-btn.black {
  background-color: black;
  color: white;
}
</style>
