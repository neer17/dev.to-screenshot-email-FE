import React from "react";

export default function Header({ handleExport }) {
  return (
    <div className="header_root">
      <span>DASHBOARD</span>
      <div class="export_btn" onClick={handleExport}>
        Export Screenshot
      </div>
    </div>
  );
}
