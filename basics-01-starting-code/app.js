const app = Vue.createApp({
    data() {
        return {
            goalOne: 'Finish the Course yo!',
            goalTwo: 'Mastered Vue',
            link: 'https://google.com'
        };
    },
    methods: {
        outputGoal() {
            const number = Math.random();
            if (number < 0.5) {
                return this.goalOne;
            } else {
                return this.goalTwo;
            }
        }
    }
});

app.mount('#user-goal');