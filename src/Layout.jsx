import { Routes, Route } from "react-router-dom";import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";
import { Navigation } from "./components/Navigation/Navigation";
import { ScanHistory } from "./components/ScanHistory";
import { GenerateHistory } from "./components/GenerateHistory";

import s from './layout.module.css';



export const Layout = () => {
  return (
    <div className={s.main}>
      <Navigation  />

      <Routes>
        <Route path="/app_qr/generate" element={<QrCodeGenerator />}/>
        <Route path="/app_qr/scan" element={<QrCodeScanner />}/>
        <Route path="/app_qr/scanHistory" element={<ScanHistory />}/>
        <Route path="/app_qr/generateHistory" element={<GenerateHistory />}/>
      </Routes>
    </div>
  );
}