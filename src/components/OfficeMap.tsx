import { mapEmbedUrl, OFFICE } from "@/lib/about";

export function OfficeMap({ title }: { title: string }) {
  return (
    <div className="card overflow-hidden">
      <iframe
        title={title}
        src={mapEmbedUrl()}
        className="h-72 w-full border-0 md:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="border-t border-grand-700/50 px-4 py-3 text-center text-xs text-gray-500">
        {OFFICE.operational.street}, {OFFICE.operational.district} — {OFFICE.operational.city}
      </p>
    </div>
  );
}
