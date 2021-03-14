import {UserInterface} from '../../user/shared/interfaces/user.interface';

export interface UserState {
  users: UserInterface[];
  selectedUser: UserInterface;
  me: UserInterface;
}

export const initialUserState: UserState = {
  users: [],
  selectedUser: null,
  me: null
};
