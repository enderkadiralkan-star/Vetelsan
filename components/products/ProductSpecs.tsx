type Spec = { label: string; value: string };

export function ProductSpecs({
  title,
  specs,
}: {
  title: string;
  specs: Spec[];
}) {
  if (specs.length === 0) return null;

  return (
    <div className="mt-7">
      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">
        {title}
      </p>
      <dl className="mt-4 divide-y divide-line border-y border-line">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] sm:gap-6 sm:py-4"
          >
            <dt className="break-words text-[13px] text-muted sm:text-[14px]">{spec.label}</dt>
            <dd className="break-words text-[14px] font-medium text-ink sm:text-right">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
