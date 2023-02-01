export const localePrepare = (selection: any) => {
  return {
    ...selection,
    title: selection.title
      ? typeof selection.title === 'string'
        ? selection.title
        : JSON.stringify(selection.title)
      : null,
    subtitle: selection.subtitle
      ? typeof selection.subtitle === 'string'
        ? selection.subtitle
        : JSON.stringify(selection.subtitle)
      : null,
  }
}
