<script setup lang="ts">
import type { MaisonRecord } from '@/pocketbase-types'
import MaisonCard from '@/components/MaisonCard.vue'
import { pb } from '@/backend';

const maisonsListe  = await pb.collection('Maison').getFullList( )

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard v-for="uneMaison in maisonsListe" v-bind="uneMaison" />
  <!-- <MaisonCard v-bind="maisonsListe[0]" /> -->
</template>