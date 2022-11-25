import axios from "axios"


export const fetchGraphQL = () => {

    const options = {
        method: 'POST',
        url: 'https://countries.trevorblades.com/',
        headers: {
            'content-type': 'application/json',
        },
        data: {
            query: `{
                countries {
                  name
                  native
                }
            }`
        }
    };


    return new Promise((resolve, reject) => {
        axios.request(options)
            .then((result) => {
              console.log(result.data)
              resolve(result.data)
            })
            .catch((error) => {
                console.log("Error =>", error)
                reject(error)
            })

    })
}