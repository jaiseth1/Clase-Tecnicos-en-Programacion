import { query } from "express"
import { pool } from "../db.js"
//METODO obtener todos los aprendices
export const getAprendices = async(req,res) => {
    try{
        const [result] = await pool.query("select * from usuarios order by id desc");
        console.log("resultado: " + result[0])
        res.json(result);
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}
//METODO OBTENER UN APRENDIZ
export const getAprendiz = async(req, res) => {
    try{
        const [result] = await pool.query("select * from usuarios where id=?", 
        [req.params.id,]);
        if(result.length === 0){
            return res.status(404).json({message: "Aprendiz not found"})
        }
        res.json(result[0])
    }catch(error){
        return res.status(404).json({
            message: error.message,
        });
    }
}
//METODO CREAR
export const createAprendiz = async(req, res) => {
    try{
        const {nombre,cedula,celular} = req.body;
        const [result] = await pool.query("insert into usuarios(nombre,cedula,celular) values(?,?,?)",
            [nombre,cedula,celular]
        );
        res.json({
            id: result.insertId,
            nombre,
            cedula,
            celular
        });
    }catch(error){
        return res.status(404).json({
            message: error.message
        });
    }
}
//METODO EDITAR UN APRENDIZqw
export const editAprendiz = async(req, res) =>{
    try{
        const{nombre,cedula,celular}= req.body;
        const[result]= await pool.query("update usuarios set ? where id=?",
        [req.body, req.params.id]);
        return res.status(200).json(result)
    }catch(error){
        return res.status(404).json({
            message: error.message,
        });
    }
}
//METODO ELIMINAR UN APRENDIZ
export const deleteAprendiz = async(req, res) =>{
    try{
        const[result]= await pool.query("delete from usuarios where id=?",
            [req.params.id]
        );
        return res.status(200).json({message:"usuario eliminado"})
    }catch(error){
        return res.status(500).json({
            message: error.message,
        });
    }
}