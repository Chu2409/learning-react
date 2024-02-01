import { Middleware, configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducers, { rollBackUser } from "./users/slice";

const persistenceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
	};

const syncWithDatabaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		const prevState = store.getState();

		const { type, payload } = action;

		next(action);

		if (type === "users/deleteUserById") {
			const userToRemove = prevState.users.find((user) => user.id === payload);

			fetch(`https://jsonplaceholder.typicode.com/users/${payload.id}`, {
				method: "DELETE",
			})
				.then((res) => {
					if (res.ok) toast.success("User deleted successfully!");
				})
				.catch(() => {
					toast.error("Error deleting user");
					if (userToRemove) store.dispatch(rollBackUser(userToRemove));
					console.log("error");
				});
		}
	};

export const store = configureStore({
	reducer: {
		users: usersReducers,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(persistenceLocalStorageMiddleware)
			.concat(syncWithDatabaseMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
