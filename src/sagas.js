import { put, takeEvery, all } from 'redux-saga/effects'

function* addItem() {
    //yield put({ type: 'addItem' })
}
function* watchAddItem() {
    yield takeEvery('addItem', addItem)
}

function* editItem() {
    //yield put({ type: 'editItem' })
}
function* watchEditItem() {
    yield takeEvery('editItem', editItem)
}

function* deleteItem() {
    //yield put({ type: 'deleteItem' })
}
function* watchDeleteItem() {
    yield takeEvery('deleteItem', editItem)
}

export default function* rootSaga() {
    yield all([
        watchAddItem(),
        watchEditItem(),
        watchDeleteItem()
    ])
}