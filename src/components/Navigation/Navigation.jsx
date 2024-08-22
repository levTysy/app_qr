import { Link } from "react-router-dom";
import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={s.container}>
      <Link to="/app_qr/generate">Генерировать Qr</Link>
      <Link to="/app_qr/scan">Сканировать Qr</Link>
      <Link to="/app_qr/generateHistory">История генерирования</Link>
      <Link to="/app_qr/scanHistory">История сканирования</Link>
    </nav>
  )
}