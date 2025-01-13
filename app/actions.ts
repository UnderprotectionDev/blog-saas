"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { siteSchema } from "./utils/zod-schemas";
import { parseWithZod } from "@conform-to/zod";
import prisma from "./utils/db";

export async function CreateSiteAction(prevState: unknown, formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

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
