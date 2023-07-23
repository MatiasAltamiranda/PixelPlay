import {
  UPLOAD_GAME,
  UPLOAD_GAME_SUCCESS,
  UPLOAD_GAME_ERROR,
  GET_GAMES_CATEGORY,
  GET_GAME,
  GET_GAMES,
  DELETE_GAME,
} from "../../actions";

const GameReducer = (state, action) => {
  switch (action.type) {
    case UPLOAD_GAME:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        games: Array.isArray(state.games)
          ? [...state.games, action.payload]
          : [action.payload],
      };
    case UPLOAD_GAME_ERROR:
      return {
        ...state,
        loading: false,
        error: "Sucedio un error al subir el producto",
      };
    case GET_GAMES_CATEGORY:
      return {
        ...state,
        games: Array.isArray(action.payload)
          ? action.payload
          : [action.payload],
        loading: true,
      };
    case GET_GAME:
      return {
        ...state,
        games: action.payload,
        loading: true,
      };
    case GET_GAMES:
      return {
        ...state,
        games: Array.isArray(action.payload)
        ? action.payload
        : [action.payload],
        loading: true
      };
      case DELETE_GAME:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default GameReducer;
