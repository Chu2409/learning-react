import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE: UserWithId[] = [
	{
		id: "1",
		name: "John Doe",
		email: "john@mail.com",
		github: "johndoe",
	},
	{
		id: "2",
		name: "Albert Einstein",
		email: "albert@mail.com",
		github: "alberteinstein",
	},
	{
		id: "3",
		name: "Juan Francisco",
		email: "juan@mail.com",
		github: "juanfrancisco",
	},
	{
		id: "4",
		name: "Daniel Zhu",
		email: "daniel@gmail.com",
		github: "Chu2409",
	},
];

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			state.push({ ...action.payload, id });
		},

		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},

		rollBackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id,
			);
			if (!isUserAlreadyDefined) {
				state.push(action.payload);
			}
		},
	},
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, rollBackUser } = usersSlice.actions;
