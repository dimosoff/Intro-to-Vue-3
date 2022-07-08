const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCartAdd(id) {
            this.cart.push(id)
        },
        updateCartRemove(id) {
            let elementIndex = this.cart.indexOf(id);
            if (elementIndex >= 0) {
                this.cart.splice(elementIndex, 1)
            }
        }
    }
})
