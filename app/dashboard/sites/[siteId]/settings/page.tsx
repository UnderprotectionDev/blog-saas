import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { UploadImageForm } from "@/app/components/dashboard/forms/upload-image-form";
import { DeleteSite } from "@/app/actions";
import { SubmitButton } from "@/app/components/dashboard/submit-button";

export default async function SiteSettingsRoute({
  params,
}: {
  params: { siteId: string };
}) {
  const { siteId } = await params;
  return (
    <>
      <div className="flex items-center gap-x-2">
        <Button variant={"outline"} size={"icon"} asChild>
          <Link href={`/dashboard/sites/${siteId}`}>
            <ChevronLeft className="size-4" />
          </Link>
        </Button>
        <h3 className="text-xl font-semibold">Go back</h3>
      </div>

      <UploadImageForm siteId={siteId} />

      <Card className="border-red-500 bg-red-500/10">
        <CardHeader>
          <CardTitle className="text-red-500">Danger</CardTitle>
          <CardDescription>
            This will delete your site and all articles associated with it.
            Click the button below to delete everything
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <form action={DeleteSite}>
            <input type="hidden" name="siteId" value={siteId} />
            <SubmitButton text="Delete Everything" variant={"destructive"} />
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
