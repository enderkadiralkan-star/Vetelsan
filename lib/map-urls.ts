import { mapLocation } from "./site";

export function getMapEmbedSrc(locale: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(mapLocation.query)}&hl=${locale}&z=${mapLocation.zoom}&output=embed`;
}

export function getMapDirectionsHref() {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapLocation.query)}`;
}

export function getMapViewHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapLocation.query)}`;
}
