import FilmeModel from "../models/filmeModel.js";

class FilmeController {
  async getAll(req, res) {
    try {
      const filmeModel = new FilmeModel();
      const itens = await filmeModel.findAll();
      res.json(itens);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar filmes" });
    }
  }
  async getById(req, res) {
    try {
      const { id } = req.params;
      const filmeModel = new FilmeModel();
      const item = await filmeModel.findById(id);
      if (!item) return res.status(404).json({ error: "Filme não encontrado" });
      res.json(item);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar filme" });
    }
  }
  async create(req, res) {
    try {
      const { title, director, synopsis, indicativeRating, genre, duration, rating, releaseYear, image, watchUrl } = req.body;
      if (!title || !director || !synopsis || !genre || !duration || !rating || !releaseYear) {
        return res.status(400).json({ error: "Campos obrigatórios: title, director, synopsis, genre, duration, rating, releaseYear" });
      }
      
      // Validar e converter indicativeRating
      let validIndicativeRating = null;
      if (indicativeRating !== undefined && indicativeRating !== null && indicativeRating !== "") {
        const parsedRating = parseInt(indicativeRating);
        if (isNaN(parsedRating)) {
          return res.status(400).json({ error: "indicativeRating deve ser um número inteiro" });
        }
        validIndicativeRating = parsedRating;
      }
      
      const filmeModel = new FilmeModel();
      const novo = await filmeModel.create({ 
        title, 
        director, 
        synopsis, 
        indicativeRating: validIndicativeRating, 
        genre, 
        duration, 
        rating, 
        releaseYear,
        image,
        watchUrl 
      });
      res.status(201).json(novo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar filme" });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const updateData = { ...req.body };
      
      // Validar e converter indicativeRating se estiver presente
      if (updateData.indicativeRating !== undefined) {
        if (updateData.indicativeRating === null || updateData.indicativeRating === "") {
          updateData.indicativeRating = null;
        } else {
          const parsedRating = parseInt(updateData.indicativeRating);
          if (isNaN(parsedRating)) {
            return res.status(400).json({ error: "indicativeRating deve ser um número inteiro" });
          }
          updateData.indicativeRating = parsedRating;
        }
      }
      
      const filmeModel = new FilmeModel();
      const atualizado = await filmeModel.update(id, updateData);
      if (!atualizado) return res.status(404).json({ error: "Filme não encontrado" });
      res.json(atualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar filme" });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const filmeModel = new FilmeModel();
      const resultado = await filmeModel.delete(id);
      if (!resultado) return res.status(404).json({ error: "Filme não encontrado" });
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao deletar filme" });
    }
}
}

export default new FilmeController();

