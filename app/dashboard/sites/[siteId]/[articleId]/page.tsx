import { EditArticleForm } from "@/app/components/dashboard/forms/edit-article-form";
import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(postId: string) {
  const data = await prisma.post.findUnique({
    where: {
      id: postId,
    },
    select: {
      title: true,
      image: true,
      smallDescription: true,
      slug: true,
      articleContent: true,
      id: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function ArticleEditRoute({
  params,
}: {
  params: Promise<{ siteId: string; articleId: string }>;
}) {
  const { siteId, articleId } = await params;
  const data = await getData(articleId);
  return (
    <div>
      <div className="flex items-center">
        <Button size={"icon"} variant={"outline"} className="mr-3" asChild>
          <Link href={`/dashboard/sites/${siteId}`}>
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-semibold">Edit Article</h1>
      </div>
      <EditArticleForm data={data} siteId={siteId} />
    </div>
  );
}
