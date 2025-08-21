import{call , put, takeEvery, takeLatest} from 'redux-saga/effects';
import { getCatsSuccess } from '../Store/Slice/cartSlice';


function* getCats() {
     const cats = yield call(fetch, 'https://api.thecatapi.com/v1/breeds');
     const data = yield cats.json();
     const limitedCats = data.slice(0, 10);
     yield put(getCatsSuccess(limitedCats));
     console.log("Cats fetched successfully:", limitedCats);
}

function* catsSaga() {
     yield takeEvery('cats/getCatsFetch', getCats);
}

export default catsSaga;