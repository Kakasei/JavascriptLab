function subsets(nums: number[]): number[][] {
    const result:number[][]=[]
    result[0]=[]
    const n = nums.length
    let subset:number[] = []

    // recursion(i)枚举第i个元素选或不选的子集情况
    const recursion =(i:number)=>{
        // 边界情况
        if(i===n-1){
            subset.push()
        }

        // 选第i个元素
        subset.push(nums[i])
        recursion(i+1)
        
    }
}
