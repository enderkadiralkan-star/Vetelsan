type Spec = { label: string; value: string };

export function MedicineSpecs({ items }: { items: Spec[] }) {
  const visible = items.filter((item) => item.value);
  if (visible.length === 0) return null;

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 border-t border-line pt-7 sm:grid-cols-2 sm:gap-8">
      {visible.map((item) => (
        <div key={item.label} className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            {item.label}
          </p>
          <p className="mt-2 text-[16px] font-medium tracking-tight text-ink sm:text-[17px]">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
