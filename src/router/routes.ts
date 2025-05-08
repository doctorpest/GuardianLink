import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/features',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/etudiant',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/EtudiantPage.vue') }],
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
  },
  {
    path: '/dashboard-etudiant',
    component: () => import('layouts/StudentDashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/DashboardPage.vue') }],
  },
  {
    path: '/dashboard-garant',
    component: () => import('layouts/GarantDashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/DashboardGarantPage.vue') }],
  },
  {
    path: '/dahsboard-etudiant/match',
    component: () => import('layouts/StudentDashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/ChercherGarant.vue') }],
  },
  {
    path: '/dashboard-etudiant/mes-demandes',
    component: () => import('layouts/StudentDashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/MesDemandes.vue') }],
  },
  {
    path: '/dashboard-etudiant/garants',
    component: () => import('layouts/StudentDashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/TousLesGarants.vue') }],
  },
  {
    path: '/dashboard-etudiant/loisirs',
    component: () => import('layouts/StudentDashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/ActivitesLoisirs.vue') }],
  },
  {
    path: '/dashboard-etudiant/docuemnts',
    component: () => import('layouts/StudentDashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/AddDocument.vue') }],
  },
  {
    path: '/dashboard-garant/loisirs',
    component: () => import('layouts/GarantDashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/ActivitesLoisirs.vue') }],
  },
  {
    path: '/dashboard-garant/demandes',
    component: () => import('layouts/GarantDashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/DemandesGarant.vue') }],
  },
  {
    path: '/dashboard-garant/demandes-acceptees',
    component: () => import('layouts/GarantDashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/DemandesAcceptees.vue') }],
  },
  {
    path: '/dashboard-garant/documents',
    component: () => import('layouts/GarantDashboardLayout.vue'),
    children: [{ path: '', component: () => import('pages/AddDocument.vue') }],
  },
  {
    path: '/mentions-legales',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/MentionsLegales.vue') }],
  },
  {
    path: '/register',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/RegisterPage.vue') }],
  },
  {
    path: '/garant',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/GarantPage.vue') }],
  },
  {
    path: '/reglementation',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ReglementationPage.vue') }],
  },
  {
    path: '/contact',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ContactPage.vue') }],
  },
  {
    path: '/faq',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/FAQPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
