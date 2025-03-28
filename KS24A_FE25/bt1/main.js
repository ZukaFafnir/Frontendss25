let arr=[]
do{
    console.log(
    `1. Nhập mảng
    2. Hiển thị mảng
    3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
    4. Tính tổng các phần tử trong mảng
    5. Tìm số lần xuất hiện của một phần tử trong mảng
    6. Sắp xếp mảng tăng dần
    7. Thoát chương trình` )
    let choice =parseInt(prompt(`Nhap lua chon`))
    switch(choice){
        case 1:
            nhapMang()
            break
        case 2:
            console.log(`Mang hien tai ${arr.join(" ")}`)
            break
        case 3:
            timMang()
            break
        case 4:
            tinhTongPhanTu()
            break
        case 5:
            timSolanxuathien()
            break
        case 6:
            sapxepMangTangDan()
            break
        case 7:
            console.log(`Ban chon thoat chuong trinh`)
            break
        default:
            console.log(`Invalid data!!!`)
            break
             
    }
}while(true)
        function nhapMang(){
            arr=[]
            let size
            do{
                size=prompt(`Nhap do dai mang arr`)
                if(size===null||size.trim()===""){
                    console.log(`Ban da chon cancel hoac khong nhap du liêu. Thoat chuong trinh`)
                    return
                }else if(!/^\d+$/.test(size)){
                    console.log(`Ban phai nhap do dai mang la số lớn hơn 0`)

                    continue
                }else if(Number(size)===0){
                    console.log(`Khong the tao mang co do dai la 0`)
                    continue
                }else{
                    console.log(`Do dai mang la ${size}`)
                    size=Number(size)
                    for(let i=0;i<size;i++){
                        let value=prompt(`Nhap gia tri la số nguyên cho phan tu o vi tri thứ ${i}`)
                        if(value===null||value.trim()===""){
                        console.log(`Ban da chon cancel hoac khong nhap du liêu. Thoat chuong trinh`) 
                        return
                        }else if(!/^-?\d+$/.test(value)){
                            console.log(`Khong phai so vui long nhap lai`)
                            i--
                        }else{
                            arr.push(Number(value))
                            console.log(`Nhap thanh cong`)
                        }
                    }
                }

            }while(!/^\d+$/.test(size)||Number(size)<=0)
        }
        function timMang(){
            if(arr.length===0){
                console.log(` Mảng rỗng`)
                return
            }
            let numMax=Math.max(...arr)
            let numMin=Math.min(...arr)
            console.log(`Gia tri lon nhat là${numMax} và nhỏ nhất là ${numMin}`)
        }
        function tinhTongPhanTu(){
            if(arr.length===0){
                console.log(` Mảng rỗng`)
                return
            }
            let totalNum=0
            for(let i=0;i<arr.length;i++){
                totalNum+=arr[i]
            }
            console.log(`Tong gia tri cua cac phan tu trong mang la ${totalNum}`)


        }
        function timSolanxuathien(){
            if(arr.length===0){
                console.log(` Mảng rỗng`)
                return
            }
            let checkNum=Number(prompt(`Nhap số cần kiểm tra`))
            let count=0
            for(let i=0;i<arr.length;i++){
                if(arr[i]===checkNum){
                    count++
                }
            }
            console.log(`${checkNum} xuat hiện trong mảng ${count} lần`)
        }
        function sapxepMangTangDan(){
            if(arr.length===0){
                console.log(` Mảng rỗng`)
                return
            }
            arr.sort((a,b)=>a-b)
            console.log(`Mang hien tai la ${arr.join(" ")}`)
        }
    