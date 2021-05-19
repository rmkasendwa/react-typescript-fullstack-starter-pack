import { DO_ACTION } from './types';

export interface IDoAction {
  type: string;
}

export const doAction = (): IDoAction => {
  return {
    type: DO_ACTION,
  };
};
