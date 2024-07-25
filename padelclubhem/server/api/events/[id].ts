import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id: string };
  
  const config = useRuntimeConfig();
  const query = `
  {
    event(where: { id: "${id}" }) {
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
