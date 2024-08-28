// server/api/nieuws/index.ts
export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const query = `
    {
      nieuwtjes {
        id
        titel
        image {
          url
        }
        introductie
        datum
        beschrijving{
          html
        }
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
  return data.nieuwtjes;
});
