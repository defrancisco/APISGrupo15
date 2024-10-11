const UserController = {
    getProfile: (req, res) => {
      const { id } = req.params;
      // Buscar usuario en la base de datos
      res.json({ id, nombre: 'Nombre', apellido: 'Apellido', email: 'email@ejemplo.com' });
    },
    
    updateProfile: (req, res) => {
      const { id } = req.params;
      const { nombre, apellido, email } = req.body;
      // Lógica para actualizar perfil
      res.status(200).send('Perfil actualizado');
    }
  };
  
  module.exports = UserController;