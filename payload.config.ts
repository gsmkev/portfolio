import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import { buildConfig } from "payload";
import { Projects } from "@/app/collections/projects";

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
});
