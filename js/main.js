console.log(Vue);


// funzione di Vue
const {createApp} = Vue;


//così inizializzo l'applicazione vjs ed il codice Html sarà gestito da vue
createApp({
    data() {
        return {
            greeting: "Hello World",
            img: "https://i.etsystatic.com/29488153/r/il/e0f22b/3860244894/il_fullxfull.3860244894_p9az.jpg"
        }
    }
}).mount('#app');
