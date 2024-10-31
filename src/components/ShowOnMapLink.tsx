import {memo} from "react";

interface ShowOnMapProps {
  street: string | undefined;
  city: string | undefined;
  postcode: string | undefined;
}

const ShowOnMapLink = memo(({street, city, postcode}: ShowOnMapProps) => {
  if (!street || !city || !postcode) return null;

  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street}, ${city}, ${postcode}`)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 underline"
    >
      Show on map
    </a>
  );
})

export default ShowOnMapLink
