<template>
  <q-page class="faq-page">
    <div class="faq-container">
      <h2 class="text-center text-black q-mb-lg">❓ Foire Aux Questions</h2>

      <q-list bordered class="faq-list">
        <q-expansion-item
          v-for="(faq, index) in faqs"
          :key="index"
          expand-separator
          :label="faq.question"
          class="faq-item"
        >
          <q-card class="faq-card">
            <q-card-section class="faq-answer">
              {{ faq.answer }}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const faqs = ref([
  {
    question: 'Comment fonctionne GuardianLink ?',
    answer:
      'Notre plateforme met en relation des étudiants avec des garants potentiels en toute sécurité.',
  },
  {
    question: 'Quels documents sont nécessaires ?',
    answer: 'Vous devrez fournir des pièces justificatives pour garantir la fiabilité des profils.',
  },
  {
    question: 'GuardianLink est-il sécurisé ?',
    answer:
      'Oui, nous mettons en place des protocoles de sécurité avancés pour protéger vos informations.',
  },
]);
</script>

<style scoped>
.faq-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: white;
}

.faq-container {
  max-width: 700px;
  width: 90%;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.faq-item {
  border-bottom: 1px solid #e0e0e0;
}

.faq-card {
  background: #12b5a6;
  border-left: 4px solid #0e8f83;
  transition: 0.3s ease-in-out;
}

.faq-answer {
  color: black;
}
</style>
