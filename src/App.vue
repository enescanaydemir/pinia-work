<template>
  <header>
    <div class="container">
      <img src="./assets/pinia-logo.svg" alt="Pinia" title="Pinia" />
      <h1>{{ gunlukStore.name }}</h1>
    </div>
  </header>

  <main>
    <div class="container">

      <div class="data-area">
        <p v-if="filter === 'all'">Toplam {{ gunlukStore.totalCount}} Günlük Var</p>
        <p v-if="filter === 'favs'">Toplam {{ gunlukStore.favCount }} Favori Günlük Var</p>
        <div>
          <button @click="$event => filter='all'" >Tüm Günlüklerim</button>
          <button @click="$event => filter='favs'">Sadece Beğendiklerim</button>
        </div>
      </div>

      <div class="gunluk-listesi" v-for="gunluk in gunlukStore.diary" v-if="filter === 'all'"> <!--Sondaki if koşulu: aşağıda script içeriisnde tanımladığımız filter için buraya bir filtreleme koyduk. Eğer all ise tüm günlükleri gösterecek, favs ise beğendiğim günlükleri gösterecek. Bunun için yukarıya 2 buton ekledim ve içerisine click ekleyip seçildiğinde filter eventine göre listelenmesi için ekledim aynı burda yazıldığı gibi.  -->
        <gunluk-details :gunluk="gunluk"></gunluk-details>
      </div>

      <div class="gunluk-listesi" v-for="gunluk in gunlukStore.favs" v-if="filter === 'favs'">
        <gunluk-details :gunluk="gunluk"></gunluk-details>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import GunlukDetails from "./components/gunluk-details.vue";
import { useDiaryStore } from "./stores/diaryStore";

export default {
  components: {
    "gunluk-details": GunlukDetails,
  },
  setup() {
    const gunlukStore = useDiaryStore();

    const filter = ref('all') //beğenilen ve tüm liste filtrelemesi için bir filter değişkeni oluşturup referans değeri olarak tüm listeyi yazdırdık

    return { gunlukStore, filter };
  },
};
</script>
