export interface Itemid {
    "id": number,
    "name": string,
    "names": Array<{
        "language": {
            "name":string
        }
        "name":string
    }>
    "cost": number,
    "sprites":
    {
        "default": string
    },
    "effect_entries": Array<{
        "effect": string
    }>
}
