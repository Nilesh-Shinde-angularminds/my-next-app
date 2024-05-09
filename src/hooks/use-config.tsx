import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

import { Style } from "./Thems"
import { Theme } from "./Thems"

type Config = {
    style: Style["name"]
    theme: Theme["name"]
    radius: number
}

const configAtom = atomWithStorage<Config>("config", {
    style: "default",
    theme: "zinc",
    radius: 0.5,
})

export function useConfig() {

    return useAtom(configAtom)
}