import {call,put,takeLatest} from 'redux-saga/effects';
import * as constants from './constants';

function* fetchQuotes() {
    const res = yield fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    const data = yield res.json();
    return data.quotes;
}

function* doFetchQuotes(){
    try{
        const quotes = yield call(fetchQuotes);
        //const quotes = yield fetchQuotes();
        yield put({type : constants.API_CALL_SUCCESS, payload: quotes})
    }
    catch(e){
        yield put({type : constants.API_CALL_FAILURE, payload: e.message})
    }
}

function* saga(){
yield takeLatest(constants.API_CALL_REQUEST, doFetchQuotes);
}

export default saga;