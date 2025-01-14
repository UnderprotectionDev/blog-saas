"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { PostSchema, siteSchema } from "./utils/zod-schemas";
import { parseWithZod } from "@conform-to/zod";
import prisma from "./utils/db";
import { requireUser } from "./utils/requireUser";

export async function CreateSiteAction(prevState: unknown, formData: FormData) {
  const user = await requireUser();

  const submission = parseWithZod(formData, {
    schema: siteSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const { name, subdirectory, description } = submission.value;

  const response = await prisma.site.create({
    data: {
      name,
      subdirectory,
      description,
      userId: user.id,
    },
  });

  return redirect(`/dashboard/sites`);
}

export async function CreatePostAction(prevState: unknown, formData: FormData) {
  const user = await requireUser();

  const submission = parseWithZod(formData, {
    schema: PostSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const { title, slug, smallDescription, coverImage, articleContent } =
    submission.value;

  const response = await prisma.post.create({
    data: {
      title,
      slug,
      smallDescription,
      image: coverImage,
      articleContent: JSON.parse(articleContent),
      userId: user.id,
      siteId: formData.get("siteId") as string,
    },
  });

  return redirect(`/dashboard/sites/${formData.get("siteId")}`);
}
