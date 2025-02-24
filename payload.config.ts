import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { buildConfig } from "payload";
import { Projects } from "@/app/collections/projects";
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

export default buildConfig({
	editor: lexicalEditor(),
	collections: [Projects],
	secret: process.env.PAYLOAD_SECRET || "",
	db: vercelPostgresAdapter({
		pool: {
			connectionString: process.env.DATABASE_URL,
		},
	}),
	sharp,
	plugins: [
		vercelBlobStorage({
			collections: {
				projects: true,
			},
			token: process.env.BLOB_READ_WRITE_TOKEN,
		}),
	],
});
