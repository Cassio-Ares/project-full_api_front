import knex from "../../service/knex.js";

export const getall = () => {
  return knex("users");
};

export const get = (id) => {
  return knex("users").where({ id }).first();
};

export const save = ({ params }) => {
  return knex("users").insert(params);
};

export const remove = (id) => {
  return knex("users").delete({ id });
};

export const update = (id, params) => {
  return knex("users").where({ id }).update({ params });
};

/**
 * import knex from "../../service/knex.js";  -trago a conexão com banco de dados
 *
 *   export const getAll = () =>{                        - getAll
 *      return knex('users')                         =      select * from users;
 *   };
 *
 *   export const get = (id) =>{                         - get(id)
 *      return knex('users').where({id}).first();    =     select * from users where id = XX limit 1;
 *    };
 *
 *   export const save = (params) =>{                    - save(params)
 *    return knex('users').insert(params);           =      insert into users (colunas) values(valores para as colunas);
 *   };                                                     insert into users (name, email) values ('teste', 'teste@test.com');
 *
 *   export const remove = (id) =>{                      - remove 
 *    return knex('users').delete({id});             =       delete from users where id = XX;         
 *   };                              
 *
 *   export const update = (id, params) =>{              - update(id, params)
 *    return knex('users').where({id}).update(params); =  update users set columnX = valueX where id = XX
 *   };
 *
 */
