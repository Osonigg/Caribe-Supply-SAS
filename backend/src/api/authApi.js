// src/api/authApi.js

// Simulación de una base de datos
const USERS_KEY = "caribeSupply_users";

// Función para obtener usuarios del localStorage
const getUsers = () => {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

// Registrar usuario
export const registerUser = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = getUsers();

      // Validar si el correo ya existe
      if (users.some(u => u.email === userData.email)) {
        reject({ message: "Este correo ya está registrado." });
        return;
      }

      users.push(userData);
      localStorage.setItem(USERS_KEY, JSON.stringify(users));

      resolve({ message: "Usuario registrado con éxito." });
    }, 700);
  });
};

// Login
export const loginUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = getUsers();
      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        reject({ message: "Credenciales incorrectas." });
      } else {
        resolve({ message: "Login exitoso", user });
      }
    }, 600);
  });
};
