const app = Vue.createApp({
    data() {
        return {
            goal: 'Finish the Course yo!',
            link: 'https://google.com'
        };
    },
    methods: {
        outputGoal() {
            const number = Math.random();
            if (number < 0.5) {
                return 'Learn Vue'
            } else {
                return 'Mastered Vue!'
            }
        }
    }
});

app.mount('#user-goal');