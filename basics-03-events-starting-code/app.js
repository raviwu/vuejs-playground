const app = Vue.createApp({
    data() {
        return {
            num: 1,
            counter: 0,
            name: '',
            confirmedName: ''
        };
    },
    methods: {
        submitForm() {
            alert('Submitted');
        },
        add() {
            this.counter += this.num;
        },
        remove() {
            this.counter -= this.num;
        },
        confirmName() {
            this.confirmedName = this.name;
        },
        resetName() {
            this.name = '';
        }
    }
});

app.mount('#events');