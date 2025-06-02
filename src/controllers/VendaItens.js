const vendaItensService = require('../services/VendaItens');

async function PostVendaItens(req, res) {
   try {
    const { vendaI, itens } = req.body;
    
    const venda = await vendaItensService.PostVenda(vendaI);

    const itensInseridos = await vendaItensService.PostVendaItens(venda.id, itens);

     res.status(201).json({
      venda: {
        ...venda,
        itens: itensInseridos
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao registrar a venda e seus itens' });
  }
}

module.exports = {
    PostVendaItens
};