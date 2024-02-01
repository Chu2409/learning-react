import { Badge, Button, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUsersActions } from "../hooks/useUsersActions";
import { User } from "../store/users/slice";

export const CreateNewUser = () => {
	const { addUser } = useUsersActions();
	const [result, setResult] = useState<"ok" | "ko" | null>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setResult(null);

		const form = e.currentTarget;
		const formData = new FormData(form);

		const user: User = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			github: formData.get("github") as string,
		};

		if (!user.name || !user.email || !user.github) {
			setResult("ko");
			return;
		}

		addUser(user);
		setResult("ok");
		form.reset();
	};

	return (
		<div style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>

			<form onSubmit={handleSubmit}>
				<TextInput name="name" placeholder="Aqui el nombre" />
				<TextInput name="email" placeholder="Aqui el email" />
				<TextInput name="github" placeholder="Aqui el usuario de GitHub" />

				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Crear Usuario
					</Button>

					<span>
						{result === "ok" && (
							<Badge color="green">Guardado correctamente</Badge>
						)}

						{result === "ko" && <Badge color="red">Error con los campos</Badge>}
					</span>
				</div>
			</form>
		</div>
	);
};
