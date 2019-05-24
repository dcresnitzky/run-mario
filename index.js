/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */

module.exports = app => {

  app.log('Yay, the app was loaded!');

  /*
   * 1) Vamos extrair a query do pull_request.
   * 2) Validar a query contra um banco mock.
   * 3) Versionar a query validada.
   * 4) Pedir aprovação do usuário para executar em produção.
   * 5) Executar em produção.
   */
  app.on(['pull_request.opened', 'pull_request.edited', 'pull_request.reopened'], async context => {

    let pull_request = context.payload.pull_request;
    // TODO: remove this console.log
    console.log(pull_request);

    // Extrair a query do pull_request.
    let query = QueryExtractor.extract(pull_request);

    try {
      // Validar a query
      if (!QueryValidator.validate(query)) {
        return;
      }

      // Versionar a query
      QueryVersioner.version(query);

      // Pedimos permissao para rodar em produção
      QueryPermission.ask(query);


    } catch(err) {

      // TODO: usar uma interface de log melhor

      //  Log do erro
      console.log(err);

      // Cancelar a execução da rotina
      return -1;
    }

    return 0;

  });

};
