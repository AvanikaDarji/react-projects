import React, { useState, useEffect } from 'react'

export default function User() {
  const [userData, setData] = useState([])

  /*useEffect(async () => {
                                                          const result = await axios('https://jsonplaceholder.typicode.com/users')
                                                          setData(result.data)
                                                        }, [setData])*/
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [setData])

  const handleChange = (data) => {
    if (data == 'Name') {
      sortName()
    }
    if (data == 'UserName') {
      sortUserName()
    }
  }
  const sortId = (a, b) => {
    return a.id < b.id ? 1 : -1
  }
  /*  const sortedById = [...userData].sort((a, b) => {
        return b.id - a.id;
    })
    setData(sortedById);
}*/

  const sortUserName = () => {
    /* const compare = (a, b) => {
                                                                                   const aName = a.username.toUpperCase()
                                                                                   const bName = b.username.toUpperCase()
                                                                                   let comparison = 0
                                                                                   if (aName > bName) {
                                                                                     comparison = 1
                                                                                   } else if (bName > aName) {
                                                                                     comparison = -1
                                                                                   }
                                                                                   return comparison
                                                                                 }*/
    const compare = (a, b) => {
      const aName = a.username.toUpperCase()
      const bName = b.username.toUpperCase()
      return aName > bName ? 1 : -1
    }
    setData([...userData].sort(compare))
  }
  const sortName = () => {
    const compare = (a, b) => {
      const aName = a.name.toUpperCase()
      const bName = b.name.toUpperCase()
      let comparison = 0
      if (aName > bName) {
        comparison = 1
      } else if (aName < bName) {
        comparison = -1
      }
      return comparison
    }
    setData([...userData].sort(compare))
    console.log(userData)
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            {' '}
            <th
              onClick={() => {
                sortId()
              }}
            >
              {' '}
              Id{' '}
            </th>{' '}
            <th
              onClick={() => {
                handleChange('Name')
              }}
            >
              Name{' '}
            </th>{' '}
            <th
              onClick={() => {
                handleChange('UserName')
              }}
            >
              {' '}
              UserName{' '}
            </th>{' '}
            <th> Email </th>{' '}
          </tr>{' '}
        </thead>{' '}
        <tbody>
          {' '}
          {userData.map((element) => {
            return (
              <tr>
                {' '}
                <td> {element.id} </td> <td> {element.name} </td>{' '}
                <td> {element.username} </td> <td> {element.email} </td>{' '}
              </tr>
            )
          })}{' '}
        </tbody>{' '}
      </table>{' '}
    </div>
  )
}
