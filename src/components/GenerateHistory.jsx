import { GENERATE_DATA } from "../constants";
import {QRCodeSVG} from 'qrcode.react';

export const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

  return (
    <ol>
      {data.map((text) => {
        return <li key={text} style={{marginBottom: 30}}>
          {text}
          <br />
          <QRCodeSVG value={text} size={70} />
        </li>
      })}
    </ol>
  );
}

