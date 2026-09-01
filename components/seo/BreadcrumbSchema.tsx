import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbListSchema, type SchemaCrumb } from "@/lib/seo/schema";

export function BreadcrumbSchema({ items }: { items: SchemaCrumb[] }) {
  return <JsonLd data={breadcrumbListSchema(items)} />;
}
