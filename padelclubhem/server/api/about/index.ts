export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const query = `
    {
        abouts {
        id
        titel
        introductie
        introductieTwee
        introductieAfbeelding {
          url
        }
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
  return data.abouts;

});
