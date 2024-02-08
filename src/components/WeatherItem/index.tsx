import './styles.css'

interface IProps {
  icon: string
  title: string
  value: string
}

export function WeatherItem({ icon, title, value }: IProps) {
  return (
    <div className="weather-item">
      <img src={icon} alt={title} />
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  )
}
