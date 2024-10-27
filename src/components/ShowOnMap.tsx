interface ShowOnMapProps {
  street: string;
  city: string;
  postcode: string
}

function ShowOnMap({street, city, postcode}: ShowOnMapProps) {
  if (!street || !city || !postcode) {
    return null
  }

  const formattedAddress = `${street}, ${city}, ${postcode}`;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formattedAddress)}`;

  return (
    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
      Show on map
    </a>
  );
}

export default ShowOnMap
