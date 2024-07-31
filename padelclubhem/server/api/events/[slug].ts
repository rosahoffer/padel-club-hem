export default defineEventHandler(async (event) => {
  const { slug } = event.context.params as { slug: string };
  
  const config = useRuntimeConfig();
  const query = `
  {
    event(where: { slug: "${slug}" }) {
      title
      image {
        url
      }
      description
      date
      time
      ageGroup
      registrationFee
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
  return data.event;
});
