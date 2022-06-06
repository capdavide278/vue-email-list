const app = new Vue({
    el : "#app",
    data:{
        email: []
/*         email_utente1:"",
        email_utente2:"",
        email_utente3:"",
        email_utente4:"",
        email_utente5:"",
        email_utente6:"",
        email_utente7:"",
        email_utente8:"",
        email_utente9:"" */
    },

    mounted(){
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) => {
                const risultato = result.data.response;
                console.log(risultato);
                this.email.push(risultato);
            });
        }
        /* axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.email_utente1=risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.email_utente2=risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.email_utente3=risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.email_utente4=risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.email_utente5=risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.email_utente6=risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.email_utente7=risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.email_utente8=risultato;
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result) => {
            const risultato = result.data.response;
            console.log(risultato);
            this.email_utente9=risultato;
        }); */
    }
}); 