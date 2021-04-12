import { v4 as uuidv4 } from 'uuid'
import { take, put, select } from 'redux-saga/effects';
import * as mutation from './mutation';

export function* taskCreationSaga(){
    while (true){
        const {groupID} = yield take(mutation.REQUEST_TASK_CREATION);
        const ownerID = 'U1';
        const taskID = uuidv4();
        yield put(mutation.createTask(taskID, groupID, ownerID));
        console.log("Got group ID", groupID);
    }
}