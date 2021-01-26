async function tempo(request, response) {
  const apiSecret = process.env.CONVERTKIT_API_SECRET;
  const dynamicDate = new Date();

  const uri = `https://viacep.com.br/ws/${apiSecret}/json/`;

  const subscribersResponse = await fetch(uri);

  const subscribersResponseJson = await subscribersResponse.json();
  const cep = subscribersResponseJson.cep;
  const logradouro = subscribersResponseJson.logradouro;
  const complemento = subscribersResponseJson.complemento;
  const bairro = subscribersResponseJson.bairro;
  const localidade = subscribersResponseJson.localidade;
  const uf = subscribersResponseJson.uf;
  const ibge = subscribersResponseJson.ibge;
  const gia = subscribersResponseJson.gia;
  const ddd = subscribersResponseJson.ddd;
  const siafi = subscribersResponseJson.siafi;

  response.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

  response.json({
    date: dynamicDate.toGMTString(),
    cep: cep,
    logradouro: logradouro,
    complemento: complemento,
    bairro: bairro,
    localidade: localidade,
    uf: uf,
    ibge: ibge,
    gia: gia,
    ddd: ddd,
    siafi: siafi,
  });
}

export default tempo;
