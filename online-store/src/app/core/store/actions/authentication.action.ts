import { Action } from '@ngrx/store';

export namespace AuthenticationActions {
    export const LOGIN = 'LOGIN';

    export class LoginAction implements Action {
        readonly type = LOGIN;

        constructor(public payload: { username: string, password: string }) {

        }
    }
}