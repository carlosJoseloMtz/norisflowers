
class BaseResponse {

  status: number = 0
  success: boolean = true

  constructor () {
    this.status = 200
    this.success = true
  }
}

class ErrorResponse extends BaseResponse {

  errorMessage: string

  constructor (errorMessage: string) {
    super()

    this.errorMessage = errorMessage
    this.status = 500
    this.success = false
  }

}

class SuccessResponse<DataType> extends BaseResponse {

  data: DataType

  constructor (data: DataType) {
    super()

    this.data = data
  }

}

export {SuccessResponse, ErrorResponse}