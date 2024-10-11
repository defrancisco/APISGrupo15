const AuthController = {
    register: (req, res) => {
      // TODO
      res.status(201).send('Usuario registrado');
    },
    
    login: (req, res) => {
      // TODO
      res.status(200).json({ token: 'jwt_token_aqui' });
    },
  
    changePassword: (req, res) => {
      // TODO
      res.status(200).send('Contraseña actualizada');
    }
  };
  
  module.exports = AuthController;