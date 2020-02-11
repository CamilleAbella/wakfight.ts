
export function map( n:number, start1:number, stop1:number, start2:number, stop2:number ): number {
    const newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2
    if (start2 < stop2) 
    return constrain( newval, start2, stop2 )
    return constrain( newval, stop2, start2 )
}

export function constrain( n:number, low:number, high:number ): number {
    return Math.max( Math.min( n, high), low )
}