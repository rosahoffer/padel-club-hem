<template>
    <HeaderMainHeader />
    <div class="container">
        <div class="title-contain">
            <p class="subtitle-medium">Schrijf je in voor:</p>
            <h3 class="subtitle-bold-uppercase">{{ evenementName }}</h3>
            <div v-if="evenement">
                <div class="description" v-html="evenement.beschrijving.html"></div>
            </div>
            <p class="subtitle-small">Je kunt meerdere personen inschrijven (maximaal 8 personen).</p>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="person-form">
                <p class="subtitle-medium padding">Persoon 1</p>
                <div class="form-group">
                    <label class="subtitle-bold-uppercase" :for="`first-name-0`">Voornaam *</label>
                    <input type="text" v-model="people[0].firstName" :id="`first-name-0`" name="first-name-0" required
                        placeholder="Jouw naam..." />
                </div>
                <div class="form-group">
                    <label class="subtitle-bold-uppercase" :for="`last-name-0`">Achternaam *</label>
                    <input type="text" v-model="people[0].lastName" :id="`last-name-0`" name="last-name-0" required
                        placeholder="Jouw achternaam..." />
                </div>
                <div class="form-group">
                    <label class="subtitle-bold-uppercase" :for="`email-0`">Email *</label>
                    <input type="email" v-model="people[0].email" :id="`email-0`" name="email-0" required
                        placeholder="Jouw emailadres..." />
                </div>
                <div class="form-group">
                    <label class="subtitle-bold-uppercase" :for="`phone-0`">Telefoonnummer *</label>
                    <input type="tel" v-model="people[0].phone" :id="`phone-0`" name="phone-0" required
                        placeholder="Jouw telefoonnummer..." />
                </div>
            </div>
            <div v-if="people.length > 1">
                <div v-for="(person, index) in people.slice(1)" :key="index + 1" class="person-form">
                    <p class="subtitle-medium padding">Persoon {{ index + 2 }}</p>
                    <div class="form-group">
                        <label class="subtitle-bold-uppercase" :for="`first-name-${index + 1}`">Voornaam *</label>
                        <input type="text" v-model="person.firstName" :id="`first-name-${index + 1}`"
                            name="first-name-${index + 1}" required placeholder="Naam..." />
                    </div>
                    <div class="form-group">
                        <label class="subtitle-bold-uppercase" :for="`last-name-${index + 1}`">Achternaam *</label>
                        <input type="text" v-model="person.lastName" :id="`last-name-${index + 1}`"
                            name="last-name-${index + 1}" required placeholder="Achternaam..." />
                    </div>
                    <div class="form-group">
                        <label class="subtitle-bold-uppercase" :for="`email-${index + 1}`">Email *</label>
                        <input type="email" v-model="person.email" :id="`email-${index + 1}`" name="email-${index + 1}"
                            required placeholder="Emailadres..." />
                    </div>
                    <div class="form-group">
                        <label class="subtitle-bold-uppercase" :for="`phone-${index + 1}`">Telefoonnummer</label>
                        <input type="tel" v-model="person.phone" :id="`phone-${index + 1}`" name="phone-${index + 1}"
                            placeholder="Telefoonnummer..." />
                    </div>
                </div>
            </div>
            <div class="submit-buttons">
                <button class="primary-button-outline" type="button" @click="addPerson" :disabled="people.length >= 8">
                    <svg width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.429 -0.000976562C11.7585 0.0587538 12.0959 0.0918419 12.4164 0.182942C14.7532 0.847281 16.2482 2.36031 16.717 4.74222C17.1523 6.95353 16.4351 8.83139 14.7343 10.3216C14.675 10.3736 14.6144 10.4239 14.556 10.4763C14.5465 10.4849 14.5431 10.5 14.5354 10.5154C14.9243 10.677 15.3132 10.8377 15.7016 10.9993C15.9203 11.09 16.0961 11.2283 16.1979 11.4492C16.3501 11.7784 16.2916 12.1441 16.045 12.4049C15.8005 12.6632 15.4532 12.7323 15.0987 12.6064C14.4533 12.3774 13.8208 12.0856 13.1564 11.9408C9.96922 11.2468 7.12622 11.9825 4.67427 14.1345C3.16038 15.4632 2.212 17.1425 1.76166 19.1046C1.60438 19.79 2.00359 20.2816 2.72723 20.2816C6.15678 20.2824 9.58591 20.2816 13.0155 20.2824C13.1083 20.2824 13.2024 20.2794 13.2944 20.291C13.6871 20.34 13.9918 20.646 14.0429 21.0366C14.0919 21.4126 13.8775 21.7796 13.5178 21.9338C13.4662 21.9562 13.4147 21.9785 13.3627 22.0013H2.27603C2.24423 21.988 2.21372 21.9682 2.18063 21.9622C1.33753 21.8118 0.704127 21.3606 0.309649 20.6043C0.166983 20.331 0.0999479 20.0182 -0.00146484 19.7238C-0.00146484 19.5089 -0.00146484 19.2941 -0.00146484 19.0792C0.114988 18.6388 0.206947 18.1902 0.351761 17.7587C1.40456 14.6162 3.42766 12.3336 6.43996 10.9396C6.77514 10.7844 7.1245 10.6603 7.48718 10.5137C7.40253 10.4415 7.33162 10.3827 7.26244 10.3216C5.56721 8.82924 4.84142 6.95654 5.28059 4.74222C5.75285 2.36074 7.24568 0.847711 9.58204 0.183371C9.90261 0.0922716 10.2399 0.0591836 10.5695 -0.000546847C10.8561 -0.000546847 11.1423 -0.000546847 11.429 -0.000546847V-0.000976562ZM15.1236 5.8526C15.1301 3.58371 13.2742 1.72175 11.0031 1.71831C8.73464 1.71488 6.87441 3.57339 6.87441 5.84401C6.87441 8.06993 8.71617 9.95595 10.8983 9.96455C13.2527 9.97357 15.1172 8.15888 15.1236 5.85217V5.8526Z"
                            fill="#CBFD3C" />
                        <path
                            d="M17.7457 22.0008C17.2322 21.8255 17.0371 21.4607 17.053 20.9282C17.074 20.2209 17.0581 19.5128 17.0581 18.778C16.9679 18.778 16.8918 18.778 16.8162 18.778C16.136 18.778 15.4557 18.7797 14.7755 18.7775C14.2263 18.7754 13.843 18.4264 13.837 17.9284C13.831 17.4222 14.2186 17.0612 14.7772 17.0595C15.5279 17.0574 16.2791 17.0591 17.0586 17.0591V16.8189C17.0586 16.1386 17.0568 15.4584 17.059 14.7782C17.0607 14.2195 17.4212 13.8324 17.9274 13.838C18.4251 13.8435 18.7748 14.2268 18.7766 14.776C18.7791 15.5272 18.777 16.2783 18.777 17.0591H19.0151C19.6523 17.0591 20.2904 17.0754 20.9269 17.0539C21.4593 17.0359 21.8245 17.2327 21.9999 17.7466V18.0904C21.825 18.6035 21.4601 18.8007 20.9277 18.7831C20.2913 18.7616 19.654 18.778 19.0168 18.778H18.777C18.777 19.5141 18.7611 20.2222 18.7821 20.9291C18.798 21.4615 18.6025 21.8259 18.0894 22.0008H17.7457Z"
                            fill="#CBFD3C" />
                    </svg>
                    Extra persoon inschrijven
                </button>
                <button class="primary-button" type="submit" :disabled="loading">{{ loading ? 'Verzenden...' : 'Verzendje inschrijving'}}</button>
            </div>
            <p v-if="error" class="error">{{ error }}</p>
            <p v-if="success" class="success">
                Inschrijving succesvol verzonden! Je ontvangt een bevestigingsmail op het opgegeven e-mailadres.
                Controleer ook je spam- of ongewenste e-mailmap als je de bevestiging niet binnen enkele minuten
                ontvangt.
            </p>
        </form>
    </div>
    <FooterMainFooter />
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import { useRoute } from 'vue-router'

const props = defineProps({
    evenementSlug: String,
    evenementName: String,
});

// Fetch evenementen bij het laden van de component
const evenement = ref(null);
const route = useRoute();

onMounted(async () => {
    const slug = route.params.slug; // Haal de slug direct van de route

    if (!slug) {
        console.error('Geen slug gevonden in de route.');
        return;
    }

    try {
        const response = await fetch(`/api/evenementen`); // Zorg ervoor dat je API endpoint correct is
        if (!response.ok) throw new Error('Fout bij het ophalen van evenementen.');

        const data = await response.json();
        const item = data.find((n) => n.slug === slug); // Zoek naar het juiste evenement op basis van de slug

        if (!item) throw new Error('Evenement niet gevonden met de opgegeven slug.');

        evenement.value = item; // Sla het evenement op als het gevonden is
    } catch (error) {
        console.error('Error bij het ophalen van evenement:', error.message);
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
        for (const person of people.value) {
            await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONFIRMATION_EVENEMENTEN, {
                from_name: 'Padelclub Hem',
                to_email: person.email,
                evenementName: props.evenementName,
                firstName: person.firstName,
                lastName: person.lastName,
                phone: person.phone,
            }, import.meta.env.VITE_EMAILJS_USER_ID);
        }

        const messageBody = people.value
            .map((person, index) => `
          Persoon ${index + 1}:
          Voornaam: ${person.firstName}
          Achternaam: ${person.lastName}
          Email: ${person.email}
          Telefoonnummer: ${person.phone}
        `)
            .join('\n\n');

        await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN_EVENEMENTEN, {
            from_name: `Inschrijving voor evenement: ${props.evenementName}`,
            to_email: 'info@padelclubhem.nl',
            evenementName: props.evenementName,
            messageBody: messageBody,
        }, import.meta.env.VITE_EMAILJS_USER_ID);

        success.value = true;
        people.value = [{ firstName: '', lastName: '', email: '', phone: '' }];
    } catch (err) {
        console.error('Error sending email:', err);
        console.error('Error response:', err.response ? err.response.data : 'No response data');
        error.value = err.message || 'Er is iets fout gegaan! Neem contact op met de organisatie.';
    } finally {
        loading.value = false;
        setTimeout(() => {
            error.value = '';
            success.value = false;
        }, 10000);
    }
};

</script>

<style scoped>
.container {
    width: 100%;
    padding: 10rem 1.5rem 3rem 1.5rem;
}

.title-contain {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-bottom: 2.5rem;
}

h3 {
    color: var(--primary-color);
    text-wrap: flex;
}

.subtitle-small {
    font-size: 0.8rem;
    line-height: 1.2rem;
    margin-bottom: 3rem;
}

.form {
    width: 100%;
    padding-top: 3rem;
}

.person-form {
    width: 100%;
    padding-bottom: 3rem;
}

.padding {
    padding-bottom: 1.5rem
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
    font-size: 0.8rem;
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
    background-color: transparent;
    padding: 1rem;
}

form .submit-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.primary-button-outline svg {
    margin-right: 0.3rem;
}

form .primary-button,
.primary-button-outline {
    margin-left: auto;
}

.error {
    color: var(--secondary-color);
}

.success {
    color: var(--primary-color);
}

@media (min-width: 40rem) {
    .container {
        gap: 3rem;
        padding: 10rem 3rem;
    }
}

@media (min-width: 60rem) {

    .subtitle-small {
        font-size: 1rem;
        line-height: 1.8rem;
    }

    form {
        max-width: 60rem;
        margin: 0 auto;
        margin-top: 5rem;
    }

    .title-contain {
        max-width: 60rem;
        margin: 0 auto;
        padding-top: 5rem;
    }

    .form-group {
        margin-bottom: 2rem;
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
        font-size: 1rem;
        line-height: 1.8rem;
        padding: 2rem 0;
    }
}
</style>