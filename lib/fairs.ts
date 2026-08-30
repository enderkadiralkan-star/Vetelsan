export type FairPhoto = {
  src: string;
  captionKey:
    | "home.fairsCaptionStand"
    | "home.fairsCaptionDisplay"
    | "home.fairsCaptionCyprus"
    | "home.fairsCaptionIran"
    | "home.fairsCaptionAdana";
};

export const fairPhotos: FairPhoto[] = [
  {
    src: "/images/fairs/stand-genel.png",
    captionKey: "home.fairsCaptionStand",
  },
  {
    src: "/images/fairs/aticilar-sunum.png",
    captionKey: "home.fairsCaptionDisplay",
  },
  {
    src: "/images/fairs/kibris-ziyaret.png",
    captionKey: "home.fairsCaptionCyprus",
  },
  {
    src: "/images/fairs/iran-ziyaret.png",
    captionKey: "home.fairsCaptionIran",
  },
  {
    src: "/images/fairs/kibris-ziyaret-2.png",
    captionKey: "home.fairsCaptionCyprus",
  },
  {
    src: "/images/fairs/stand-adana.png",
    captionKey: "home.fairsCaptionAdana",
  },
  {
    src: "/images/fairs/iran-ziyaret-2.png",
    captionKey: "home.fairsCaptionIran",
  },
  {
    src: "/images/fairs/stand-adana-2.png",
    captionKey: "home.fairsCaptionAdana",
  },
];
