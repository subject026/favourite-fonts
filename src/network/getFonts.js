import config from "../config";

export default async () => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${config.API_KEY}&sort=popularity`
    );
    const data = await res.json();
    const allFonts = data.items.map(font => {
      const { family } = font;
      const urlFamily = family.replace(/ /g, "+");
      const variant = font.variants.includes("regular")
        ? ":regular"
        : font.variants.includes("300")
        ? ":300"
        : "";
      /*
        Above doesn't cover these fonts:

          - Coda Caption
          - UniFrakturCook
          - Molle
      */
      const url = `https://fonts.googleapis.com/css?family=${urlFamily}${variant}`;
      return {
        family,
        url
      };
    });
    return allFonts;
  } catch (err) {
    console.error(err);
  }
};
