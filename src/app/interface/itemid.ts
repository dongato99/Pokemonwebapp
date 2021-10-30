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
    "efffect_entries": Array<{
        "effect": string
    }>
}
