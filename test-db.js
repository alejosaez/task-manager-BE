const mongoose = require('mongoose');

const uri =
  'mongodb+srv://alejosaezgebicki:XEVv1dn9XFhb27lt@cluster0.uf3ya.mongodb.net/taskManager?retryWrites=true&w=majority';

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a MongoDB');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
  }
}

connectToDatabase();
