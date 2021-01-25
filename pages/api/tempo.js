async function tempo(request, response) {
  const apiSecret = process.env.CONVERTKIT_API_SECRET;
  const dynamicDate = new Date();

  const uri = `https://viacep.com.br/ws/${apiSecret}/json/`;

  const subscribersResponse = await fetch(uri);

  const subscribersResponseJson = await subscribersResponse.json();
  const bairro = subscribersResponseJson.bairro;

  response.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

  response.json({
    date: dynamicDate.toGMTString(),
    bairro: bairro,
  });
}

export default tempo;
