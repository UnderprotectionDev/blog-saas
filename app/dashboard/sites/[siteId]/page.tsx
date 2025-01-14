import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Book, FileIcon, PlusCircle, Settings } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getData(userId: string, siteId: string) {
  const data = await prisma.post.findMany({
    where: { userId: userId, siteId: siteId },
    select: {
      id: true,
      title: true,
      image: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return data;
}

export default async function SiteRoute({
  params,
}: {
  params: Promise<{ siteId: string }>;
}) {
  const { siteId } = await params;
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login");
  }

  const data = await getData(user.id, siteId);
  return (
    <>
      <div className="flex w-full justify-end gap-x-4">
        <Button asChild variant={"secondary"}>
          <Link href={`#`}>
            <Book className="size-4" /> View Blog
          </Link>
        </Button>
        <Button asChild variant={"secondary"}>
          <Link href={`#`}>
            <Settings className="size-4" /> Settings
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/dashboard/sites/${siteId}/create`}>
            <PlusCircle className="size-4" /> Create Article
          </Link>
        </Button>
      </div>

      {data === undefined || data.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
          <div className="flex size-20 items-center justify-center rounded-full border bg-primary/10">
            <FileIcon className="size-10 text-primary" />
          </div>
          <h2 className="mt-6 text-lg font-semibold">
            You don&apos;t have any Sites created
          </h2>
          <p className="mt-2 mb-8 text-sm text-muted-foreground leading-6 max-w-sm mx-auto">
            You currently don&apos;t have any Sites. Please create some so that
            you can see them right here!
          </p>

          <Button asChild>
            <Link href={"/dashboard/sites/new"}>
              <PlusCircle className="size-4" />
              Create Site
            </Link>
          </Button>
        </div>
      ) : (
        <div>
          <p>Posts</p>
        </div>
      )}
    </>
  );
}
