import prisma from "../../prisma/prisma.js";



class FilmeModel {
  async findAll() {
    const filmes = await prisma.filme.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    return filmes;
  }

  async findById(id) {
    const filme = await prisma.filme.findUnique({
      where: {
        id: Number(id)
      }
    });
    return filme;
  }

  async create({ title, director, synopsis, genre, duration, rating, releaseYear }) {
    const filme = await prisma.filme.create({
      data: {
        title, 
        director, 
        synopsis, 
        genre, 
        duration, 
        rating, 
        releaseYear
      }
    });
    return filme;
  }

  async update(id, data) {
    const filme = await prisma.filme.update({
      where: {
        id: Number(id)
      },
      data: {
        ...data,
        updatedAt: new Date()
      }
    });
    return filme;
  }

  async delete(id) {
    await prisma.filme.delete({
      where: {
        id: Number(id)
      }
    });
    return true;
  }
}

export default FilmeModel;
