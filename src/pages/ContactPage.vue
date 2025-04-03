<template>
  <q-page class="contact-page">
    <div class="contact-container">
      <h2 class="text-center text-black">📩 Contactez-nous</h2>

      <q-form class="contact-form">
        <q-input v-model="name" label="Votre nom" filled class="custom-input" />
        <q-input v-model="email" label="Votre email" type="email" filled class="custom-input" />
        <q-input
          v-model="message"
          label="Votre message"
          type="textarea"
          filled
          class="custom-input"
        />

        <q-btn label="Envoyer" class="contact-btn" @click="sendMessage" />
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const sendMessage = () => {
  if (name.value && email.value && message.value) {
    alert('Message envoyé avec succès !');
  } else {
    alert('Veuillez remplir tous les champs.');
  }
};
</script>

<style scoped>
.contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: white;
}

.contact-container {
  max-width: 600px;
  width: 90%;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.custom-input {
  background: #12b5a6;
  border-radius: 8px;
  color: black;
}

.custom-input:focus-within {
  background: white;
  box-shadow: 0 0 10px rgba(18, 181, 166, 0.5);
}

.contact-btn {
  background: black;
  color: white;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
}

.contact-btn:hover {
  transform: scale(1.05);
  background: #333;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>
