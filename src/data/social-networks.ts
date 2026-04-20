import { config } from "./config";

interface SocialNetwork {
  name: string;
  href: string;
}

export const socialNetworks: SocialNetwork[] = [
  {
    name: "tabler:brand-tiktok-filled",
    href: "https://www.tiktok.com/@duartesdetailing",
  },
  {
    name: "tabler:brand-facebook-filled",
    href: "https://www.facebook.com/duartesautodetailing",
  },
  {
    name: "tabler:brand-instagram-filled",
    href: "https://www.instagram.com/duartes_detailing/",
  },
  {
    name: "tabler:brand-whatsapp-filled",
    href: `https://wa.me/${config.phoneUSE164}`,
  },
] as const;
