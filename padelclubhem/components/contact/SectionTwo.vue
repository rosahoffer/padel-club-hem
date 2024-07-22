<template>
    <section class="contact-container">
        <p class="subtitle-medium">Stel je vraag</p>
        <h2>Smash Ons Een Bericht</h2>

        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label class="subtitle-bold-uppercase" for="subject">Onderwerp*</label>
                <select id="subject" v-model="form.subject" required>
                    <option value="">Kies een optie</option>
                    <option value="optie1">Optie 1</option>
                    <option value="optie2">Optie 2</option>
                    <option value="optie3">Optie 3</option>
                </select>
            </div>

            <div class="form-group">
                <label class="subtitle-bold-uppercase" for="firstName">Naam*</label>
                <input type="text" id="firstName" v-model="form.firstName" required placeholder="Jouw naam..." />
            </div>

            <div class="form-group">
                <label class="subtitle-bold-uppercase" for="lastName">Achternaam*</label>
                <input type="text" id="lastName" v-model="form.lastName" required placeholder="Jouw achternaam..." />
            </div>

            <div class="form-group">
                <label class="subtitle-bold-uppercase" for="email">E-mail*</label>
                <input type="email" id="email" v-model="form.email" required placeholder="Jouw e-mailadres..." />
            </div>

            <div class="form-group">
                <label class="subtitle-bold-uppercase" for="phone">Telefoonnummer</label>
                <input type="tel" id="phone" v-model="form.phone" placeholder="Jouw telefoonnummer..." />
            </div>

            <div class="form-group">
                <label class="subtitle-bold-uppercase" for="message">Bericht*</label>
                <textarea id="message" v-model="form.message" required
                    placeholder="Typ hier jouw bericht..."></textarea>
            </div>

            <button class="primary-button" type="submit" :disabled="loading">
                {{ loading ? 'Verzenden...' : 'Verzend je bericht' }}
            </button>

            <p v-if="error" class="error">{{ error }}</p>
            <p v-if="success" class="success">Bericht succesvol verzonden!</p>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            form: {
                subject: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            },
            loading: false,
            error: '',
            success: false
        };
    },
    methods: {
        async handleSubmit() {
            this.loading = true;
            this.error = '';
            this.success = false;

            // Mocking an API call
            setTimeout(() => {
                this.loading = false;
                if (Math.random() > 0.5) { // Simulating a success/failure scenario
                    this.success = true;
                    this.resetForm();
                } else {
                    this.error = 'Er is iets misgegaan. Probeer het opnieuw.';
                }
            }, 1000);

            // Replace the above block with actual API call
            /*
            try {
                const response = await axios.post('https://your-backend-api.com/send-email', this.form);
                this.success = true;
                this.resetForm();
            } catch (err) {
                this.error = 'Er is iets misgegaan. Probeer het opnieuw.';
            } finally {
                this.loading = false;
            }
            */
        },
        resetForm() {
            this.form.subject = '';
            this.form.firstName = '';
            this.form.lastName = '';
            this.form.email = '';
            this.form.phone = '';
            this.form.message = '';
        }
    }
};
</script>

<style scoped>
.contact-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background-color: var(--background-color);
    padding: 5rem 1.5rem;
}

.contact-container h2 {
    color: var(--secondary-color);
}

.form-group {
    margin-bottom: 1.5rem;
}

form label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: var(--primary-color);
}

form input,
form select,
form textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

form button {
    cursor: pointer;
}

.error {
    color: red;
    margin-top: 1rem;
}

.success {
    color: green;
    margin-top: 1rem;
}

@media (min-width: 40rem) {
    .contact-container {
        gap: 3rem;
        padding: 11rem 3rem 3rem 3rem;
    }
}

@media (min-width: 60rem) {}

@media (min-width: 80rem) {}
</style>
