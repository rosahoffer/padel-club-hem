export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const query = `
    {
        evenementen {
        id
        titel
        image {
          url
        }
        beschrijving
        datum
        tijd
        leeftijd
        inschrijfgeld
        slug
        }
    }
    `;

  const response = await fetch(config.public.hygraphApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.public.hygraphApiToken}`,
    },
    body: JSON.stringify({ query }),
  });
  
  const { data } = await response.json();
  return data.evenementen;
  
});
