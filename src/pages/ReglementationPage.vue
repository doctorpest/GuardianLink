<template>
  <q-page class="reglementation-page">
    <h1>Lois et Réglementation</h1>
    <p>
      Découvrez toutes les règles et lois qui encadrent notre service de mise en relation entre
      étudiants et garants.
    </p>

    <div class="reglementation-content">
      <q-card class="regle-card">
        <q-card-section>
          <h4>📜 Conditions pour être garant</h4>
          <p>
            Un garant doit être une personne majeure avec des revenus stables. Il doit fournir des
            justificatifs prouvant sa solvabilité.
          </p>
        </q-card-section>
      </q-card>

      <q-card class="regle-card">
        <q-card-section>
          <h4>🏡 Obligations des étudiants</h4>
          <p>
            Les étudiants doivent respecter les engagements contractuels avec leur garant et leur
            bailleur. Tout manquement peut entraîner des sanctions.
          </p>
        </q-card-section>
      </q-card>

      <q-card class="regle-card">
        <q-card-section>
          <h4>⚖️ Lois en vigueur</h4>
          <p>
            Notre service respecte la loi sur la garantie locative en France. Les transactions sont
            encadrées par le Code civil et le droit du logement.
          </p>
        </q-card-section>
      </q-card>
    </div>

    <q-btn color="primary" label="Retour à l'accueil" to="/" class="retour-btn" />
  </q-page>
</template>

<style scoped>
.reglementation-page {
  text-align: center;
  padding: 50px 20px;
}

.reglementation-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
}

.regle-card {
  width: 350px;
  padding: 20px;
  text-align: left;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.retour-btn {
  margin-top: 30px;
}
</style>
