const field = []

export const addPlant = (seed) => {
    field.push(seed)
}

export const usePlants = () => {
    return field.slice()
}

const seedObj= {
    type: "seed",
    height: "tall",
    output: "not zero"
}

addPlant(seedObj)
usePlants()
console.log(field)