<template>
  <q-page class="home-page">
    <!-- HERO SECTION -->
    <div class="hero-section">
      <h1 class="animate-fade">Trouvez un garant en toute simplicité et sécurité</h1>
      <p class="animate-fade">
        Une plateforme dédiée aux étudiants et aux garants pour simplifier l’accès au logement.
      </p>
      <div class="buttons">
        <q-btn
          unelevated
          color="white"
          text-color="black"
          label="Je suis étudiant"
          class="animate-slide"
          to="/etudiant"
        />
        <q-btn
          unelevated
          color="dark"
          label="Je veux être garant"
          class="animate-slide"
          to="/garant"
        />
      </div>
    </div>

    <!-- SECTION FONCTIONNALITÉS -->
    <div class="features" id="features">
      <h2>Nos Fonctionnalités</h2>
      <div class="features-grid">
        <q-card class="feature-card animate-hover">
          <q-card-section>
            <span class="emoji">🔍</span>
            <h4>Mise en relation rapide</h4>
            <p>Accédez à un garant en quelques clics.</p>
          </q-card-section>
        </q-card>

        <q-card class="feature-card animate-hover">
          <q-card-section>
            <span class="emoji">🛡️</span>
            <h4>Sécurisé & Fiable</h4>
            <p>Profils vérifiés et transactions sécurisées.</p>
          </q-card-section>
        </q-card>

        <q-card class="feature-card animate-hover">
          <q-card-section>
            <span class="emoji">💬</span>
            <h4>Une communauté engagée</h4>
            <p>Échangez et connectez-vous avec des personnes de confiance.</p>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- SECTION TÉMOIGNAGES -->
    <div class="testimonials" id="testimonials">
      <h2>Témoignages</h2>
      <div class="testimonial-grid">
        <q-card class="testimonial-card animate-hover">
          <q-card-section>
            <p>
              "GuardianLink m'a permis de trouver un garant en quelques jours seulement !" - Sophie,
              étudiante
            </p>
          </q-card-section>
        </q-card>

        <q-card class="testimonial-card animate-hover">
          <q-card-section>
            <p>
              "Grâce à cette plateforme, j'aide un étudiant chaque année. C'est simple et sécurisé."
              - Jean, garant
            </p>
          </q-card-section>
        </q-card>

        <q-card class="testimonial-card animate-hover">
          <q-card-section>
            <p>"Un service fiable et rapide. Je recommande fortement !" - Marc, étudiant</p>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- CONTACT & FAQ -->
    <div class="links-section">
      <q-btn flat label="FAQ" to="/faq" />
      <q-btn flat label="Contact" to="/contact" />
      <q-btn flat label="Mentions légales" to="/mentions-legales" />
    </div>

  </q-page>
</template>


<style scoped>
/* Style général */
.home-page {
  text-align: center;
  padding-bottom: 50px;
}

/* HERO SECTION */
.hero-section {
  background: #14b8a6;
  color: white;
  padding: 100px 20px;
  border-radius: 0 0 50px 50px;
}

.buttons {
  margin-top: 20px;
}

.buttons q-btn {
  margin: 10px;
}

/* FONCTIONNALITÉS */
.features,
.testimonials {
  padding: 50px 20px;
}

.features-grid,
.testimonial-grid {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

.feature-card,
.testimonial-card {
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.features {
  padding: 50px 20px;
}

.features-grid {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

.feature-card {
  width: 350px;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.emoji {
  font-size: 3rem;
  display: block;
  margin-bottom: 10px;
}

/* RÉGLEMENTATION */
.reglementation {
  padding: 50px 20px;
  background: #f5f5f5;
  border-radius: 20px;
  margin: 50px auto;
  width: 80%;
}

.links-section {
  margin-top: 30px;
}


</style>
