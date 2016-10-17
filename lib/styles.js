//
// Library useful for styling like color, type, "mixins", etc.
//
export const smallMargin = 20
export const mediumMargin = 30
export const largeMargin = 50
export const graySemibold = '#666666'
export const purpleRegular = '#6e1fff'
export const grayRegular = '#e5e5e5'
export const sidebarWidth = 300

const garamond = "'" + [
  'Adobe Garamond W08',
  'adobe-garamond-pro',
  'AGaramondPro-Regular',
  'Times New Roman',
  'Times',
  'serif'
].join("', '") + "'"

const avantgarde = "'" + [
  'ITC Avant Garde Gothic W04',
  'AvantGardeGothicITCW01D 731075',
  'AvantGardeGothicITCW01Dm',
  'Helvetica',
  'sans-serif'
].join("', '") + "'"

export const type = (family, size = 'body') => {
  if (family === 'garamond') {
    return {
      fontFamily: garamond,
      fontSize: {
        largeHeadline: '37px',
        smallHeadline: '25px',
        largeBody: '20px',
        body: '17px',
        largeCaption: '15px'
      }[size],
      lineHeight: {
        largeHeadline: '1.2em',
        smallHeadline: '1.4em',
        largeBody: '1.33em',
        body: '1.5em',
        largeCaption: '1.25em'
      }[size]
    }
  } else if (family === 'avantgarde') {
    return {
      fontFamily: avantgarde,
      fontSize: {
        extraLargeHeadline: '24px',
        largeHeadline: '17px',
        smallHeadline: '11px',
        body: '13px'
      }[size],
      lineHeight: '1.33em',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }
  }
}

export const flatButton = (mode) => {
  if (mode === 'dark') {
    return Object.assign({
      color: 'white',
      background: 'black',
      border: 0,
      padding: `10px ${smallMargin}px`
    }, type('avantgarde', 'body'))
  }
}
