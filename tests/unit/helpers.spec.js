import { getData } from '@/helpers/graphql'
import { isExpired, authHeader } from '@/helpers/auth'

describe('Helpers tests', () => {
  test('getData test', () => {
    const responseMock = {
      data: {
        somePath: {
          foo: 'bar'
        }
      }
    }
    expect(getData('somePath', responseMock)).toEqual({ foo: 'bar' })
  })

  test('isExpired test', () => {
    const oldDate = '1450786210'
    const furtherDate = '1580674802'
    expect(isExpired(oldDate)).toBeTruthy()
    expect(isExpired(furtherDate)).toBeFalsy()
  })

  test('authHeader test', () => {
    const requestMock = {
      foo: 'bar',
      bar: 'foo',
      headers: {}
    }
    const expected = {
      foo: 'bar',
      bar: 'foo',
      headers: {
        authorization: 'Bearer some-token'
      }
    }

    expect(authHeader(requestMock, 'some-token')).toEqual(expected)
  })
})
