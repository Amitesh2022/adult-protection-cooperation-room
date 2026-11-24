<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink, RouterView } from 'vue-router'
import { useDeliveryStore } from './store'
const store = useDeliveryStore()
const { approvedShare, offers, urgent } = storeToRefs(store)
onMounted(store.load)
</script>

<template><div class="shell"><aside><div class="brand">ProtectAdultsEU<span>COOPERATION</span></div><nav><RouterLink to="/">Protection cases</RouterLink><RouterLink to="/insights">Authority guidance</RouterLink></nav><div class="health"><i /> Java cooperation service connected</div></aside><main><header><div><span class="eyebrow">Coordinate protective measures for adults whose lives, assets or representatives cross borders</span><h1>Adult Protection Cooperation Room</h1></div><button @click="store.addOffer">Add protection case</button></header><section class="summary"><article><small>Cases approved</small><strong>{{ approvedShare }}%</strong><div class="bar"><span :style="{ width: `${approvedShare}%` }" /></div></article><article><small>Cases tracked</small><strong>{{ offers.length }}</strong><p>Shared authority view</p></article><article><small>Urgent safeguards</small><strong>{{ urgent }}</strong><p>Needs attention</p></article></section><RouterView /></main></div></template>
