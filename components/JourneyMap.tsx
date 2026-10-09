import type en from "../messages/en.json";

type Labels = typeof en.journey.map;

export function JourneyMap({ labels }: { labels: Labels }) {
  return (
    <div className="journey-map">
      <svg viewBox="0 0 640 560" role="img" aria-label={labels.caption}>
        <defs>
          <pattern id="map-grid" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0H0V34" fill="none" stroke="#d8dece" strokeWidth=".7" />
          </pattern>
          <pattern id="map-blocks" width="38" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(-17)">
            <path d="M4 5h24v16H4z" fill="#e5e8dd" stroke="#d3d8cd" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="640" height="560" fill="#eef0e6" />
        <rect width="640" height="560" fill="url(#map-grid)" opacity=".62" />
        <path d="M145 0h495v275c-66-25-101 1-153-18-66-24-91-2-147-21-53-19-89 8-145-11-47-15-81 2-121-23V0Z" fill="#dce6d5" />
        <path d="M195 0c73 56 15 105 94 141s43 84 121 110 37 70 109 103" fill="none" stroke="#c5d6c5" strokeWidth="20" opacity=".56" />
        <g fill="none" stroke="#c2d1bf" strokeWidth="1.4" opacity=".8">
          <path d="M171 28c86 6 81 55 159 55s85 47 151 39 72 34 112 34" />
          <path d="M150 59c76 12 88 55 151 56s79 42 143 36 96 42 146 44" />
          <path d="M173 97c55 12 70 53 130 58s83 34 128 37 93 31 123 48" />
          <path d="M203 138c43 18 73 38 115 51s77 29 113 46 68 25 95 43" />
          <path d="M265 178c37 19 64 28 93 44s57 30 83 46 49 25 68 39" />
        </g>
        <path d="M0 426c91-20 135-27 202-13s105 53 179 48 130-44 259-27v126H0Z" fill="url(#map-blocks)" opacity=".88" />
        <path d="M-20 455c109-31 168-25 242-3 74 22 112 50 190 34 77-16 143-50 253-36" fill="none" stroke="#d4e3e2" strokeWidth="13" />
        <path d="M-20 455c109-31 168-25 242-3 74 22 112 50 190 34 77-16 143-50 253-36" fill="none" stroke="#fafaf5" strokeWidth="2" />
        <g fill="none" stroke="#d1d5ca" strokeWidth="2">
          <path d="M0 373 181 560M68 340 302 560M460 359 596 560M0 523 398 394M160 560 640 416" />
        </g>
        <path d="M113 459c61-19 102-49 164-90" fill="none" stroke="#6e8d74" strokeWidth="9" strokeLinecap="round" />
        <path d="M113 459c61-19 102-49 164-90" fill="none" stroke="#f4f2e9" strokeWidth="2" strokeDasharray="4 9" />
        <path d="M277 369c57-37 100-83 153-144" fill="none" stroke="#384d3f" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
        <path d="M430 225c40-47 39-92 74-115 39 19 34 65 2 95-17 15-46 15-76 20" fill="none" stroke="#384d3f" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
        <g fontFamily="Arial, sans-serif" fill="#667063" fontSize="10" fontWeight="700" letterSpacing="2">
          <text x="42" y="40">{labels.north}</text>
        </g>
        <path d="m49 50-7 17h14z" fill="#34493b" />
        <g fontFamily="Arial, sans-serif" fill="#737a6e" fontSize="10" letterSpacing="1.2">
          <text x="320" y="548" textAnchor="middle">{labels.caption}</text>
        </g>
        <MapMarker x={113} y={459} number="1" />
        <MapMarker x={277} y={369} number="2" />
        <MapMarker x={430} y={225} number="3" />
        <MapMarker x={504} y={110} number="4" />
        <MapMarker x={453} y={309} number="5" />
        <MapLabel x={34} y={490} title={labels.meeting} detail={labels.bus.replace("Bus ", "")} />
        <MapLabel x={196} y={397} title={labels.stop} />
        <MapLabel x={362} y={247} title={labels.temple} detail={labels.address} />
        <MapLabel x={438} y={70} title={labels.walk} />
        <MapLabel x={474} y={335} title={labels.food} />
        <g transform="translate(26 518)">
          <path d="M0 0h16" stroke="#6e8d74" strokeWidth="5" strokeLinecap="round" />
          <text x="23" y="4" fontFamily="Arial, sans-serif" fontSize="10" fill="#626b5f">{labels.legend}</text>
          <path d="M114 0h16" stroke="#384d3f" strokeWidth="2" strokeDasharray="2 5" strokeLinecap="round" />
          <text x="137" y="4" fontFamily="Arial, sans-serif" fontSize="10" fill="#626b5f">{labels.walkLegend}</text>
        </g>
        <g transform="translate(522 450)">
          <circle r="56" fill="#f7f5ed" opacity=".94" />
          <path d="M-30 12c16-16 30-24 58-31M-25 20c16-13 27-17 49-22" fill="none" stroke="#9ead97" strokeWidth="3" />
          <text x="0" y="37" textAnchor="middle" fontFamily="Georgia,serif" fontSize="12" fill="#34493b">{labels.city}</text>
        </g>
      </svg>
    </div>
  );
}

function MapMarker({ x, y, number }: { x: number; y: number; number: string }) {
  return <g><circle cx={x} cy={y} r="13" fill="#294233" stroke="#f6f4ee" strokeWidth="3" /><text x={x} y={y + 4} textAnchor="middle" fill="white" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700">{number}</text></g>;
}

function MapLabel({ x, y, title, detail }: { x: number; y: number; title: string; detail?: string }) {
  return <g fontFamily="Arial,sans-serif" fill="#28362d" fontSize="11" fontWeight="700"><text x={x} y={y}>{title}</text>{detail && <text x={x} y={y + 15} fontSize="9" fontWeight="400" fill="#626b5f">{detail}</text>}</g>;
}
