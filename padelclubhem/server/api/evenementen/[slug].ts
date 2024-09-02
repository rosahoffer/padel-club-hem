export default defineEventHandler(async (evenement) => {
  const { slug } = evenement.context.params as { slug: string };
  
  const config = useRuntimeConfig();
  const query = `
  {
    evenement(where: { slug: "${slug}" }) {
      titel
      image {
        url
      }
      introductie
      datum
      tijd
      leeftijd
      inschrijfgeld
      duur
      slug
      beschrijving{
        html
      }
    }
  }`;
  
  const response = await fetch(config.public.hygraphApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.public.hygraphApiToken}`,
    },
    body: JSON.stringify({ query }),
  });
  
  const { data } = await response.json();
  return data.evenement;
});
