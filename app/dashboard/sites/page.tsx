import { Button } from "@/components/ui/button";
import { FileIcon, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function SitesRoute() {
  return (
    <>
      <div className="flex w-full justify-end">
        <Button asChild>
          <Link href={"/dashboard/sites/new"}>
            {" "}
            <PlusCircle className="size-4" />
            Create Site
          </Link>
        </Button>
      </div>

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
            {" "}
            <PlusCircle className="size-4" />
            Create Site
          </Link>
        </Button>
      </div>
    </>
  );
}
