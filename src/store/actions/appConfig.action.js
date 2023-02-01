import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataBase } from '../../db';
export const fetchAppConfig = (dispatch) => {
    fetchDataBase().then((data) => dispatch({ type: 'THEMEFETCHED', data }));
};
