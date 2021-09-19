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
        setNum(event) {
            this.num = parseInt(event.target.value);
        },
        add() {
            this.counter += this.num;
        },
        remove() {
            this.counter -= this.num;
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        },
        confirmName() {
            this.confirmedName = this.name;
        }
    }
});

app.mount('#events');