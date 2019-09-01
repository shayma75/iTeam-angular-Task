import { Action } from '@ngrx/store';
import { Tutorial } from './../app/models/toutorial.models';
import * as TutorialActions from '../actions/toutorial.actions';

const initialState : Tutorial = {
name:'Initial Tutorial',
url:'http://google.com',
}

export function reducer(state:Tutorial[]=[initialState],action:TutorialActions.Actions){
    switch(action.type){
        case TutorialActions.ADD_TUTORIAL:
        return[...state,action.payloade];

        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payloade, 1)
        return state;
        default:
            return state;
    }
}