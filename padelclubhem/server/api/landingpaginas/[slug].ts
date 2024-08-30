export default defineEventHandler(async (landingPage) => {
  const { slug } = landingPage.context.params as { slug: string };
  
  const config = useRuntimeConfig();
  const query = `
  {
    landingPage(where: {slug: "${slug}"}) {
      titel
      slug
      metaTitle
      metaDescription
      introContainer {
        titel
        beschrijving
        afbeelding {
          url
        }
      }
      textContainer {
        titel
        paragraaf
      }
      itemContainer {
        id
        subtitel
        titel
        item1 {
          id
          itemTitel
          itemBeschrijving {
            html
          }
        }
        item2 {
          id
          itemTitel
          itemBeschrijving {
            html
          }
        }
        item3 {
          id
          itemTitel
          itemBeschrijving {
            html
          }
        }
        item4 {
          id
          itemTitel
          itemBeschrijving {
            html
          }
        }
        item5 {
          id
          itemTitel
          itemBeschrijving {
            html
          }
        }
        item6 {
          id
          itemTitel
          itemBeschrijving {
            html
          }
        }
        item7 {
          id
          itemTitel
          itemBeschrijving {
            html
          }
        }
        item8 {
          id
          itemTitel
          itemBeschrijving {
            html
          }
        }
        item9 {
          id
          itemTitel
          itemBeschrijving {
            html
          }
        }
        item10 {
          id
          itemTitel
          itemBeschrijving {
            html
          }
        }
      }
      afbeeldingContainer {
        afbeelding {
          url
        }
      }
      ctaContainer {
        titel
        subtitel
        buttonText
        buttonUrl
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
  return data.landingPage;
});
