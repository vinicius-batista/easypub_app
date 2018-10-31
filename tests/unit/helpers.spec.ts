import { getData } from '@/helpers/graphql'
import { isExpired, authHeader } from '@/helpers/auth'
import { formatMoney } from '@/helpers/format'
import { GraphQLRequest } from 'apollo-link'

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
})
