console.log('Ambiente: '+ process.env.DATABASE_URL)
module.exports = {
  "url": process.env.DATABASE_URL, 
  "type": "postgres",
  "entities": [
    process.env.ENTITIES_URL
 ],
 "migrations": [
  process.env.MIGRATIONS_URL
],
 "cli":{
  "migrationsDir": [
    "src/database/migrations"
  ],
  "entitiesDir": "src/models"
  }
}
