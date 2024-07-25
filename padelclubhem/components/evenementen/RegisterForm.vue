<template>
    <div>
        <p class="subtitle-medium">Schrijf je in voor{{ eventName }}</p>
        <h2>Inschrijven</h2>
        <form @submit.prevent="handleSubmit">
            <!-- Altijd het eerste formulier weergeven -->
            <div class="person-form">
                <p class="subtitle-medium">Persoon 1</p>
                <div class="form-group">
                    <label :for="`first-name-0`">Voornaam *</label>
                    <input type="text" v-model="people[0].firstName" :id="`first-name-0`" name="first-name-0"
                        required />
                </div>
                <div class="form-group">
                    <label :for="`last-name-0`">Achternaam *</label>
                    <input type="text" v-model="people[0].lastName" :id="`last-name-0`" name="last-name-0" required />
                </div>
                <div class="form-group">
                    <label :for="`email-0`">Email *</label>
                    <input type="email" v-model="people[0].email" :id="`email-0`" name="email-0" required />
                </div>
                <div class="form-group">
                    <label :for="`phone-0`">Telefoonnummer</label>
                    <input type="tel" v-model="people[0].phone" :id="`phone-0`" name="phone-0" />
                </div>
            </div>

            <!-- Toon extra formulieren als mensen toevoegen -->
            <div v-if="people.length > 1">
                <div v-for="(person, index) in people.slice(1)" :key="index + 1" class="person-form">
                    <p class="subtitle-medium">Persoon {{ index + 2 }}</p>
                    <div class="form-group">
                        <label :for="`first-name-${index + 1}`">Voornaam *</label>
                        <input type="text" v-model="person.firstName" :id="`first-name-${index + 1}`"
                            name="first-name-${index + 1}" required />
                    </div>
                    <div class="form-group">
                        <label :for="`last-name-${index + 1}`">Achternaam *</label>
                        <input type="text" v-model="person.lastName" :id="`last-name-${index + 1}`"
                            name="last-name-${index + 1}" required />
                    </div>
                    <div class="form-group">
                        <label :for="`email-${index + 1}`">Email *</label>
                        <input type="email" v-model="person.email" :id="`email-${index + 1}`" name="email-${index + 1}"
                            required />
                    </div>
                    <div class="form-group">
                        <label :for="`phone-${index + 1}`">Telefoonnummer</label>
                        <input type="tel" v-model="person.phone" :id="`phone-${index + 1}`" name="phone-${index + 1}" />
                    </div>
                </div>
            </div>

            <!-- Knop om extra persoon toe te voegen -->
            <button type="button" @click="addPerson" :disabled="people.length >= 8">
                Extra persoon inschrijven
            </button>

            <!-- Knop om formulier in te dienen -->
            <button type="submit" :disabled="loading">
                {{ loading ? 'Verzenden...' : 'Verzend je inschrijving' }}
            </button>

            <!-- Fout- en succesberichten -->
            <p v-if="error" class="error">{{ error }}</p>
            <p v-if="success" class="success">Inschrijving succesvol verzonden!</p>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const props = defineProps({
    eventId: String,
    eventName: {
        type: String,
        default: 'Onbekend evenement'
    },
    eventSlug: {
        type: String,
        default: 'onbekend-slug'
    }
});

const people = ref([{ firstName: '', lastName: '', email: '', phone: '' }]);
const loading = ref(false);
const error = ref('');
const success = ref(false);

const addPerson = () => {
    if (people.value.length < 8) {
        people.value.push({ firstName: '', lastName: '', email: '', phone: '' });
    }
};

const handleSubmit = async () => {
    loading.value = true;
    error.value = '';
    success.value = false;

    try {
        // Bevestigingsmail naar elke persoon die zich heeft ingeschreven
        for (const person of people.value) {
            await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONFIRMATION, {
                from_name: 'Padel Club Hem',
                to_email: person.email, // Bevestigingsmail naar het opgegeven e-mailadres
                eventName: props.eventName,
                firstName: person.firstName,
                lastName: person.lastName,
                phone: person.phone,
            }, import.meta.env.VITE_EMAILJS_USER_ID);
        }

        // Administratieve e-mail naar info@padelclubhem.nl met alle gegevens
        const messageBody = people.value
            .map((person, index) => `
          Persoon ${index + 1}:
          Voornaam: ${person.firstName}
          Achternaam: ${person.lastName}
          Email: ${person.email}
          Telefoonnummer: ${person.phone}
        `)
            .join('\n\n');

        await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN, {
            from_name: 'Inschrijving voor evenement',
            to_email: 'info@padelclubhem.nl', // Administratieve e-mail
            eventName: props.eventName,
            messageBody: messageBody,
        }, import.meta.env.VITE_EMAILJS_USER_ID);

        success.value = true;
        people.value = [{ firstName: '', lastName: '', email: '', phone: '' }];
    } catch (err) {
        error.value = err.message || 'Er is iets fout gegaan!';
    } finally {
        loading.value = false;
        setTimeout(() => {
            error.value = '';
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

.error {
    color: var(--secondary-color);
}

.success {
    color: var(--primary-color);
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
</style>