<template>
  <q-page class="q-pa-md">
    <div class="text-h5 text-center text-bold q-mb-lg">Transférer un document</div>

    <!-- Formulaire de transfert de document -->
    <q-form @submit.prevent="uploadDocument" class="q-gutter-md">
      <q-input v-model="documentTitle" label="Nom du document" dense outlined required />

      <!-- Sélection du fichier -->
      <q-file
        v-model="documentFile"
        label="Choisir un fichier"
        dense
        outlined
        accept="application/pdf, .doc, .docx, .jpg, .png"
        required
      />

      <!-- Bouton plus modeste -->
      <q-btn
        type="submit"
        label="Télécharger"
        color="primary"
        class="q-mt-md"
        unelevated
        size="md"
        no-caps
      />
    </q-form>

    <!-- Liste des documents transférés -->
    <div class="q-mt-xl">
      <div class="text-h6 q-mb-md">Documents transférés</div>

      <template v-if="documents.length">
        <q-card
          v-for="(doc, index) in documents"
          :key="index"
          class="q-mb-sm"
          flat
          bordered
        >
          <q-card-section>
            <div class="text-subtitle2">{{ doc.title }}</div>
            <div class="text-caption text-grey">{{ doc.filename }}</div>
          </q-card-section>
        </q-card>
      </template>

      <div v-else class="text-grey text-center">Aucun document transféré pour le moment.</div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const documentTitle = ref('');
const documentFile = ref<File | null>(null);

type Document = {
  title: string;
  filename: string;
};

const documents = ref<Document[]>([]);

onMounted(() => {
  const stored = localStorage.getItem('uploadedDocuments');
  if (stored) {
    try {
      documents.value = JSON.parse(stored);
    } catch {
      documents.value = [];
    }
  }
});

const uploadDocument = () => {
  if (documentTitle.value && documentFile.value) {
    const newDoc: Document = {
      title: documentTitle.value,
      filename: documentFile.value.name,
    };

    documents.value.push(newDoc);
    localStorage.setItem('uploadedDocuments', JSON.stringify(documents.value));

    $q.notify({
      type: 'positive',
      message: `Le document "${newDoc.title}" a été transféré avec succès.`,
    });

    documentTitle.value = '';
    documentFile.value = null;
  } else {
    $q.notify({
      type: 'negative',
      message: 'Veuillez remplir tous les champs.',
    });
  }
};
</script>