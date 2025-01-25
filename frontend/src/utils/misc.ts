export function convertToSlug(value: string){
    return value.toLowerCase().replace(" ", "-")
}