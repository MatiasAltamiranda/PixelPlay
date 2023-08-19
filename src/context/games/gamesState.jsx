import { useReducer } from "react";
import GamesContext from "./gamesContext";
import GameReducer from "./gamesReducer";
import clientAxios from "../../config/axios";

import {
  UPLOAD_GAME,
  UPLOAD_GAME_SUCCESS,
  UPLOAD_GAME_ERROR,
  GET_GAMES_CATEGORY,
  GET_GAME,
  GET_GAMES,
  DELETE_GAME,
  GETONEGAME,
} from "../../actions";

const GameState = (prop) => {
  const { children } = prop;

  const initialState = {
    games: [],
    currentGame: null,
    error: null,
    loading: false,
    userCart : []
  };

  const [state, dispatch] = useReducer(GameReducer, initialState);

  const createGame = async (data) => {
    try {
      dispatch({ type: UPLOAD_GAME });
      const response = await clientAxios.post("/api/v1/games", data);
      console.log("AQUI EL RESPONSE");
      console.log(response);
      dispatch({ type: UPLOAD_GAME_SUCCESS, payload: response.data.game });
    } catch (error) {
      dispatch({ type: UPLOAD_GAME_ERROR });
    }
  };

  const getGamesCategory = async (category) => {
    try {
      const response = await clientAxios.get(
        `/api/v1/games/category/${category}`
      );
      dispatch({ type: GET_GAMES_CATEGORY, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getGame = async (slug) => {
    try {
      const response = await clientAxios.get(`/api/v1/games/game/${slug}`);
      dispatch({ type: GET_GAME, payload: response.data.game });
      return response.data.game;
    } catch (error) {
      console.log(error);
    }
  };

  const getGames = async () => {
    try {
      const response = await clientAxios.get("/api/v1/games/");
      dispatch({ type: GET_GAMES, payload: response.data.Games });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGame = async (id) => {
    try {
      const response = await clientAxios.delete(`/api/v1/games/${id}`);
      dispatch({ type: DELETE_GAME });
    } catch (error) {
      console.log(error);
    }
  };

  const getOneGame = async (id) => {
    try {
      const response = await clientAxios.get(`/api/v1/games/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const updateGame = async (id, data) => {
    try {
      const response = await clientAxios.put(`/api/v1/games/${id}`, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const addGameCart = async (id) => {
    try {
      const response = await clientAxios.post(`/api/v1/carrito/agregar/${id}`);
      return response;
    } catch (error) {
      console.log(error)
      return(error.response.data.error);
    }
  };

  const getCartUser =  async () => {
    try {
      const response = await clientAxios.get(`/api/v1/carrito/getCarUser`);
      dispatch({ type: "GET_CART", payload: response.data.carrito });
      return response
    } catch (error) {
      return(error);
    }
  };

  const deleteItemCartUser =  async (id) => {
    try {
      const response = await clientAxios.delete(`/api/v1/carrito/delete/${id}`);
      return response;
    } catch (error) {
      return(error);
    }
  };

  return (
    <GamesContext.Provider
      value={{
        ...state,
        createGame,
        getGamesCategory,
        getGame,
        getGames,
        deleteGame,
        getOneGame,
        updateGame,
        addGameCart,
        getCartUser,
        deleteItemCartUser
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export default GameState;
