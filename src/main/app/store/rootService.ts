import * as authService from '../../services/auth';

const rootService = {
    auth: authService,
};

export type RootService = typeof rootService;

export default rootService;
