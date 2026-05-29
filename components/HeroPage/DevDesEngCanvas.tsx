// DevelopDesignEngageCanvas.tsx
import React from "react";

export const DevelopDesignEngageCanvas: React.FC = () => {
  return (
    <div className="triad-root">
      <div className="triad-circles">
        <div className="circle circle-1" />
        <div className="circle circle-2" />
        <div className="circle circle-3" />
      </div>

      <div className="triad-labels">
        <span className="triad-label triad-label--dev">Build</span>
        <span className="triad-label triad-label--design">Automate</span>
        <span className="triad-label triad-label--engage">Analyze</span>
      </div>
    </div>
  );
};
