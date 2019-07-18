const RunMario = require('./app/run-mario');

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
    let pullRequest = context.payload.pull_request;

    new RunMario(pullRequest, "mongodb://localhost:27017/run-mario");
  })
};
