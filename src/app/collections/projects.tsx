import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
	slug: "projects",
	upload: {
		staticDir: "media",
		resizeOptions: {
			width: 1280,
			height: 720,
			fit: "cover",
		},
		adminThumbnail: "thumbnail",
		mimeTypes: ["image/*"],
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "description",
			type: "text",
			required: true,
		},
		{
			name: "tags",
			type: "select",
			required: true,
			hasMany: true,
			options: [
				{ label: "Web", value: "Web" },
				{ label: "Mobile", value: "Mobile" },
			],
		},
		{
			name: "githubUrl",
			type: "text",
			required: true,
		},
		{
			name: "previewUrl",
			type: "text",
			required: true,
		},
	],
	access: {
		read: () => true,
	},
};
