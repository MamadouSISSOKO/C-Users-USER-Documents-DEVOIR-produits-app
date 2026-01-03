<template>
  <div class="mini-cart" :class="{ open: isOpen }">
    <button class="toggle-btn" @click="isOpen = !isOpen">
      🛒 {{ cart.length }} 
    </button>

    <div class="cart-content" v-if="isOpen">
      <h3>Panier</h3>
      <ul>
        <li v-for="item in cart" :key="item.id">
          <span>{{ item.title }}</span>
          <input type="number" v-model.number="item.quantity" min="1" @change="updateQuantity(item)" />
          <span>{{ (item.price * item.quantity).toFixed(2) }} $</span>
          <button @click="removeFromCart(item.id)">❌</button>
        </li>
      </ul>
      <p><strong>Total: {{ cartTotal.toFixed(2) }} $</strong></p>
      <button @click="clearCart">Vider le panier</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MiniCart',
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal']),
    cart() {
      return this.cartItems
    }
  },
  methods: {
    ...mapActions(['removeFromCart', 'clearCart']),
    updateQuantity(item) {
      if (item.quantity < 1) item.quantity = 1
    }
  }
}
</script>

<style scoped>
.mini-cart {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  font-family: Arial, sans-serif;
}

.toggle-btn {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}

.cart-content {
  background: #fff;
  border: 2px solid #333;
  padding: 10px;
  width: 250px;
  max-height: 400px;
  overflow-y: auto;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.cart-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-content li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
}

.cart-content input {
  width: 40px;
  margin: 0 5px;
}

.cart-content button {
  background: none;
  border: none;
  cursor: pointer;
  color: red;
  font-size: 16px;
}
</style>
