export const wrap = (body) => {
    if(body.length < 25) return body
    return(body.substring(0, 80)+'...')
  }