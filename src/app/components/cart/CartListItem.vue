      
    <template>
      <div>
          <p class="cart-item--title is-inline">{{ cartItem.title }}</p>
          
          <div class="is-pulled-right">
            <i @click="addCartItem(cartItem)"
              class="fa fa-plus-circle cart-item--modify"></i>
            <i @click="removeCartItem(cartItem)" 
              class="fa fa-minus-circle cart-item--modify"></i>
          </div><br>
          <img :src="getImageUrl(cartItem.imageUrl)" alt="Product Image" class="product-image m-2">
          <div class="cart-item--content">
            <span class="cart-item--price has-text-primary has-text-weight-bold">
              {{cartItem.price }}$ each
            </span>
            <span class="cart-item--quantity has-text-grey is-pulled-right">
             Quantity: {{ cartItem.quantity }}
            </span>
          </div>
        </div>
    </template>


<script>
import { mapActions } from 'vuex';

  export default {
    name: 'CartListItem',
    props: ['cartItem'],
    methods: {
      ...mapActions([
        'addCartItem',
        'removeCartItem',
      ]),
      getImageUrl(imagePath) {
        return `img/${imagePath}`; 
      },  
    }
  };
</script>


<style scoped>
.cart-item--modify {
  cursor: pointer;
  margin: 0 1px;
}
.product-image {
    width: 74px; 
    height: auto;
 }
</style>