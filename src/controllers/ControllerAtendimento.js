const service = new (require('../services/ServiceAtendimento.js'));

const serviceCachorro = new (require('../services/ServicePetShop.js'));


class ControllerAtendimento {
  // criando o método para pegar um cachorro
  //
  async GetAtendimento(req, res) {
    try {
      const resultUmAtendimento = await service.PegarUmCachorro(req.params.id);
      res.status(200).json({
        aquiequalquercoisa: resultUmAtendimento, //
      });
    }
    catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });
    }
  }

  async GelAllAtendimento(req, res) {
    try {
      console.log('Controller: PegarTodosOsCachorros');
      const resultTodosAtendimentos = await service.PegarTodosCachorros();
      res.status(200).json({
        aquiequalquercoisa: resultTodosAtendimentos,
      });

    }
    catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });
    }
  }


  async PostAtendimento(req, res) {
    try {
      console.log('Controller: AdicionarAtendimento');
      const atendimento = req.body;
      await service.PostAtendimento(atendimento);
      res.status(200).json({
        message: 'Atendimento Adicionado com sucesso!'

      });

    } catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });

    }
  }

  async PutAtendimento(req, res) {
    try {
      console.log('Controller: PutAtendimento');
      const atendimento = req.body;
      const id = req.params.id;
      await service.PutAtendimento(atendimento, id);
      res.status(200).json({
        message: 'Cachorro Atualizado com sucesso!'

      });

    } catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });

    }
  }
  async DeleteAtendimento(req, res) {
    try {
      console.log('Controller: DeleteAtendimento');
      const id = req.params.id;
      await service.DeleteAtendimento(id);
      res.status(200).json({
        message: 'Cachorro Deletado com sucesso!'

      });

    } catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });

    }
  }

  async GetAtendimentoForCachorro(req, res) {
    try {
      console.log('Controller: GetAtendimentoForCachorro');
      const resultTodosAtendimentos = await service.GetAtendimentoForCachorro(req.params.id );
      const cachorro = await serviceCachorro.PegarUmCachorro(req.params.id);
      res.status(200).json({
        cachorro: cachorro,
        aquiequalquercoisa:resultTodosAtendimentos,
      });

    }
    catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });
    }
  }

}

module.exports = ControllerAtendimento;
