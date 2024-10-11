const GameController = {
    getAllGames: (req, res) => {
      // Obtener lista de juegos desde la base de datos
      res.json([{ id: 1, nombre: 'Juego 1', precio: 50 }, { id: 2, nombre: 'Juego 2', precio: 40 }]);
    },
  
    createGame: (req, res) => {
      const nuevoJuego = req.body;
      // Lógica para crear nuevo juego
      res.status(201).send('Juego creado');
    },
  
    updateGame: (req, res) => {
      const { id } = req.params;
      const juegoActualizado = req.body;
      // Lógica para actualizar juego
      res.status(200).send(`Juego con ID ${id} actualizado`);
    },
  
    deleteGame: (req, res) => {
      const { id } = req.params;
      // Lógica para eliminar juego
      res.status(200).send(`Juego con ID ${id} eliminado`);
    }
  };
  
  module.exports = GameController;