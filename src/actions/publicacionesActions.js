import axios from "axios";
import { TRAER_POR_USUARIO, CARGANDO, ERROR } from "../types/publicacionesTypes";

export const traerPorUsuario = (key) => async (dispatch, getState) => {
  //El usuario_id es el valor que tiene el objeto en la API
  const { usuarios } = getState().usuariosReducer;
  const { publicaciones } = getState().publicacionesReducer;
  const usuario_id = usuarios[key].id;

  const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`);
  const publicaciones_actializadas = [
    ...publicaciones,
    respuesta.data,
  ]

  dispatch({
    type: TRAER_POR_USUARIO,
    payload: publicaciones_actializadas,
  })
}