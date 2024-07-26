export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const query = `
    {
        events {
        id
        title
        image {
            url
        }
        description
        date
        time
        ageGroup
        registrationFee
        availableSlots
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
  return data.events;
  
});
