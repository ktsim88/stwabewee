const app = Vue.createApp({
    created() {
        fetch('images.json').then(rep => rep.json()).then(json => {
            this.images = json
         })
    },
    data() {
        return {
            images: [],
            name: "stwabewee"
        }
    }
    
})
app.mount('#app')