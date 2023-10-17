import Profile from "./Profile";

export default function Gallery() {
  const people = [
    {
      name: "Gregorio Y. Zara",
      image: {
        baseUrl: "https://i.imgur.com/",
        imageId: "7vQD0fP",
        imageType: ".jpg",
      },
      profession: "Scientist",
    },
    {
      name: "Katherine Johnson",
      image: {
        baseUrl: "https://i.imgur.com/",
        imageId: "MK3eW3A",
        imageType: ".jpg",
      },
      profession: "Mathematician",
    },
    {
      name: "Lin Lanying",
      image: {
        baseUrl: "https://i.imgur.com/",
        imageId: "1bX5QH6",
        imageType: ".jpg",
      },
      profession: "Physicist",
    },
  ];

  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
