import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
	slug: "projects",
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'card',
        width: 720,
        height: 1280,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
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
};
