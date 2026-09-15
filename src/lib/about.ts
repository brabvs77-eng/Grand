export const TEAM_MEMBERS = [
  { id: "marcos-silva", image: "/about/marcos-silva.png" },
  { id: "elena-volkova", image: "/about/elena-volkova.png" },
  { id: "james-morrison", image: "/about/james-morrison.png" },
  { id: "dmitry-petrov", image: "/about/dmitry-petrov.png" },
  { id: "camila-santos", image: "/about/camila-santos.png" },
  { id: "rustam-karimov", image: "/about/rustam-karimov.png" },
  { id: "maria-reyes", image: "/about/maria-reyes.png" },
] as const;

export const TEAM_HERO_IMAGE = "/about/team-group.png?v=3";

export const OFFICE = {
  legalName: "Grand Poker Clubs Network Brasil LTDA",
  cnpj: "42.891.037/0001-58",
  stateRegistration: "SP 142.891.037.112",
  legal: {
    street: "Rua Funchal, 411, Conjunto 82, 8º andar",
    district: "Vila Olímpia",
    city: "São Paulo",
    state: "SP",
    cep: "04551-060",
    country: "Brazil",
  },
  operational: {
    street: "Av. Brigadeiro Faria Lima, 3477, Torre A, 12º andar",
    district: "Itaim Bibi",
    city: "São Paulo",
    state: "SP",
    cep: "04538-133",
    country: "Brazil",
  },
  hours: "Mon–Fri 10:00–19:00 (BRT)",
  phone: "+55 11 3197-4072",
  email: "office@grandpoker.br",
  map: {
    lat: -23.5865,
    lon: -46.6868,
    zoom: 16,
  },
} as const;

export function mapEmbedUrl() {
  const { lat, lon, zoom } = OFFICE.map;
  const delta = 0.006 / (zoom / 14);
  const bbox = `${lon - delta},${lat - delta * 0.6},${lon + delta},${lat + delta * 0.6}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${lat}%2C${lon}`;
}
