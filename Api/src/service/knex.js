let conn;

const knexService = () => {
  if (!conn) {
    conn = "";
  }

  return conn;
};

export default knexService;

/**
 * Base para criar uma conexão 
 * 
 *  let conn;                    - iniciamos uma variavel 
 *
 * const knexService = () => {   - função 
 * if(!conn){                    - se não houver conn 
 *     conn = " ";               -  conn = "";
 * }
 *
 * return conn;                  - se hover retorne conn; 
 *}
 *
 *export default knexService;
 *
 */
