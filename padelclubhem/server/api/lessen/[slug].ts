export default defineEventHandler(async (les) => {
  const { slug } = les.context.params as { slug: string };
  
  const config = useRuntimeConfig();
  const query = `
  {
    les(where: { slug: "${slug}" }) {
      titel
      image {
        url
      }
      prijsPerLes
      lesduur
      aantalPersonen
      introductie
      beschrijving{
        html
      }
      slug
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
  return data.les;
});
