import { ActionType } from 'typesafe-actions';

import * as authActions from '../../modules/Auth/store/actions';

const rootAction = {
    auth: authActions,
};

export type RootAction = ActionType<typeof rootAction>;

export default rootAction;
