<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label class="subtitle-bold-uppercase" for="subject">Onderwerp*</label>
            <select id="subject" v-model="form.subject" required aria-required="true">
                <option value="" disabled>Kies een optie</option>
                <option value="Baanreservering">Baanreservering</option>
                <option value="Competitie">Competitie</option>
                <option value="Toernooien">Toernooien</option>
                <option value="Lessen">Lessen</option>
                <option value="Business">Business</option>
                <option value="Partner worden">Partner worden</option>
                <option value="Klachten/complimenten">Klachten/complimenten</option>
                <option value="Anders">Anders</option>
            </select>
        </div>
        <div class="wrapper">
            <div class="flex-wrap-name">
                <div class="form-group">
                    <label class="subtitle-bold-uppercase" for="firstName">Naam *</label>
                    <input type="text" id="firstName" v-model="form.firstName" required aria-required="true"
                        placeholder="Jouw naam..." />
                </div>

                <div class="form-group">
                    <label class="subtitle-bold-uppercase" for="lastName">Achternaam *</label>
                    <input type="text" id="lastName" v-model="form.lastName" required aria-required="true"
                        placeholder="Jouw achternaam..." />
                </div>
            </div>
            <div class="flex-wrap-contact">
                <div class="form-group">
                    <label class="subtitle-bold-uppercase" for="email">E-mail *</label>
                    <input type="email" id="email" v-model="form.email" required aria-required="true"
                        placeholder="Jouw e-mailadres..." />
                </div>

                <div class="form-group">
                    <label class="subtitle-bold-uppercase" for="phone">Telefoonnummer</label>
                    <input type="tel" id="phone" v-model="form.phone" placeholder="Jouw telefoonnummer..." />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label class="subtitle-bold-uppercase" for="message">Bericht *</label>
            <textarea id="message" v-model="form.message" required aria-required="true"
                placeholder="Typ hier jouw bericht..."></textarea>
        </div>

        <button class="primary-button" type="submit" :disabled="loading">
            {{ loading ? 'Verzenden...' : 'Verzend je bericht' }}
        </button>

        <p v-if="error" class="error" aria-live="assertive">{{ error }}</p>
        <p v-if="success" class="success" aria-live="assertive">Bericht succesvol verzonden!</p>
    </form>
</template>

<script setup>
import { ref } from 'vue';
const accessKey = import.meta.env.VITE_ACCESS_KEY;

const form = ref({
    access_key: accessKey,
    subject: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
});

const loading = ref(false);
const error = ref("");
const success = ref(false);

const handleSubmit = async () => {
    loading.value = true;
    error.value = "";
    success.value = false;

    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                access_key: form.value.access_key,
                subject: `Nieuwe inzending website: ${form.value.subject}`,
                naam: `${form.value.firstName} ${form.value.lastName}`,
                email: form.value.email,
                telefoonnummer: form.value.phone,
                bericht: form.value.message
            })
        });

        const result = await response.json();

        if (response.ok) {
            success.value = true;
            form.value.subject = "";
            form.value.firstName = "";
            form.value.lastName = "";
            form.value.email = "";
            form.value.phone = "";
            form.value.message = "";
        } else {
            error.value = result.message || "Er is iets fout gegaan!";
        }
    } catch (err) {
        error.value = "Er is iets fout gegaan!";
    } finally {
        loading.value = false;
        setTimeout(() => {
            error.value = "";
            success.value = false;
        }, 5000);
    }
};

</script>

<style scoped>
.form {
    padding-top: 3rem;
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
    padding: 1rem 0;
    background-color: var(--background-color);
    outline: none;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid var(--secondary-color);
    color: var(--secondary-color);
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8rem;
}

form select,
form select:focus {
    padding: 2rem 0;
    cursor: pointer;
}

form textarea {
    height: 10rem;
    resize: none;
}


form input::placeholder,
form textarea::placeholder,
form select::placeholder {
    color: var(--secondary-color);
    background-color: var(--background-color);
}

form input:focus,
form select:focus,
form textarea:focus {
    border-bottom: 2px solid var(--primary-color);
    background-color: var(--background-color);
}

form button {
    cursor: pointer;
    margin: 0;
    margin-left: auto;
}

@media (min-width: 60rem) {
    .form {
        width: 100%;
        padding-top: 5rem;
    }

    .form-group {
        margin-bottom: 2rem;
        width: 100%;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
    }

    .flex-wrap-name {
        display: flex;
        gap: 2rem;
        width: 100%;
    }

    .flex-wrap-contact {
        display: flex;
        gap: 2rem;
        width: 100%;
    }

    .wrapper div {
        width: 100%;
    }

    form input,
    form select,
    form textarea {
        font-size: 1.2rem;
        line-height: 2rem;
        padding: 2rem 0;
    }

    form input:focus,
    form select:focus,
    form textarea:focus {
        font-size: 1.2rem;
        line-height: 2rem;
        padding: 2rem 0;
    }
}

@media (min-width: 120rem) {

form {
    padding: 0 7rem;
}
}
</style>