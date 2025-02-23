import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		reactCompiler: false,
	},
};

export default withPayload(nextConfig);
