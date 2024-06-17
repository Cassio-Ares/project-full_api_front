import { Router } from "express";
import { get, getAll, remove, save, update } from "./index.js";
//import { get, getAll, remove, save, update } from './user.model';

const router = Router();

router.get("/", async (_, res) => {
  const data = await getAll();
  return res.status(200).json({ data });
});

router.get("/:id", async (req, res) => {
  const data = await get(req.params.id);
  return res.status(200).json({ data });
});

router.post("/", async (req, res) => {
  const data = await save(req.body);
  return res.status(200).json({ data });
});

router.delete("/:id", async (req, res) => {
  const data = await remove(req.params.id);
  return res.status(200).json({ data });
});

router.put("/:id", async (req, res) => {
  const data = await update(req.params.id, req.body);
  return res.status(200).json({ data });
});

export default router;

/**
 * import { Router } from 'express';                                  -- importamos o recurso de rotas do express
 *import { get, getAll, remove, save, update } from './index.js';     -- importamos os models usando o index como ponte
 *import { get, getAll, remove, save, update } from './user.model';   -- importamos os models direto do user.model.js 

* const router = Router();                                            -- constante que carrega Router
*
*
*
*router.get('/', async (_, res)=>{      -- rota get 
  *  const data =  await getAll();        - usando o model de getALL 
  *  return res.status(200).json({data}); - return com status 200 = OK e return o json com os dados 
*});
*
*router.get('/:id', async(req, res)=>{
 *   const data = await get(req.params.id);
 *   return res.status(200).json({data});
*});
*
*router.post('/', async(req, res)=>{
 *   const data = await save(req.body);
 *   return res.status(200).json({data});
*});
*
*
*router.delete('/:id', async(req, res)=>{
 *   const data = await remove(req.params.id);
 *   return res.status(200).json({data});
*});
*
*
*router.put('/:id', async(req, res)=>{
 *   const data = await update(req.params.id, req.body);
 *  return res.status(200).json({data});
*});
*
*
*export default router;
 */
