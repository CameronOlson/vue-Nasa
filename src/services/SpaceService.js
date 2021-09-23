import { AppState } from '../AppState.js'
import { nasaApi } from './AxiosService.js'

class SpaceService {
  async getPhotos(query) {
    const res = await nasaApi.get('apod?api_key=RmC0Ijbaebs1QwA72LIsFEHSrpj2HUTQ5gOF0CUc&date=' + query)
    AppState.space = res.data
  }
}

export const spaceService = new SpaceService()
