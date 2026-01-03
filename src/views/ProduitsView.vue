<template>
  <div class="produits-page">
    <h1>Produits</h1>

    <!-- Affichage du loading et des erreurs -->
    

    <!-- Liste des produits -->
    <div class="produits-list">
      <div v-for="(produit,index) in this.products" :key="index" class="produit-card">
        <img :src="produit.image" :alt="produit.title" class="produit-image" />
        <h3>{{ produit.title }}</h3>
        <p>{{ produit.price }} $</p>
        <button v-if="!isInBag(produit)" @click="addToBag(produit)">Ajouter au panier</button>
        <button v-else @click="this.$store.dispatch('removefromBag', produit.id)">Remove bag</button>
      </div>"
    </div>

    <!-- Panier -->
    <div class="cart">
      <h2>Panier</h2>
      <div v-if="productsInBag.length === 0">Votre panier est vide.</div>

      <ul v-else>
        <li v-for="item in productsInBag" :key="item.id">
          {{ item.title }} x {{ item.quantity }} = {{ (item.price * item.quantity).toFixed(2) }} $
          <button @click="this.$store.dispatch('removefromBag', item.id)">Supprimer</button>
        </li>
      </ul>

      <div v-if="productsInBag.length > 0">
        <strong>Total:  $</strong>
        <button @click="clearCart">Vider le panier</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProduitsView',
  computed: {
  ...mapState(['products', 'productsInBag']),
  totalPrice() {
    return this.productsInBag.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  }
  
},
mounted() {
  console.log('Panier au montage :', this.productsInBag);
},
    
  methods: {
    addToBag(produit) {
      produit.quantity = 1;
      this.$store.dispatch('addToBag', produit)
    },
    isInBag(produit) {
      return this.productsInBag.find(item => item.id === produit.id)
    },
  }

}
</script>

<style scoped>
.produits-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.produit-card {
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  text-align: center;
}

.produit-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.cart {
  margin-top: 30px;
  border-top: 2px solid #333;
  padding-top: 20px;
}

.error {
  color: red;
}
</style>
