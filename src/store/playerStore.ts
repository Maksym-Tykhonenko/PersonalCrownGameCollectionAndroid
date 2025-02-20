import {create} from 'zustand';

export type Player = {
  id: number;
  name: string;
  gender?: string;
  points: number;
};

type Vote = {
  question: string;
  playerName: string;
};

type PlayerStore = {
  players: Player[];
  votes: Vote[];
  punishment: string | null;
  addPlayer: (player: Player) => void;
  addPoints: (playerName: string, points: number) => void;
  submitVote: (vote: Vote) => void;
  savePunishment: (punishment: string) => void;
};

export const usePlayerStore = create<PlayerStore>(set => ({
  players: [],
  votes: [],
  punishment: null,

  addPlayer: player =>
    set(state => ({
      players: [...state.players, {...player, points: 0}],
    })),

  addPoints: (playerName, points) =>
    set(state => ({
      players: state.players.map(player =>
        player.name === playerName
          ? {...player, points: player.points + points}
          : player,
      ),
    })),

  submitVote: vote =>
    set(state => ({
      votes: [...state.votes, vote],
    })),

  savePunishment: (punishment: string) => set({punishment}),
}));
