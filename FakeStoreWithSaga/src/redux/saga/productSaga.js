import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { fetchProductApi } from '../API/productApi'
import { fetchProductsRequest, fetchProductsSuccess, fetchProductsFailure } from "../reducers/productReducer";



// worker function
function* fetchProducts() {
    try {
        const response = yield call(fetchProductApi);
        yield put(fetchProductsSuccess(response.data));
    }
    catch (error) {
        yield put(fetchProductsFailure(error.message));
    }
}

// watcher function
function* productSaga() {
    yield takeLatest(fetchProductsRequest.type, fetchProducts);
}

export default productSaga;



