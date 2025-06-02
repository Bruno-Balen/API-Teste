const db = require('../configs');

async function PostVenda(params) {

  const sql = `INSERT INTO sales (client_id, sale_date, total) VALUES ($1, $2, $3) RETURNING *`;
  const data = new Date().toISOString()
  const { idcliente, valortotal} = params; 
  const values = [idcliente, data, valortotal];

  const query = await db.query(sql, values);

  return query.rows[0]; 
}

async function PostVendaItens(vendaId, itens) {
   const itensInseridos = [];
  
  for (const item of itens) {
    const { idproduto, quantidade, valor_unitario } = item;
    const sql = `INSERT INTO sale_items (sale_id, product_id, quantity, unit_price) VALUES ($1, $2, $3, $4) RETURNING *`;
    const values = [vendaId, idproduto, quantidade, valor_unitario];
    
    const query = await db.query(sql, values);
    itensInseridos.push(query.rows[0]);
  }
  
  return itensInseridos;
}

module.exports = {
    PostVenda,
    PostVendaItens,
};