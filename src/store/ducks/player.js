import Immutable from 'seamless-immutable';
import { createReducer, createActions } from 'reduxsauce';

// As Types e Action Creators

const { Types, Creators } = createActions({
  // Ação quando o usuário clicar em REPRODUZIR ou ao clicar em algum episodio que são a lista de audios
  // O success serão as informações atuais, quando começar a tocar o podcast.
  setPodcastRequest: ['podcast', 'episodeId'],
  setPodcastSuccess: ['podcast'],
});

export const PlayerTypes = Types;
export default Creators;

// Initial State
// podcast é completo e atual
// current: o episodio atual
export const INITIAL_STATE = Immutable({
  podcast: null,
  current: null,
});

// Reducers para uso de types
// Recebemos ,,,state e o podcast dentro e damos um state.merge passando o podcast
// E o current atual, iremos acessar o podcast, iremos pegar quais são suas tracks
// Que vou pegar a primeira que é o seu id.
// Ou seja, toda vez que eu clicar em reproduzir, seto o meu podcast e depois seto o audio atual com o seu id.
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PODCAST_SUCCESS]: (state, { podcast }) => state.merge({ podcast, current: podcast.tracks[0].id }),
});
