import { MANAGE_ALL_PERSONASIMPORT } from 'lib/constants/orgScopes';
import getGlobalModelFilter from 'lib/services/auth/filters/getGlobalModelFilter';

export default getGlobalModelFilter({
  manageAllScope: MANAGE_ALL_PERSONASIMPORT
});