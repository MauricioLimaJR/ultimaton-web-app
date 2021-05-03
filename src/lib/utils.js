export const getImagePath = (element, variant) => {
  console.log(element.thumbnail.path)
  const url = `${element.thumbnail.path}/${variant}.${element.thumbnail.extension}`
  return url
}

export const getNameOrTitle = (element, formatted = false) => {
  const legend = element.name || element.title

  if (formatted) {
    return legend.length > 24 ? legend.substr(0, 25) + '...' : legend
  }

  return legend
}
