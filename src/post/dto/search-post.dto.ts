export class SearchPostDto {
    title?: string
    body?: string
    view?: 'DESC' | 'ASC'
    limit?: number
    take?: number
    tag: string
}