
export const LINK_PDF = 'LINK_PDF'
export const PHOTO_LINK = 'PHOTO_LINK'
export const AGREGAR = 'AGREGAR'

export const linkPDF = (link) => ({
    type:LINK_PDF,
    payload:link
})

export const photoLink = (photo) => ({
    type:PHOTO_LINK,
    payload:photo
})
export const agregarCarrito = (producto) => ({
    type:AGREGAR,
    payload:producto
})

