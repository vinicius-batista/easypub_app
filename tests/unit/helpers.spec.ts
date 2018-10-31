import { getData } from '@/helpers/graphql'
import { isExpired, authHeader, parseJwt } from '@/helpers/auth'
import { formatMoney } from '@/helpers/format'

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
    const oldDate = 1450786210
    const furtherDate = 1580674802
    expect(isExpired(oldDate)).toBeTruthy()
    expect(isExpired(furtherDate)).toBeFalsy()
  })

  test('authHeader test', () => {
    const requestMock: any = {
      foo: 'bar',
      query: '',
      bar: 'foo',
      headers: {}
    }
    const expected = {
      foo: 'bar',
      query: '',
      bar: 'foo',
      headers: {
        authorization: 'Bearer some-token'
      }
    }

    expect(authHeader(requestMock, 'some-token')).toEqual(expected)
  })

  test('formatMoney test', () => {
    expect(formatMoney('22.22')).toEqual('R$ 22,22')
    expect(formatMoney('11.2')).toEqual('R$ 11,20')
    expect(formatMoney('11')).toEqual('R$ 11,00')
  })

  test('parseJwt test', () => {
    const tokenParse = parseJwt('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NDEwMTYxOTQsImV4cCI6MTU3MjU1MjE5NCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jXHMxqlu_nfCUq3Wm27NkBk3NCu4JDDL_x0tAcWyZ2o')
    expect(tokenParse).toHaveProperty('exp')
  })
})
