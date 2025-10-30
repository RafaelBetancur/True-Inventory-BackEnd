const { sequelize } = require('./config/env.config')
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error.message);
  } finally {
    await sequelize.close();
  }
}

testConnection();