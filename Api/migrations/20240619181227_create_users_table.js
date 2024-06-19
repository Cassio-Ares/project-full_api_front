/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.bigIncrements("id");
    table.string("name");
    table.string("email");
    table.string("password");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
   return knex.schema.dropTable('users');
};

/**
 * Aqui vamos escrever o codigo de como queremos a estrutura da tabela no banco.
 *
 * dentro do up criamos a estrututura com nome e tipo de cada coluna
 *
 * return knex.schema.createTable('users(nome da tabela)', (table)=>{
 *      table.bigIncrements('id');                        table.tipo do dado(nome da coluna)
 *      table.string('name');
 *      table.string('email');
 *      table.string('password');
 *      table.timestamps(true, true);
 *})
 *
 *
 */
