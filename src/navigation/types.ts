import {Screens} from './screens';

export namespace StackParams {
  export type Main = {
    [Screens.Welcome]: undefined;
    [Screens.Tabs]: undefined;
  };

  export type Game = {
    [Screens.GameLevel]: undefined;
    [Screens.GameSetup]: undefined;
    [Screens.Game]: {level: number};
    [Screens.GameVoting]: undefined;
    [Screens.GameSummary]: undefined;
  };

  export type Tabs = {
    [Screens.GameStack]: undefined;
    [Screens.Rating]: undefined;
    [Screens.Album]: undefined;
    [Screens.Achievements]: undefined;
    [Screens.Profile]: undefined;
  };
}
