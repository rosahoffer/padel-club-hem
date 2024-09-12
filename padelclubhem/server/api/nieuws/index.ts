// server/api/nieuws/index.ts
export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const query = `
    query {
      nieuwtjes(orderBy: createdAt_DESC) { 
        id
        titel
        image {
          url
        }
        introductie
        createdAt 
        beschrijving {
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

  const { data, errors } = await response.json();

  // Log eventuele fouten die optreden tijdens het ophalen van de gegevens
  if (errors) {
    console.error('GraphQL Errors:', errors);
    throw new Error('Failed to fetch nieuws.');
  }

  return data.nieuwtjes;
});
