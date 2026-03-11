const app = Vue.createApp({
    created() {
        fetch('images.json').then(rep => rep.json()).then(json => {
            this.images = json
         })
    },
    data() {
        return {

        }
    }
    
})
app.mount('#app')