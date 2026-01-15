export const defaultSEO = {
  title: "Tamilselvan | Frontend Developer",
  description:
    "Frontend Developer portfolio built with React, Tailwind CSS, and modern web technologies.",
  image: "/og-image.png",
  url: "https://yourdomain.com",
};

export function buildSEO({
  title,
  description,
  image,
  url,
}) {
  return {
    title: title || defaultSEO.title,
    description: description || defaultSEO.description,
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
  };
}
