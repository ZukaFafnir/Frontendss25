let arr=[]
do{
    console.log(
    `1. Nhập mảng số nguyên
     2. Hiển thị mảng
     3. Tìm các phần tử chẵn và lẻ
     4. Tính trung bình cộng của mảng
     5. Xóa phần tử tại vị trí chỉ định
     6. Tìm phần tử lớn thứ hai trong mảng
     7. Thoát chương trình` )
    let choice =parseInt(prompt(`Nhap lua chon`))
    switch(choice){
        case 1:
            nhapMang()
            break
        case 2:
            console.log(`Ban chon hiển thị mảng: ${arr.join(" ")}`)
            break
        case 3:
            timPhanTuChanLe()
            break
        case 4:
            tinhTrungBinhCong()
            break
        case 5:
            deleteElement()
            break
        case 6:
            timPhanTuLonThu2()
            break
        case 7:
            console.log(`Thoat chuong trình`)
            return
        default:
            console.log(`Invalid data!!!`)

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
        
        function timPhanTuChanLe(){
            if(arr.length===0){
                console.log(`Mang rong`)
                return
            }
            let oddNum=``
            let evenNum=``
            if(arr.length===0){
                console.log(` Mảng rỗng`)
                return
            }
            for(let i=0;i<arr.length;i++){
                if(arr[i]%2===0){
                    evenNum+=`${arr[i] }`
                }else{
                    oddNum+=`${arr[i] }`
                }
            }
            console.log(`So chan trong mang ${evenNum}`)
            console.log(`So le trong mang ${oddNum}`)
        }
        function tinhTrungBinhCong(){
            if(arr.length===0){
                console.log(`Mang rong`)
                return
            }
            let TrungBinhCong
            let TotalValue=0
            for(let i=0;i<arr.length;i++){
                TotalValue+=arr[i]
            }
            TotalValue=Number(TotalValue)
            TrungBinhCong=TotalValue/arr.length
            console.log(`Trung binh cong cua mang là ${TrungBinhCong}`)
        }
        function deleteElement(){
            if(arr.length===0){
                console.log(`Mang rong`)
                return
            }
            let indexDelete=prompt(`Nhap vi tri can xoa`)
            if(Number(indexDelete)>=arr.length || !/^\d+$/.test(indexDelete)){
                console.log(`Vi tri khong hop le`)
                return
            }else{
                arr.splice(indexDelete,1)
                console.log(`Mang sau khi xoa ${arr.join(" ")}`)
            }
        }
        function timPhanTuLonThu2(){
            if(arr.length===0){
                console.log(`Mang rong`)
                return}
            let coppyArr=arr.slice().sort((a,b)=>b-a)
            console.log(`So lớn thứ 2 là ${coppyArr[1]}`)

            }
    