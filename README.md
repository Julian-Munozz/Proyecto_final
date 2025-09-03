# 📘 Proyecto Final Bootcamp – Blog de Hábitos  

## 📖 Descripción de la idea  
El proyecto consiste en el desarrollo de una página web tipo **blog de hábitos**, un espacio donde los usuarios puedan encontrar información sobre hábitos, sus beneficios y fundamentos científicos, además de poder compartir publicaciones relacionadas con su propia experiencia.  
El objetivo es crear una comunidad en torno al crecimiento personal y la construcción de hábitos positivos.  

---

## 📌 Avances de la Entrega 1  
En esta primera entrega se realizaron los siguientes pasos:  

1. **Creación de la base de datos en MongoDB Atlas**  
   - Se configuró la base de datos en la nube para permitir la conexión remota desde el proyecto.  

2. **Definición de modelos en Mongoose**  
   - **Modelo de Usuario**: incluye campos como nombre completo, email, contraseña, rol, bio, intereses, etc.  
   - **Modelo de Hábito**: incluye campos como título, categoría, descripción, beneficio, teoría (cue, craving, response, reward) y referencias científicas.  

3. **Configuración del servidor con Node.js y Express**  
   - Se creó un servidor básico en **localhost** que permite la conexión con la base de datos y la gestión de rutas iniciales.  
   - La conexión entre el servidor y MongoDB Atlas quedó correctamente enlazada en el código.  
