import { createStore, applyMiddleware, combineReducers } from 'redux'
import { defaultState } from '../../server/defaultState'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

import * as sagas from './sagas.mock'
import * as mutation from './mutation'

export const store = createStore(
    combineReducers({
        tasks(tasks = defaultState.tasks, actions) {
            switch(actions.type) {
                case mutation.CREATE_TASK:
                    console.log('actions', actions)
                    return [
                        ...tasks,
                        {
                            id: actions.taskID,
                            name: "New Task",
                            group: actions.groupID,
                            owner: actions.ownerID,
                            isComplete: false
                        }
                    ]
            }
            return tasks
        },
        comments(comments = defaultState.comments, actions) {
            return comments
        },
        groups(groups = defaultState.groups , actions) {
            return groups
        },
        users(users = defaultState.users , actions) {
            return users
        },
    }),
    applyMiddleware(logger, sagaMiddleware)
)

for(let saga in sagas) {
    sagaMiddleware.run(sagas[saga])
}