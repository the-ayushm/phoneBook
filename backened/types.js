import zod from "zod"
const validContact = zod.object({
    namee: zod.string(),
    numberr: zod.number()
})

export { validContact }