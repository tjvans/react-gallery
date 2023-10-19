export default function Avatar({person, size}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person, size)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function getImageUrl(person, size = 's') {
  let imageQuality = size >= 90 ? '' : 's'
  return (
    person.image.baseUrl +
    person.image.imageId +
    imageQuality +
    person.image.imageType
  )
}
