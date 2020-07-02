import { createAsyncAction } from 'typesafe-actions';
import { Error } from '../../../services/types';
import { GetRootSuccessResult } from './types';

export const getRoot = createAsyncAction(
    '@root/GET_ROOT',
    '@root/GET_ROOT_SUCCESS',
    '@root/GET_ROOT_FAILURE',
    '@root/GET_ROOT_CANCEL'
)<void, GetRootSuccessResult, Error>();
