import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))


function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* addItem() {
    yield delay(1000)
    console.log('add item tripped from saga');
    yield put({ type: 'addItem' })
}

function* watchAddItem() {
    //yield takeEvery('addItem', addItem)
}

export default function* rootSaga() {
    yield all([
        watchIncrementAsync(),
        watchAddItem()
    ])
}