<script setup lang="ts">
import type { MaisonRecord } from '@/pocketbase-types'
import MaisonCard from '@/components/MaisonCard.vue'
import { pb } from '@/backend';

const maisonsListe  = await pb.collection('Maison').getFullList()

/* : MaisonRecord = [
  {
    
    Prix: 50000,
    adresse: '3a rue des passes ',
    collectionId: 'kxykh1kotrburk7',
    collectionName: 'Maison',
    created: '2024-04-12 07:24:25.260Z',
    favori: true,
    id: 'jjzo7n2lr08ovth',
    image: '',
    nbChambres: 5,
    nbSdb: 2,
    nomMaison: 'La goat',
    surface: 50,
    updated: '2024-05-02 06:37:33.345Z'
  },
  {
    Prix: 25000,
    adresse: '5 rue de la jardinerie',
    collectionId: 'kxykh1kotrburk7',
    collectionName: 'Maison',
    created: '2024-05-02 06:34:31.689Z',
    favori: false,
    id: 'tjbqaz69yvs9gvl',
    image: '',
    nbChambres: 4,
    nbSdb: 4,
    nomMaison: 'La plaza',
    surface: 120,
    updated: '2024-05-02 07:40:38.170Z'
  },
  {
    Prix: 15000,
    adresse: '2 rue des foppeurs',
    collectionId: 'kxykh1kotrburk7',
    collectionName: 'Maison',
    created: '2024-05-02 06:35:48.741Z',
    favori: false,
    id: 'eyx9a2y0bjr1l46',
    image: '',
    nbChambres: 1,
    nbSdb: 4,
    nomMaison: 'Flop',
    surface: 9,
    updated: '2024-05-02 07:39:29.430Z'
  },
  {
    Prix: 800000,
    adresse: '3 rue des kalogoat',
    collectionId: 'kxykh1kotrburk7',
    collectionName: 'Maison',
    created: '2024-05-02 06:36:38.474Z',
    favori: false,
    id: 'qu2wrx2epe84n34',
    image: '',
    nbChambres: 7,
    nbSdb: 4,
    nomMaison: 'Kalohouse',
    surface: 134,
    updated: '2024-05-02 07:38:50.420Z'
  },
  {
    Prix: 70000,
    adresse: '7 rue de bibi',
    collectionId: 'kxykh1kotrburk7',
    collectionName: 'Maison',
    created: '2024-05-02 06:37:15.418Z',
    favori: false,
    id: 'fpf224p0o98nbt3',
    image: 'capture_d_cran_2023_09_21_084329_mHULP9fzSB.png',
    nbChambres: 2,
    nbSdb: 5,
    nomMaison: 'Bibihouse',
    surface: 110,
    updated: '2024-05-06 15:17:11.231Z'
  }
] */
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard v-for="uneMaison in maisonsListe" v-bind="uneMaison" />
  <!-- <MaisonCard v-bind="maisonsListe[0]" /> -->
</template>
