import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import { adapter, usersFeatureKey, UserState } from '../reducers/user.reducer';

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
const $selectUsersState = createFeatureSelector<UserState>(usersFeatureKey);


export const getUsersClassesEntitiesState = createSelector(
  $selectUsersState,
  state => state // vehicleFinder -> vehicleClasses (ids, entities, selectedVehicleClassId)
);

export const selectAllUsers = createSelector(getUsersClassesEntitiesState, selectAll); // vehicleFinder -> vehicleClasses (ids, entities, selectedVehicleClassId) -> selectAll

// export const $$users=  ($id: Selector<any, string | undefined>) => createSelector($selectUsersState)
export const $curUser = createSelector(
  $selectUsersState,
  ({ curUser }: UserState) => curUser
);

export const $$user = createSelector(
  selectEntities,
  (entities, { uid }: Partial<{ uid: string }>) => entities[uid]
);
