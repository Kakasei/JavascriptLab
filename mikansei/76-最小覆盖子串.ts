function minWindow(s: string, t: string): string {
    const n =s.length
    
    let left = 0,right = 0

    const map = new Map()
    for(const c of t){
        map.set(c,(map.get(c) ?? 0)+1)
    }


    while(left<n){
        while(right-left +1< t.length){
            right++
        }


    }
};