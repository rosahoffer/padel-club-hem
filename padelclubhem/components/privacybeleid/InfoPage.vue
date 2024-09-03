<template>
  <section>
    <nav aria-label="Breadcrumb" class="breadcrumb">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="breadcrumb-item">
          <NuxtLink to="/privacybeleid">Privacybeleid</NuxtLink>
        </li>
      </ul>
    </nav>
    <h2>Privacy beleid</h2>
    <div class="subtags">
      <p class="subtag">Inleiding</p>
    </div>
    <p class="introductie">Welkom bij Padelclub Hem. Wij waarderen je privacy en doen er alles aan om je
      persoonsgegevens te beschermen. Dit privacybeleid legt uit hoe wij omgaan met de gegevens die wij van je
      verzamelen wanneer je onze website bezoekt, een account aanmaakt of gebruik maakt van onze diensten.</p>
    <div class="information-contain">
      <h5>1. Verzameling van Persoonsgegevens</h5>
      <p class="description">
        Wij verzamelen verschillende soorten persoonsgegevens wanneer je gebruik maakt van onze website, zoals:
      <ul>
        <li>Contactgegevens: Naam, e-mailadres, telefoonnummer.</li>
        <li>Gebruiksgegevens: Informatie over hoe je onze website gebruikt, zoals IP-adressen, browsertype, en
          bezoektijd.</li>
        <li>Transactiegegevens: Gegevens over de boekingen die je maakt, zoals reserveringsdetails en betaalinformatie.
        </li>
      </ul>
      </p>

      <h5>2. Doeleinden van Gegevensverwerking</h5>
      <p class="description">
        Wij gebruiken je persoonsgegevens voor de volgende doeleinden:
      <ul>
        <li>Boekingsbeheer: Om je reserveringen voor padel- en tennisbanen te verwerken en te beheren.</li>
        <li>Communicatie: Om je te informeren over je reserveringen, wijzigingen in onze diensten, en om antwoord te
          geven op je vragen.</li>
        <li>Verbetering van onze diensten: Om onze website en diensten te verbeteren, bijvoorbeeld door het analyseren
          van gebruikersgedrag.</li>
        <li>Wettelijke verplichtingen: Om te voldoen aan wet- en regelgeving, zoals belastingverplichtingen.</li>
      </ul>
      </p>

      <h5>3. Delen van Gegevens</h5>
      <p class="description">
        Wij delen je persoonsgegevens alleen met derden als dit noodzakelijk is voor de uitvoering van onze diensten,
        zoals:
      <ul>
        <li>Betalingsverwerkers: Om betalingen voor reserveringen te verwerken.</li>
        <li>Dienstverleners: Voor het hosten van onze website en het onderhouden van onze IT-infrastructuur.</li>
        <li>Wettelijke autoriteiten: Indien wettelijk verplicht of om onze rechten te beschermen.</li>
      </ul>
      </p>

      <h5>4. Beveiliging van Gegevens</h5>
      <p class="description">
        Wij nemen passende technische en organisatorische maatregelen om je persoonsgegevens te beschermen tegen
        verlies, diefstal, onbevoegde toegang, openbaarmaking, wijziging of vernietiging.
      </p>

      <h5>5. Bewaartermijn</h5>
      <p class="description">
        Wij bewaren je persoonsgegevens niet langer dan nodig is voor de doeleinden waarvoor ze zijn verzameld, tenzij
        een langere bewaartermijn wettelijk is vereist.
      </p>

      <h5>6. Jouw Rechten</h5>
      <p class="description">
        Je hebt het recht om:
      <ul>
        <li>Inzage te krijgen in je gegevens: Je kunt een kopie vragen van de persoonsgegevens die wij van je hebben.
        </li>
        <li>Correctie van je gegevens: Als je merkt dat je gegevens onjuist of onvolledig zijn, kun je ons vragen deze
          te corrigeren.</li>
        <li>Verwijdering van je gegevens: Je kunt ons verzoeken om je persoonsgegevens te verwijderen, mits dit geen
          inbreuk maakt op wettelijke verplichtingen.</li>
        <li>Bezwaar te maken tegen verwerking: Je kunt bezwaar maken tegen de verwerking van je persoonsgegevens als je
          het niet eens bent met de manier waarop wij je gegevens gebruiken.</li>
      </ul>
      </p>

      <h5>7. Wijzigingen in dit Privacybeleid</h5>
      <p class="description">
        Wij kunnen dit privacybeleid van tijd tot tijd wijzigen. Wij raden je aan om regelmatig ons privacybeleid te
        controleren op eventuele aanpassingen. Wij zullen belangrijke wijzigingen communiceren via onze website.
      </p>

      <h5>8. Contactgegevens</h5>
      <p class="description">
        Als je vragen hebt over dit privacybeleid of over hoe wij je gegevens verwerken, neem dan contact met ons op
        via:
        <br>
        Padelclub Hem<br>
        Adres: Torenweg 44, 1607 CP Hem<br>
        E-mailadres: <a class="p-link-two" href="mailto:info@padelclubhem.nl">info@padelclubhem.nl</a>
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background-color: var(--background-color);
  padding: 11rem 1.5rem 6rem 1.5rem;
}

h2 {
  color: var(--secondary-color);
  text-wrap: wrap;
}

p,
ul,
li {
  color: var(--secondary-color);
}

.subtags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem 0;
}

.subtag {
  font-size: 0.7rem;
  line-height: 0.7rem;
  padding: 0.6rem;
  text-align: center;
  border: solid 2px var(--secondary-color);
  max-width: fit-content;
}

.information-contain {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 0 auto;
}

.description {
  font-size: 1rem;
  line-height: 1.6rem;
}

@media (min-width: 60rem) {
  h2 {
    text-align: center;
  }

  .introductie {
    margin: 0 auto;
    max-width: 50rem;
    text-align: center;
  }

  .information-contain {
    margin: 0 auto;
    max-width: 50rem;
    padding-top: 3rem;
  }

  .subtags {
    margin: 0 auto;
  }

  .subtag {
    font-size: 0.8rem;
    line-height: 0.8rem;
    padding: 0.7rem;
  }
}
</style>
