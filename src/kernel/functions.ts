import bcryptjs from "bcryptjs"

export async function hash(password: string) {
    return new Promise((resolve, reject) => {

        bcryptjs.hash(password, process.env.BCRYPTJS!,(err, hash) => {
            err ? reject(err) : resolve(hash)
        })
    })
}

// export async function compare(params) {

// }