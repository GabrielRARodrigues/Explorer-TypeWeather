import { api } from './api'

export interface ICityProps {
  id: string
  name: string
  latitude: number
  longitude: number
}

export interface ICityAPIResponse {
  id: string
  name: string
  sys: {
    country?: string
  }
  coord: {
    lat: number
    lon: number
  }
}

export async function getCityByNameService(
  name: string
): Promise<ICityProps[]> {
  try {
    const { data } = await api.get<ICityAPIResponse>(`/weather?q=${name}`)

    const city: ICityProps = {
      id: data.id,
      name: data.sys.country ? `${data.name}, ${data.sys.country}` : data.name,
      longitude: data.coord.lon,
      latitude: data.coord.lat
    }

    return [city]
  } catch (error) {
    return []
  }
}
