import { ControllerRenderProps } from "react-hook-form"

export interface IformData {
    name: string
    label: string
    input: (field: ControllerRenderProps<any>) => React.ReactElement
}