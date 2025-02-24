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
			type: "textarea",
			required: true,
		},
		{
			name: "tag",
			type: "select",
			options: [
				{ label: "Web", value: "Web" },
				{ label: "Mobile", value: "Mobile" },
			],
		},
	],
	access: {
		read: () => true,
	},
};
