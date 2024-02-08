import './styles.css'
import { NextDaysItem, TNextDaysItemProps } from '../NextDaysItem'

interface IProps {
  data: TNextDaysItemProps[]
}

export function NextDays({ data }: IProps) {
  return (
    <section className="next-days">
      <h1>Previsão para 5 dias</h1>

      <div className="next-next-detail">
        {data.map(item => (
          <NextDaysItem key={item.day} data={item} />
        ))}
      </div>
    </section>
  )
}
