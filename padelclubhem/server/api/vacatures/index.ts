export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const query = `
    {
        vacatures {
        id
        functie
          image {
            url
          }
          introductie
          publicatiedatum
          typeDienstverband
          watBiedtJij{
            html
          }
          jouwRolBijOns{
            html
          }
        watBiedenWij
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
  return data.vacatures;

});
