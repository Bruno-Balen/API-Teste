const vendaItensController = require('../controllers/VendaItens');

module.exports = (app) => {
  app.post('/VendaItens', vendaItensController.PostVendaItens);
}