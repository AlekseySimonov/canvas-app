import { EditorPage } from "@/pages/editorPage";
import { Base } from "@/widgets/base";
import { createBrowserRouter, Navigate } from "react-router"

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Base />,
		children: [
			{ index: true, element: <Navigate to="editor" replace /> },
			{ path: "editor", element: <EditorPage /> },
		],
	},
	{
		path: "*",
		element: (
			<Navigate to="/" replace />
		),
	},
]
);