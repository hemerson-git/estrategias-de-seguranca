import { NowRequest, NowResponse } from '@vercel/node';
import api from '../src/services/api';

export default async ( request: NowRequest, response: NowResponse ) => {
  try {
    const { data, status } = await api.post(`/${request.query.name}`, {
      ...request.body
    });

    response.status(status).send(data);
  } catch (error) {
    if(error.response) {
      return response.status(error.response.status).send(error.response.data);
    }

    return response.status(500).send(error.message);
  }
}
