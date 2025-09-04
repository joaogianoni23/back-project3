import FilmeModel from "../models/filmeModel.js";

class FilmeController {
  getAll(req, res) {
    try {
      const itens = FilmeModel.findAll();
      res.json(itens);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar filmes" });
    }
  }
  getById(req, res) {
    const { id } = req.params;
    const item = FilmeModel.findById(id);
    if (!item) return res.status(404).json({ error: "Filme não encontrado" });
    res.json(item);
  }
  create(req, res) {
    const { nome, marca, preco, categoria, cor, estoque, imagemUrl, descricao } = req.body;
    if (!nome || !marca || !preco == null) {
      return res.status(400).json({ error: "nome, marca e preco são obrigatórios" });
    }
    const novo = ProdutoModel.create({ nome, marca, preco, categoria, cor, estoque, imagemUrl, descricao });
    res.status(201).json(novo);
  }
  update(req, res) {
    const { id } = req.params;
    const atualizado = FilmeModel.update(id, req.body);
    if (!atualizado) return res.status(404).json({ error: "Filme não encontrado" });
    res.json(atualizado);
  }
  delete(req, res) {
    const { id } = req.params;
    const resultado = FilmeModel.delete(id);
    if (!resultado) return res.status(404).json({ error: "Filme não encontrado" });
    res.status(204).end();
}
}

export default new FilmeController();