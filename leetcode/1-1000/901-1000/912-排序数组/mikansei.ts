function sortArray(nums: number[]): number[] {
    // 每次划分都可以至少排好一个元素
    function partition(nums: number[], left: number, right: number) {
        // （1）
        // 子数组中随机取一个基准元素
        const index = left + Math.floor(Math.random() * (right - left + 1));
        const pivot = nums[index];
        // 交换基准元素到子数组开头，方便后续划分
        [nums[index], nums[left]] = [nums[left], nums[index]];

        // （2）
        // 此时子数组示意：
        // [pivot | <=pivot | 尚未划分 | >=pivot ]
        //         i                          j
        // i j 逐渐向中间遍历
        let i = left + 1,
            j = right;
        while (true) {
            // 此处不能是>=pivot <=pivot
            // 当nums元素全部相同时
            while (i <= j && nums[i] <= pivot) {
                i++;
            }
            while (i <= j && nums[j] >= pivot) {
                j--;
            }
            if (i >= j) {
                break;
            }
            // 此时nums[i]>pivot，nums[j]<pivot，交换二者
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
        // （3）
        // 此时子数组示意：
        // [pivot | <=pivot | >=pivot ]
        //                j   i  
        // 交换nums[index] nums[j]，使得：
        // [ <=pivot | pivot | >=pivot ]
        [nums[index],nums[j]]=[nums[j],nums[index]]
        
        // 返回此时pivot的下标，即j
        return j
    }

    // 快速排序nums的[left,right]区间
    function quickSort(nums:number[],left:number,right:number){
        if(left>=){

        }
        const i = partition(nums,left,right);
        quickSort(nums,left,i-1)
        quickSort(nums,i+1,right)
    }
}
