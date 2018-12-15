
interface UserService {

  /**
   * Authenticates a user.
   * 
   * @param username Username who's trying to login.
   * @param password Password of the user logging in.
   */
  authenticate(username: String, password: String): String;
}

export default UserService