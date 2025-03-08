import { NextApiRequest, NextApiResponse } from "next";
import { getPayload } from "payload";
import config from "@payload-config";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const payload = await getPayload({ config });
		const data = await payload.find({
			collection: "projects",
			select: {
				title: true,
				description: true,
				tags: true,
				filename: true,
			},
		});
		res.status(200).json(data);
	} catch (error) {
		console.error("Error fetching projects data:", error);
		res.status(500).json({ error: "Error fetching projects data" });
	}
}
