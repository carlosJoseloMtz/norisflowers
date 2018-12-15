import UserService from '../UserService'

class DefaultUserService implements UserService {
  
  authenticate(username: String, password: String): String {
    return ""
  }
}

export default DefaultUserService