import * as React from "react";
import Popup from "react-map-gl";

function Pops() {
  const [showPopup, setShowPopup] = React.useState(true);

  return (
    <Popup
      longitude={-100}
      latitude={40}
      anchor="bottom"
      onClose={() => setShowPopup(false)}
    >
      You are here
    </Popup>
  );
}

// const PositionDisplay = () => {
// 	const [center] = useAtom(mapCenterAtom);
// 	return (
// 		<div>
// 			<div>lat: {center?.lat.toFixed(2)}</div>
// 			<div>lng: {center?.lng.toFixed(2)}</div>
// 		</div>
// 	);
// };

export default Pops;
