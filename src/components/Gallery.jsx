import Profile from "./Profile";

export default function Gallery() {
  let person = {
    name: "Gregorio Y. Zara",
    image: {
      baseUrl: "https://i.imgur.com/",
      imageId: "7vQD0fP",
      imageType: ".jpg",
    },
    profession: "Scientist",
  };

  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile size={90} person={person} />
    </section>
  );
}
