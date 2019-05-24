class RunMario {
  constructor (pullRequest) {
    this.pullRequest = pullRequest;
    this.run()
  }

  run () {
    // pr body
    this.body = this.pullRequest.body;
    // pr url
    this.url = this.pullRequest.url;
    // pr number
    this.number = this.pullRequest.number;
    // pr title
    this.title = this.pullRequest.title;
    // pr cration date
    this.createdAt = this.pullRequest.createdAt;
    //user.login: 'dcresnitzky',
    //user.id: 11504034,
    this.user = this.pullRequest.user;

    // Remove os espacos vazios
    let bodyReplaced = this.body.replace(/\n|\r/g, "");
    // Busca o bloco contendo a query
    let queryBlock = bodyReplaced.match(new RegExp("sql(.*)```"));

    if (!queryBlock) {
      return;
    }

    // Remove o ultimo objeto vazio
    let queryArray = queryBlock[1].split(";").filter(item => item);

    console.log(`queryArray: ${queryArray}`);
    console.log(queryArray);

    try {
      // TODO: Validar a query
      // if (!QueryValidator.validate(query)) {
      //     return;
      //
      // }

      // TODO: Versionar a query
      // QueryVersioner.version(query);

      // Pedimos permissao para rodar em produção
      // QueryPermission.ask(query);

    } catch (err) {
      // TODO: usar uma interface de log melhor

      //  Log do erro
      console.log(err);

      // Cancelar a execução da rotina
      return -1
    }
    return 0
  }
}

module.exports = RunMario;