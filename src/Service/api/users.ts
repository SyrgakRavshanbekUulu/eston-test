import { client } from 'Service/axios';
import { IUsers } from 'Shared/Types/users';

class Users {
  getUser() {
    return client.get<IUsers[]>('users')
  }
}

export default Users;