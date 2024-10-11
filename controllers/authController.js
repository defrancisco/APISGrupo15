const AuthController = {
    register: (req, res) => {
      // Lógica de registro
      res.status(201).send('Usuario registrado');
    },
    
    login: (req, res) => {
      // Lógica de login
      res.status(200).json({ token: 'jwt_token_aqui' });
    },
  
    changePassword: (req, res) => {
      // Lógica para cambiar la contraseña
      res.status(200).send('Contraseña actualizada');
    }
  };
  
  module.exports = AuthController;