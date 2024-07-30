const pbUrl:string = 'https://pb.razdev.website/api/files'
export const collectionIdPortfolio:string = '88rhulzvcktlyku'

export function getImgUrl(collectionId: string | undefined, recordId: string | undefined, fileName: string | undefined) {
    return `${pbUrl}/${collectionId}/${recordId}/${fileName}`
}