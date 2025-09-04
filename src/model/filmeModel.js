import prisma from "../../prisma/prisma.js";

// Array para armazenar os filmes em memória
 let filmes = [
  {
    id: 1,
    title: "A hora do Mal",
    director: "Zach Cregger",
    duration: "2h 8m",
    rating: 7.8,
    genre: "Terror",
    releaseYear: 2025,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
let nextId = 2;

class FilmeModel {
  findAll() {
    return filmes;
  }
  findById(id) {
    return filmes.find((p) => p.id === Number(id)) || null;
}
create({title, director, duration, rating, genre, releaseYear}) {
  const novo = {
    id: nextId++,
   title, director, duration, rating, genre, releaseYear,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  filmes.push(novo);
  return novo;
}
update(id, data) {
  const p = this.findById(id);
  if (!p) return null;
  Object.assign(p, data, { updatedAt: new Date() });
  return p;
}
delete(id) {
  const tem = this.findById(id);
  if (!tem) return null;
  filmes = filmes.filter((p) => p.id !== Number(id));
  return true;
}
}

export default new FilmeModel ();
