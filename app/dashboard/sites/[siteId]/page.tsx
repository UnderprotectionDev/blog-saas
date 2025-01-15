import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  Book,
  FileIcon,
  MoreHorizontal,
  PlusCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EmptyState } from "@/app/components/dashboard/forms/empty-state";

async function getData(userId: string, siteId: string) {
  const data = await prisma.site.findUnique({
    where: {
      id: siteId,
      userId: userId,
    },
    select: {
      subdirectory: true,
      posts: {
        select: {
          image: true,
          title: true,
          createdAt: true,
          id: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
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
          <Link href={`/blog/${data?.subdirectory}`}>
            <Book className="size-4" /> View Blog
          </Link>
        </Button>
        <Button asChild variant={"secondary"}>
          <Link href={`/dashboard/sites/${siteId}/settings`}>
            <Settings className="size-4" /> Settings
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/dashboard/sites/${siteId}/create`}>
            <PlusCircle className="size-4" /> Create Article
          </Link>
        </Button>
      </div>

      {data?.posts === undefined || data.posts.length === 0 ? (
        <EmptyState
          title="You dont have any Articles created"
          description="You currently dont have any articles. please create some so that you can see them right here"
          buttonText="Create Article"
          href={`/dashboard/sites/${siteId}/create`}
        />
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Articles</CardTitle>
            <CardDescription>
              Manage your Articles in a simple and intuitive interface
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.posts.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Image
                        src={item.image}
                        alt={"Article Cover Image"}
                        width={64}
                        height={64}
                        className="size-16 rounded-md object-cover"
                      />
                    </TableCell>

                    <TableCell className="font-medium">{item.title}</TableCell>

                    <TableCell>
                      <Badge variant={"outline"} className="bg-green-500/10">
                        Published
                      </Badge>
                    </TableCell>

                    <TableCell>
                      {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      }).format(item.createdAt)}
                    </TableCell>

                    <TableCell className="text-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <MoreHorizontal className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem asChild>
                            <Link
                              href={`/dashboard/sites/${siteId}/${item.id}`}
                            >
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link
                              href={`/dashboard/sites/${siteId}/${item.id}/delete`}
                            >
                              Delete
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </>
  );
}
